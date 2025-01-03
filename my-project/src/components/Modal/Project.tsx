
import { useProjectModalStore } from "@/store/ModalStore/useProjectModalStore";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

export default function Project() {

    const {closeProjectModal} = useProjectModalStore();

    return(
        <>
        
        <div className=" fixed top-0 left-0 h-screen w-screen bg-[#C85A52] text-[#ECC68F] overflow-y-auto">
                <div className="flex justify-between items-center p-4 text-4xl mb-20">
                    <div>Kylian ZAMY</div>
                    <button onClick={closeProjectModal}><RxCross2 /></button>
                </div>
            <section className="flex flex-col justify-center items-center  text-xs">
                <h2 className="text-5xl font-bold">Cinedelices</h2>
                <Image  className="m-4" src={"/Images/Cinedelices.webp"} width={350} height={200} alt="Image Cinedelices"></Image>
                <div className="m-4 ">
                    <h3 className="font-bold">Description</h3>
                    <p className="mt-4">This interactive app combines entertainment and culinary inspiration by offering a movie catalog paired with unique recipes. Users can easily search for movies or recipes and create personalized accounts to craft and save their own curstom recipes, enhancing their experience.
                    </p>
                </div>
                <div className="m-4">
                    <h3 className="font-bold">Enterprise</h3>
                    <p className="mt-4">A collaborative training project developped with classmates to prepare for the final exam. This project strengthened our skills in fullstack development, teamwork, and, and devlivering a functional, user-centric application.
                    </p>
                </div>

                <div className="flex flex-col m-4 self-start ">
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
                    <span>Design -Development & Collaboration Project</span>
                </div>
                <div className="flex flex-col">
                    <span>Email</span>
                    <span>LinkedIn</span>
                    <span>Github</span>
                </div>
            </div>
        </div>
        </>

    )
}