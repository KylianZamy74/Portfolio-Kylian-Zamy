import { GrValidate } from "react-icons/gr";
import Inner from "@/components/Layout/Inner";
import Link from "next/link";


export default function addProjectValidated() {
    return (
        <>
            <Inner>       
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-2xl font-semibold mb-6 text-[#FDFAD5]">Votre mail a été envoyé avec succès</h1>
                    <div className="h-40 w-40 flex justify-center items-center bg-[#93D660] rounded-full">
                        <GrValidate className="text-white text-4xl" />
                    </div>
                    <button className="text-[#FDFAD5] text-sm mt-6 cursor-pointer">
                        <Link href={"/"} >Retourner sur la page d&apos;accueil</Link>
                    </button>
                </div>               
            </Inner>
        </>
    );
}
