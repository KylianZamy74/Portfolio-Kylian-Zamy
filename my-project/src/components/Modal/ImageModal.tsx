import { useExtendImageStore } from "@/store/ModalStore/useExtendImageStore";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageModal() {
    const { isExtendImageOpen, selectedImage, closeExtendImageModal } = useExtendImageStore();

    if (!isExtendImageOpen || !selectedImage) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <motion.div
                className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
            >
                <button
                    className="absolute top-2 right-2 text-[#FDFAD5] bg-[#333333] rounded-full px-3 py-1"
                    onClick={closeExtendImageModal}
                >
                    ✕
                </button>
                <Image src={selectedImage} alt="Extended Image" width={800} height={600} className="rounded-lg" />
            </motion.div>
        </div>
    );
};

