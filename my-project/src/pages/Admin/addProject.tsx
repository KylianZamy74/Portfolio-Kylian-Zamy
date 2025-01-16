import ProtectedRoutes from "../../components/ProtectedRoutes/ProtectedRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useAddProjectStore } from "@/store/FetchStore/addProjectStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function NewProject() {
    const [images, setImages] = useState<File[]>([]);
    const [stackError, setStackError] = useState<string | null>(null); 
    const { data: session } = useSession();
    const router  = useRouter();

    const {
        setImages: setStoreImages,
        submitProject,
        stacks,
        selectedStacks,
        setSelectedStacks,
        fetchStacks,
        setTitle,
        setDescription,
        setEnterprise,
        setRoleDate,
        setStacks,
        setUserId,
    } = useAddProjectStore();

    useEffect(() => {
        if (session?.user.id) {
            setUserId(session.user.id); 
        }
    }, [session, setUserId]);

    useEffect(() => {
        fetchStacks(); 
    }, [fetchStacks]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files)
                .slice(0, 5 - images.length)
                .filter((file) => file instanceof File);       
            setImages((prevImages) => [...prevImages, ...newFiles]);
            setStoreImages([...images, ...newFiles]);
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
                <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                >
                    &times; {/* Icône pour supprimer */}
                </button>
            </div>
        ));
    };

    const handleRemoveImage = (index: number) => {
        const newImages = [...images];
        newImages.splice(index, 1); 
        setImages(newImages);
        setStoreImages(newImages); 
    };

    const handleStackSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        if (Array.isArray(selectedStacks) && !selectedStacks.includes(selectedValue)) {
            setSelectedStacks([...selectedStacks, selectedValue]);
            setStacks(stacks.filter((stack) => stack.name !== selectedValue));
        }
    };

    const handleStackRemoval = (stack: string) => {
        setSelectedStacks(selectedStacks.filter((s) => s !== stack));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (selectedStacks.length === 0) {
            setStackError("Veuillez sélectionner au moins une stack technique."); 
            return;
        }

        setStackError(null); 
        await submitProject();
        router.push("/Admin/addProjectValidated");
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
                            onChange={(e) => setTitle(e.target.value)}
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
                            onChange={(e) => setDescription(e.target.value)}
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
                            onChange={(e) => setEnterprise(e.target.value)}
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
                            onChange={(e)=> setRoleDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="stack" className="block text-sm font-medium text-[#FDFAD]">Stack technique utilisé</label>
                        <select
                            id="stack"
                            name="stack"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] sm:text-sm text-[#1E1E1E]"
                            onChange={handleStackSelection}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                -- Sélectionnez une stack --
                            </option>
                            {stacks.map((stack) => (
                                <option key={stack.id} value={stack.name}>
                                    {stack.name}
                                </option>
                            ))}
                        </select>
                        {stackError && (
                            <p className="text-red-500 text-sm mt-2">{stackError}</p> 
                        )}
                        <div className="mt-4 space-y-2">
                            {Array.isArray(selectedStacks) &&
                                selectedStacks.map((stack, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 border border-gray-300 rounded-md">
                                        <span>{stack}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleStackRemoval(stack)}
                                            className="px-2 py-1 text-sm bg-red-600 text-white rounded-md"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="images" className="block text-sm font-medium text-[#FDFAD]">Images du projet (5 max)</label>
                        <div className="mt-2 flex items-center space-x-4">
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/webp"
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
