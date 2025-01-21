import { signOut } from "next-auth/react"; 
import ProtectedRoutes from "../../components/ProtectedRoutes/ProtectedRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useGetProjectsStore } from "@/store/FetchStore/getProjectsStore";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useProjectDeleteStore } from "@/store/FetchStore/deleteProject";


export default function Home() {

    const { projects, fetchProjects } = useGetProjectsStore();
    const {deleteProject} = useProjectDeleteStore();

    const { data: session } = useSession();

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

   
    const handleLogout = async () => {
        await signOut({ callbackUrl: "/auth/signin" });  
    };
    const handleDeleteProject = async (projectId: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
            deleteProject(projectId);
        }
    };


    return (
        <>
            <ProtectedRoutes requiredRole="admin">
                <Header />
                <h1 className="text-3xl text-[#FDFAD5] p-16 w-full text-center">Yo mon {session?.user?.name}</h1>

                <div className="flex w-full py-12 px-12 h-screen">
                    {/* Section Ajouter un projet */}
                    <div className="w-1/3 border-r border-[#FDFAD5] px-8">
                        <Link href={"/Admin/addProject"} className="cursor-pointer">
                            <h2 className="text-lg text-[#FDFAD5] bg-[#1E1E1E] text-center rounded w-full py-2 text-sm hover:bg-[#F97316] duration-200">
                                Ajouter un nouveau projet
                            </h2>
                        </Link>
                        <div className="flex justify-center mt-8">
                    <button 
                        onClick={handleLogout} 
                        className="text-[#FDFAD5] bg-[#1E1E1E] hover:bg-red-600 px-6 py-2 rounded text-sm w-full duration-200"
                    >
                        Se déconnecter
                    </button>
                </div>
                    </div>
                    
                    {/* Section liste des projets */}
                    <div className="w-2/3 ml-12">
                        <h2 className="text-3xl text-[#F97316] pb-12 font-bold">Tous les projets</h2>
                        <ul className="space-y-8 w-full text-left">
                            {projects.map((project) => (
                                <li 
                                    key={project.id} 
                                    className="text-[#FDFAD5] text-4xl flex justify-between items-center w-full border-b border-[#FDFAD5] py-4"
                                >
                                    <span>{project.title}</span>
                                    
                                    <span className="cursor-pointer flex gap-4">
                                        <Link href={`/Admin/editProject/${project.id}`}>
                                            <CiEdit className="text-[#F97316] text-2xl" />
                                        </Link>
                                        <button onClick={() => handleDeleteProject(project.id)}>
                                            <MdDelete className="text-[#F97316] text-2xl" />
                                        </button>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bouton de déconnexion */}
               

                <Footer />
            </ProtectedRoutes>
        </>
    );
}
