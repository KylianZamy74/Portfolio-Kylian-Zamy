 // Importation de useState pour gérer l'état de la modale
import { useProjectModalStore } from "@/store/ModalStore/useProjectModalStore";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useExtendImageStore } from "@/store/ModalStore/useExtendImageStore";
import {motion} from "framer-motion";

const images = {
    img_1: "/Images/Cinedelices.webp",
    img_2: "/Images/detail.webp",
    img_3: "/Images/movies_series.webp",
    img_4: "/Images/recipes.webp",
    img_5: "/Images/Cinedelice_Home_page.webp"
};

export default function Project() {
    const { closeProjectModal, isProjectOpen } = useProjectModalStore();
    
    // État local pour gérer l'affichage de l'image agrandie
    const { isExtendImageOpen, selectedImage, openExtendImageModal, closeExtendImageModal } = useExtendImageStore();

    return (
        <>
        {isProjectOpen && (
            <motion.div 
            className="fixed top-0 left-0 h-screen w-screen bg-[#C85A52] text-[#ECC68F] overflow-y-auto lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 }}}             
            >
            <div className="flex justify-between items-center p-4 text-4xl mb-10">
                <div>Kylian ZAMY</div>
                <button onClick={closeProjectModal}>
                    <RxCross2 />
                </button>
            </div>
            <section className="flex flex-col justify-center items-center text-xs">
                <h2 className="text-5xl font-bold">Cinédelices</h2>

                {/* Swiper Carousel */}
                <div className="w-full flex justify-center items-center mt-6">
                    <Swiper     
                        centeredSlides={true}               
                        slidesPerView={1.2}
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="w-full"
                    >
                        {Object.values(images).map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="py-8 flex justify-center items-center h-full w-full">
                                    <Image
                                        className="shadow-lg cursor-pointer"
                                        src={src}
                                        width={350}
                                        height={200}
                                        alt={`Image ${index + 1}`}
                                        onClick={() => openExtendImageModal(src)} // Ouvrir la modale au clic
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
              
                <div className="m-4">
                    <h3 className="font-bold">Description</h3>
                    <p className="mt-4">
                        This interactive app combines entertainment and culinary inspiration by offering a movie catalog paired with unique recipes. Users can easily search for movies or recipes and create personalized accounts to craft and save their own custom recipes, enhancing their experience.
                    </p>
                </div>
                <div className="m-4">
                    <h3 className="font-bold">Enterprise</h3>
                    <p className="mt-4">
                        A collaborative training project developed with classmates to prepare for the final exam. This project strengthened our skills in fullstack development, teamwork, and delivering a functional, user-centric application.
                    </p>
                </div>

                <div className="flex flex-col m-4 self-start">
                    <h3 className="font-bold">Stack used</h3>
                    <span className="mt-2">React</span>
                    <span className="mt-2">PostgreSQL</span>
                    <span className="mt-2">Sequelize</span>
                    <span className="mt-2">Sass</span>
                    <span className="mt-2">Node.Js</span>
                    <span className="mt-2">Express.js</span>
                </div>
            </section>

            <div className="flex justify-between p-4 text-xs">
                <div className="flex flex-col">
                    <span>August - September 2024</span>
                    <span>Design - Development & Collaboration Project</span>
                </div>
                <div className="flex flex-col">
                    <span>Email</span>
                    <span>LinkedIn</span>
                    <span>Github</span>
                </div>
            </div>
        </motion.div>
        )}
            
            {isExtendImageOpen && (
                          <motion.div 
                          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          transition={{ duration: 0.2 }}
                      >
                          <div className="relative">
                              <button 
                                  className="absolute top-0 right-0 p-2 text-white"
                                  onClick={closeExtendImageModal}
                              >
                                  <RxCross2 className="text-[#000000]" size={30} />
                              </button>
                              <motion.div
                                  className="overflow-hidden"
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                              >
                                  <Image
                                      src={selectedImage}
                                      width={600}
                                      height={400}
                                      alt="Image agrandie"
                                      className="shadow-lg"
                                  />
                              </motion.div>
                          </div>
                      </motion.div>
                  )}

        </>
    );
}
