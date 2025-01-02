import Link from "next/link"
import '@/styles/global.css';
import Header from "@/components/Header";
import { useModalStore } from "@/store/useModalStore";
import Menu from "@/components/Modal/Menu";

export default function About() {
const { isOpen } = useModalStore();
    return (
        <>
        <Header />
            <h1 className="text-sm">Bienvenue sur la page a propos </h1>
            <div>
                <Link href={'/'}>Revenir sur la page <strong className="text-red">principale</strong></Link>
            </div>
            {isOpen && <Menu />}
        </>
    )
}