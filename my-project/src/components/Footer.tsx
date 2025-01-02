import React from "react";

export default function Footer() {

    return (
        <footer className="text-[#FDFAD5] h-screen bg-[#1E1E1E] p-4">
            <div className="flex flex-col my-8">
                <span>Kylian.74940@gmail.com</span>
                <span>+33684722698</span>
            </div>

            <div>
                <p className="text-3xl font-bold my-16">Ready to work together ?</p>
            </div>

            <div className="border-2 border-[#FDFAD5] mt-28 p-2 rounded w-1/3 text-center hover:bg-[#FDFAD5] hover:text-[#1E1E1E] duration-200">
                <span>Get in touch</span>
            </div>

            <div className="flex justify-between mt-20 ">
                <span className="mt-6">Annecy, France</span>
                <div className="flex flex-col">
                    <span>LinkedIn</span>
                    <span>Github</span>
                </div>
            </div>
        </footer>
    )
}