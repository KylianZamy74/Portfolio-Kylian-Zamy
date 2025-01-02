import React from "react";

export default function Header() {

    return(
        <header className="flex justify-between items-center p-4">
                <div>
                    <span className="text-[#FDFAD5] text-2xl">Kylian </span> 
                    <strong className="text-[#F97316] text-2xl uppercase">zamy</strong>
                </div>
                <nav className="text-[#FDFAD5]">Menu</nav>
        </header>
    )
}