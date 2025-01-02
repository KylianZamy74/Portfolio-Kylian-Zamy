import Link from "next/link"
import '@/globals.css';

export default function About() {

    return (
        <>
            <h1 className="text-sm">Bienvenue sur la page a propos </h1>
            <div>
                <Link href={'/index'}>Revenir sur la page <strong className="text-red">principale</strong></Link>
            </div>
        </>
    )
}