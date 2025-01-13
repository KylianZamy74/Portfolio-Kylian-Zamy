import ProtectedRoutes from "../../components/ProtectedRoutes/ProtectedRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewProject() {

    // page d'admin pour créer un nouveau projet

    return(
        // <ProtectedRoutes requiredRole="admin">  
        <>
            <Header />
            <div className="max-w-3xl mx-auto p-12 text-[#FDFAD5]">
                <form className="space-y-6 ">
              
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium ">Titre du projet</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm text-[#1E1E1E]" 
                            required
                        />
                    </div>   
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-[#FDFAD]">Description du projet</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            rows={4}
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm text-[#1E1E1E]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="enterprise" className="block text-sm font-medium text-[#FDFAD]">Entreprise affiliée</label>
                        <textarea 
                            name="enterprise" 
                            id="enterprise" 
                            rows={2} 
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm text-[#1E1E1E]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="role_date" className="block text-sm font-medium text-[#FDFAD]">Rôle et date du projet</label>
                        <input 
                            type="text" 
                            id="role_date" 
                            name="role_date" 
                            className=" text-[#1E1E1E] mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm" 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-[#FDFAD]">Stack technique utilisé</label>
                        <input 
                            type="text" 
                            id="stack" 
                            name="stack" 
                            className=" text-[#1E1E1E] mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm" 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-[#FDFAD]">Images du projet</label>
                        <input 
                            type="text" 
                            id="image" 
                            name="image" 
                            className=" text-[#1E1E1E] mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm"
                        />
                    </div>
                    <div className="pt-4">
                        <button 
                            type="submit" 
                            className="w-full py-3 px-6 bg-[#F97316] text-white font-medium rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
                        >
                            Créer le projet
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
        // </ProtectedRoutes>
    )
}
