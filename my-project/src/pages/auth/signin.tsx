import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Signin() {

    return(

        <>
        <Header />
        <div className="flex flex-col justify-center items-center h-screen text-[#FDFAD5] w-full ">
            <h1 className="text-3xl">Formulaire de connexion</h1>
            <div className="mt-8">
                <form className="space-y-4" >
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Name" name="Name" className="p-2 rounded  w-full text-[#1E1E1E]" required/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="Password">Password</label>
                        <input type="text" placeholder="Password" name="Password" className="p-2 rounded text-[#1E1E1E]" required />
                    </div>
                    <button type="submit" className="w-full p-2 rounded bg-[#F97316]">Connexion</button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}