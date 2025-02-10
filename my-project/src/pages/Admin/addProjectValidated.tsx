import { GrValidate } from "react-icons/gr";
import Inner from "@/components/Layout/Inner";
import Link from "next/link";
import ProtectedRoutes from "../../components/ProtectedRoutes/ProtectedRoutes";

export default function addProjectValidated() {
    return (
        <>
            <Inner>
            <ProtectedRoutes requiredRole="admin">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-2xl font-semibold mb-6 text-anthra">Le Projet a été créer avec succès !</h1>
                    <div className="h-40 w-40 flex justify-center items-center bg-[#93D660] rounded-full">
                        <GrValidate className="text-white text-4xl" />
                    </div>
                    <button className="text-anthra text-sm mt-6 cursor-pointer">
                        <Link href={"/Admin/dashBoard"} >Retourner sur le tableau de bord</Link>
                    </button>
                </div>
                </ProtectedRoutes>
                
            </Inner>
        </>
    );
}
