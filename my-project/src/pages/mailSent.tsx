import { GrValidate } from "react-icons/gr";
import Inner from "@/components/Layout/Inner";
import Link from "next/link";
import { ForbiddenRoutes } from "@/components/ForbiddenRoute/Forbidden";
import { useContactStore } from "@/store/ContactStore/useContactService";



export default function AddProjectValidated() {
    const {
        isAuthorized
    } = useContactStore();

    return (
        <>
            <Inner>  
                <ForbiddenRoutes isAuthorized={isAuthorized}>
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-2xl font-semibold mb-6 text-anthra">Votre mail a été envoyé avec succès</h1>
                    <div className="h-40 w-40 flex justify-center items-center bg-[#93D660] rounded-full">
                        <GrValidate className="text-white text-4xl" />
                    </div>
                    <button className="text-anthra text-sm mt-6 cursor-pointer">
                        <Link href={"/"} >Retourner sur la page d&apos;accueil</Link>
                    </button>
                </div>        
                </ForbiddenRoutes>            
            </Inner>
        </>
    );
}
