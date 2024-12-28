import Link from "next/link"


export default function Home() {

  return(
    <>
    <h1 className="text-sm">Hello world bienvenue sur la page d&apos;accueil</h1>
    <Link href={"/about"}>Aller à la page about</Link>
    </>
  )
}