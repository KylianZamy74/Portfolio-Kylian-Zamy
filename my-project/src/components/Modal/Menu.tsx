import Link from "next/link";
import { useModalStore } from "@/store/useModalStore";

export default function Menu() {

    const {closeModal} = useModalStore();
    
    return(
        <>
        <nav>
            <li>Projects</li>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <button onClick={closeModal}>Fermer</button>
        </nav>
        </>
    )
}