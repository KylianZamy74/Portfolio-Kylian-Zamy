import ProtectedRoutes from "../../components/ProtectedRoutes/ProtectedRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useGetProjectsStore } from "@/store/FetchStore/getProjectsStore";
import Link from "next/link";

export default function Home() {

    //page d'admin pour editer supprimer les projets
   const { projects, fetchProjects } = useGetProjectsStore();
   
       useEffect(() => {
           fetchProjects();
       }, [fetchProjects]);

    return(
        <>
        {/* <ProtectedRoutes requiredRole="admin">   */}
        <Header />
        <h1 className="text-3xl text-[#FDFAD5] p-16 w-full text-center">Yo mon Kiki !</h1>

        <div className="flex w-full py-12 px-12 h-screen">
            
                <div className="w-1/3 cursor-pointer">
                <Link href={"/Admin/NewProject"}>
                    <h2 className="text-lg text-[#FDFAD5] bg-[#1E1E1E] text-center rounded w-1/2 text-sm">Ajouter un nouveau projet</h2>
                </Link>
                </div>
            
            <div>
                <h2 className="text-3xl text-[#F97316] pb-12 font-bold">Tous les projets</h2>
                <ul className="space-y-8 w-full text-left w-full">
                    {projects.map((project) => (
                        <li key={project.id} className="text-[#FDFAD5] text-4xl "> {project.title} </li>
                    ))}
                </ul>
            </div>
        </div>


        <Footer />
        {/* </ProtectedRoutes> */}
        
        </>
    )
}