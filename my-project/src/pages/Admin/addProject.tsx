import ProtectedRoutes from "../../components/ProtectedRoutes/ProtectedRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useAddProjectStore } from "@/store/FetchStore/addProjectStore"; // Assurez-vous que le chemin est correct

export default function NewProject() {
    const [images, setImages] = useState<File[]>([]);
    const [newStack, setNewStack] = useState<string>("");

    const {
        setImages: setStoreImages,
        submitProject,
        stacks,
        selectedStacks,
        setSelectedStacks,
        fetchStacks,
        addNewStack,
    } = useAddProjectStore();

    useEffect(() => {
        fetchStacks(); // Récupérer les stacks existantes à l'initialisation
    }, [fetchStacks]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files).slice(0, 5 - images.length); // Limite totale à 5 fichiers
            setImages((prevImages) => [...prevImages, ...newFiles]);
            setStoreImages((prevImages) => [...prevImages, ...newFiles]); // Mettre à jour le store
        }
    };

    const renderImagePreviews = () => {
        return images.map((file, index) => (
            <div key={index} className="flex items-center space-x-2">
                <img 
                    src={URL.createObjectURL(file)} 
                    alt={`Preview ${index + 1}`} 
                    className="w-16 h-16 object-cover rounded-md" 
                />
                <p className="text-sm">{file.name}</p>
            </div>
        ));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await submitProject(); // Appel à la fonction du store pour envoyer les données
    };

    const handleStackChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedStacks(selected);
    };

    const handleNewStackSubmit = () => {
        if (newStack) {
            addNewStack(newStack); // Ajout de la nouvelle stack dans le store et la base de données
            setSelectedStacks((prevStacks) => [...prevStacks, newStack]); // Ajouter la nouvelle stack aux stacks sélectionnées
            setNewStack(""); // Réinitialise le champ
        }
    };

    const removeStack = (stackName: string) => {
        setSelectedStacks(prevStacks => prevStacks.filter(stack => stack !== stackName));
    };

    return (
        <ProtectedRoutes requiredRole="admin">
            <Header />
            <div className="max-w-3xl mx-auto p-12 text-[#FDFAD5]">
                <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium">Titre du projet</label>
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
                            className="text-[#1E1E1E] mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-[#FDFAD]">Stack technique utilisé</label>
                        <select
                            id="stack"
                            name="stack"
                            multiple
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm text-[#1E1E1E] overflow-y-auto"
                            value={selectedStacks}
                            onChange={handleStackChange}
                        >
                            {stacks.map((stack) => (
                                <option key={stack.id} value={stack.name}>
                                    {stack.name}
                                </option>
                            ))}
                        </select>
                        <div className="mt-4 flex items-center">
                            <input
                                type="text"
                                placeholder="Ajouter une nouvelle stack"
                                value={newStack}
                                onChange={(e) => setNewStack(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm text-[#1E1E1E]"
                            />
                            <button
                                type="button"
                                onClick={handleNewStackSubmit}
                                className="ml-2 px-4 py-2 bg-[#F97316] text-white rounded-md"
                            >
                                Ajouter
                            </button>
                        </div>
                        {/* Afficher les stacks sélectionnées sous forme de tags (côte à côte) */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {selectedStacks.map((stack, index) => (
                                <span key={index} className="inline-flex items-center px-3 py-1 bg-[#F97316] text-white rounded-full">
                                    {stack}
                                    <button
                                        type="button"
                                        onClick={() => removeStack(stack)}
                                        className="ml-2 text-sm text-white hover:text-gray-300"
                                    >
                                        x
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Nouveau champ pour téléchargement des images */}
                    <div>
                        <label htmlFor="images" className="block text-sm font-medium text-[#FDFAD]">Images du projet (5 max)</label>
                        <div className="mt-2 flex items-center space-x-4">
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <label
                                htmlFor="images"
                                className="cursor-pointer px-4 py-2 bg-[#F97316] text-white font-medium rounded-md shadow-sm hover:bg-orange-600"
                            >
                                Charger des images
                            </label>
                        </div>
                        {/* Zone des aperçus */}
                        <div className="mt-4 flex flex-wrap gap-4">
                            {renderImagePreviews()}
                        </div>
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
        </ProtectedRoutes>
    );
}
