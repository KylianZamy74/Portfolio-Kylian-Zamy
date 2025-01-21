import { create } from "zustand";
import { Stack } from "@/types";


interface EditProjectStore {
    title: string;
    description: string;
    enterprise: string;
    role_date: string;
    selectedStacks: Stack[];
    stacks: Stack[];
    images: string[];  
    allStacks: Stack[];
    newImages: File[];
    userId: number;


    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setEnterprise: (enterprise: string) => void;
    setRoleDate: (role_date: string) => void;
    setSelectedStacks: (stacks: Stack[]) => void;
    setStacks: (stacks: Stack[]) => void;
    setImages: (images: string[]) => void;
    setNewImages: (newImages: File[]) => void;
    setAllStacks: (allStacks: Stack[]) => void;
    fetchProjectDetails: (projectId: number) => Promise<void>;
    fetchStacks: () => Promise<void>;
    removeImage: (index: number) => void;  
    submitEditProject: (id: number) => void;
    setUserId: (userId: number) => void;
}

export const useEditProjectStore = create<EditProjectStore>((set) => ({
    title: "",
    description: "",
    enterprise: "",
    role_date: "",
    selectedStacks: [],
    stacks: [],
    images: [],  
    newImages: [],
    allStacks: [],
    userId: 0,

    setTitle: (title: string) => set({ title }),
    setDescription: (description: string) => set({ description }),
    setEnterprise: (enterprise: string) => set({ enterprise }),
    setRoleDate: (role_date: string) => set({ role_date }),
    setSelectedStacks: (selectedStacks: Stack[]) => set({ selectedStacks }),
    setStacks: (stacks: Stack[]) => set({ stacks }),
    setImages: (images: string[]) => set({images}),
    setNewImages: (newImages: File[]) => set ({newImages}),
    setUserId: (userId: number) => set({userId}),
    setAllStacks: (allStacks: Stack[]) => set({ allStacks }),

    removeImage: (index: number) => set((state) => {
        const newImages = [...state.images];
        newImages.splice(index, 1);  
        return { images: newImages };  
    }),

    fetchProjectDetails: async (projectId: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/project/${projectId}`);
            if (!response.ok) throw new Error("Erreur de récupération des détails du projet");

            const data = await response.json();
            set({
                title: data.title,
                description: data.description,
                enterprise: data.enterprise,
                role_date: data.role_date,
                stacks: data.stacks,
                images: data.images,  
                userId: data.userId
            });
        } catch (error) {
            console.error(error);
        }
    },
    
    fetchStacks: async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/stack`);
            if (!response.ok) throw new Error("Erreur de récupération des stacks");

            const data = await response.json();
            set({ allStacks: data });  
        } catch (error) {
            console.error(error);
        }
    },

    submitEditProject: async (id) => {

        const state = useEditProjectStore.getState();
    
        const updatedProject = {
            id,  
            title: state.title,
            description: state.description,
            enterprise: state.enterprise,
            role_date: state.role_date,
            stacks: state.stacks, 
            images: state.images,
            userId: state.userId
        };
    

        const formData = new FormData();

        state.newImages.forEach((image, index) => {
            console.log(`Image ${index}:`, image);
            formData.append("images", image);
        });
        console.log("data envoyé au serveur", updatedProject);
        try {
       
            const projectResponse = await fetch(`http://localhost:3000/api/manageProject/editProject`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "credentials": "include",
                },
                body: JSON.stringify(updatedProject),
            });
    
            if (!projectResponse.ok) {
                throw new Error("Erreur lors de la mise à jour du projet");
            }
    
            const { projectId } = await projectResponse.json();
    
         
            if (state.newImages.length > 0) {
                formData.append("projectId", projectId);  
                console.log("FormData avant l'envoi : ", formData);
                const imageResponse = await fetch(`http://localhost:3000/api/manageProject/uploadImages`, {
                    method: "POST",
                    body: formData,
                });
    
                if (!imageResponse.ok) {
                    throw new Error("Erreur lors de l'envoi des images");
                }
            }

            console.log("Projet mis à jour avec succès !");
            
            set({
                title: "",
                description: "",
                enterprise: "",
                stacks: [],
                selectedStacks: [],
                role_date: "",
                images: [],
            });
    
        } catch (error) {
            console.error("Erreur lors de la mise à jour du projet :", error);
        }
    }
   
}));
