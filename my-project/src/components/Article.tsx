import Image from "next/image";
import { IoArrowDown } from "react-icons/io5";
import { useProjectModalStore } from "@/store/ModalStore/useProjectModalStore";

export default function Article() {

    const { openProjectModal } = useProjectModalStore();

    return(
        <>
        <section id="my-work" className=" text-left text-5xl pt-4 bg-[#FDFAD5] p-4 pt-8 w-full">
                            <span className="font-semibold">My<span className="text-[#F97316]"> work</span></span>
                            <article className="flex justify-center mt-12 flex-col items-center">
                                    <Image  src="/Images/Sequentiel.webp" width={350} height={200} alt="Image sequentiel"></Image>                                
                                <span className="text-left w-full mt-4 borderclass">Séquentiel</span>
                                <span className="text-sm text-left w-full mt-4">Implementation & full developpment - 2024</span>
                            </article>
                            
                            <article className="flex justify-center mt-12 flex-col items-center w-full">
                                <div onClick={openProjectModal}>
                                    <Image src="/Images/Cinedelices.webp" width={350} height={200} alt="Image sequentiel"></Image>
                                </div>
                                <span className="text-left w-full mt-4 borderclass">Ciné<span className="text-[#F97316]">delices</span></span>
                                <span className="text-sm text-left w-full mt-4">Design, developpment & collaboration Project - 2024</span>
                            </article>

                    <div className="w-full">
                            <IoArrowDown className="h-12 w-12 mt-8" />
                    </div>
        </section>
        </>

        
    )
}