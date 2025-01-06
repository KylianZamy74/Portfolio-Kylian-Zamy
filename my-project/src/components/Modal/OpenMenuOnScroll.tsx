import { FaArrowLeftLong } from "react-icons/fa6";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "./MenuModal";

export default function MenuOpen() {
    const { isOpen, openModal } = useModalStore();
    return (
        <>
            <button className="fixed top-20 right-0 bg-[#51514F] p-4 rounded-full lg:hidden" onClick={openModal}>
                <span className="text-[#F97316]"><FaArrowLeftLong /></span>
            </button>
            {isOpen && <Menu />}
        </>
        
    )
}