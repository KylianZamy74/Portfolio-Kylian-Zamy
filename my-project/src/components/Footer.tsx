import React from "react";
import Link from "next/link";

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

            <div className="border-2 border-[#FDFAD5] mt-32 p-2 rounded w-2/3 text-3xl text-center hover:bg-[#FDFAD5] hover:text-[#1E1E1E] duration-200">
                <Link href="/contact">Get in touch</Link>
            </div>

            <div className="flex justify-between mt-16 ">
                <span className="mt-6">Annecy, France</span>
                <div className="flex flex-col">
                    <a href="https://www.linkedin.com/in/kylian-zamy-b0a5ab303">LinkedIn</a>
                    <a href="https://github.com/KylianZamy74">Github</a>
                </div>
            </div>
        </footer>
    )
}