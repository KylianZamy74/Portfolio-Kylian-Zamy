import ProtectedRoutes from "@/components/ProtectedRoutes/ProtectedRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useEditProjectStore } from "@/store/FetchStore/editProjectStore";
import { useRouter } from "next/router";
import { Stack } from "@/types";
import Image from "next/image";



export default function EditProject() {
    
    const [stackError, setStackError] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;

    const {
        title,
        description,
        enterprise,
        role_date,
        images: imageUrls, 
        newImages,
        setNewImages,
        setTitle,
        setDescription,
        setEnterprise,
        setRoleDate,
        setStacks,
        stacks,
        fetchProjectDetails,
        allStacks,
        fetchStacks,
        removeImage, 
        submitEditProject,
    } = useEditProjectStore();

    useEffect(() => {
        fetchStacks();
    }, [fetchStacks]);

    useEffect(() => {
        if (id) {
            fetchProjectDetails(Number(id));
        }
    }, [id, fetchProjectDetails]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files)
                .slice(0, 5 - newImages.length)
                .filter((file): file is File => file instanceof File); 
                const updatedImages = [...newImages, ...newFiles];
            setNewImages(updatedImages); 
        }
    };

    const handleRemoveImage = (index: number, isLocal: boolean) => {
        if (isLocal) {
            const newImage = [...newImages];
            newImage.splice(index, 1);
            setNewImages(newImage);
        } else {
            removeImage(index); 
        }
    };

    const handleStackSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedStack = allStacks.find((stack) => stack.name === selectedValue);
    
        if (selectedStack && !stacks.some((stack) => stack.name === selectedStack.name)) {
            setStacks([...stacks, selectedStack]); 
            setStackError(null); 
        }
    };

    const handleStackRemoval = (stack : Stack) => {
        setStacks(stacks.filter((s) => s !== stack));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (stacks.length === 0) {
            setStackError("Veuillez sélectionner au moins une stack technique.");
            return;
        }
        await submitEditProject(Number(id));

        setStackError(null);
        router.push("/Admin/editProjectValidated");
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
                            value={title}
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
                            value={description}
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
                            value={enterprise}
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
                            value={role_date}
                            required
                            onChange={(e) => setRoleDate(e.target.value)}
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
                            <option value="" disabled>-- Sélectionnez une stack --</option>
                            {Array.isArray(allStacks) && allStacks.map((stack) => (
                                <option key={stack.id} value={stack.name}>{stack.name}</option>
                            ))}
                        </select>

                        {stackError && (
                            <p className="text-red-500 text-sm mt-2">{stackError}</p>
                        )}

                        <div className="mt-4 space-y-2">
                            {Array.isArray(stacks) && stacks.map((stack, index) => (
                                <div key={index} className="flex items-center justify-between p-2 border border-gray-300 rounded-md">
                                    <span>{stack.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleStackRemoval(stack)}
                                        className="px-2 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md duration-200"
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
                            {imageUrls.map((imageUrl, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Image
                                        src={imageUrl.url}
                                        alt={`Image ${index + 1}`}
                                        className="w-16 h-16 object-cover rounded-md"
                                        width={64}
                                        height={64}
                                        unoptimized={true}
                                        >
                                    </Image>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index, false)} 
                                        className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}

                            {Array.isArray(newImages) && newImages.map((file, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Image
                                        src={URL.createObjectURL(file)}
                                        alt={`Preview ${index + 1}`}
                                        className="w-16 h-16 object-cover rounded-md"
                                        width={64}
                                        height={64}
                                        unoptimized={true} 
                                        >
                                    </Image>
                                    <p className="text-sm">{file.name}</p>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index, true)} 
                                        className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4">
                        <button 
                            type="submit"
                            className="w-full py-3 px-6 bg-[#F97316] text-white font-medium rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
                        >
                            Mettre à jour le projet
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </ProtectedRoutes>
    );
}
