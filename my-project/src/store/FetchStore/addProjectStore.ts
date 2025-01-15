import { create } from "zustand";
import { Stack } from "@prisma/client";

interface ProjectStore {
    images: File[];
    title: string;
    description: string;
    enterprise: string;
    stacks: Stack[];  
    selectedStacks: string[]; 
    role_date: string;

    setImages: (images: File[]) => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setEnterprise: (enterprise: string) => void;
    setStacks: (stacks: Stack[]) => void;
    setRoleDate: (role_date: string) => void;
    setSelectedStacks: (stacks: string[]) => void; 
    addNewStack: (stack: string) => void;  
    submitProject: () => Promise<void>;

    fetchStacks: () => Promise<void>;
}

export const useAddProjectStore = create<ProjectStore>((set) => ({
    images: [],
    title: "",
    description: "",
    enterprise: "",
    stacks: [],  
    selectedStacks: [],  
    role_date: "",

    setImages: (images: File[]) => set({ images }),
    setTitle: (title: string) => set({ title }),
    setDescription: (description: string) => set({ description }),
    setStacks: (stacks: Stack[]) => set({ stacks }),
    setEnterprise: (enterprise: string) => set({ enterprise }),
    setRoleDate: (role_date: string) => set({ role_date }),
    setSelectedStacks: (stacks: string[]) => set({ selectedStacks: stacks }),

  
    fetchStacks: async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/stack`);
            if (!response.ok) {
                throw new Error("Erreur survenue lors de la récupération des stacks");
            }
            const data: Stack[] = await response.json();
            set({ stacks: data });
        } catch (error) {
            console.error("Nous n'avons pas pu récupérer vos stacks:", error);
        }
    },


    addNewStack: (stack: string) => {
        set((state) => ({
            selectedStacks: [...state.selectedStacks, stack], 
        }));
    },

 
    submitProject: async () => {
        const formData = new FormData();


        formData.append("title", useAddProjectStore.getState().title);
        formData.append("description", useAddProjectStore.getState().description);
        formData.append("enterprise", useAddProjectStore.getState().enterprise);
        formData.append("role_date", useAddProjectStore.getState().role_date);

        
        formData.append("stacks", JSON.stringify(useAddProjectStore.getState().selectedStacks));


        const images = useAddProjectStore.getState().images;

    
        if (Array.isArray(images)) {
            images.forEach((image) => {
                formData.append("images", image);
            });
        } else {
            console.error("Images n'est pas un tableau :", images);
            return; 
        }

        try {
            const response = await fetch(`http://localhost:3000/api/manageProject/addProject`, {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la création du projet");
            }

            await response.json();

            set({
                images: [],
                title: "",
                description: "",
                enterprise: "",
                stacks: [],
                selectedStacks: [],
                role_date: "",
            });

        } catch (error) {
            console.error("Erreur lors de la création du projet :", error);
        }
    }
}));
