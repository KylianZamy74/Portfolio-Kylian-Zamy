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
        const state = useAddProjectStore.getState();
        const formData = new FormData();
    
        // Ajoutez les champs texte
        formData.append("title", state.title);
        formData.append("description", state.description);
        formData.append("enterprise", state.enterprise);
        formData.append("role_date", state.role_date);
        state.selectedStacks.forEach((stack) => {
            formData.append("stacks", stack);
        });
        // Ajoutez les fichiers
        state.images.forEach((image) => {
            formData.append("images", image);
        });
    
        try {
            const response = await fetch(`http://localhost:3000/api/manageProject/addProject`, {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Erreur lors de la création du projet");
            }
    
            await response.json();
    
            // Réinitialiser le state après succès
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
            console.error("Erreur lors de la création du projet :", error);
        }
    },
    
}));
