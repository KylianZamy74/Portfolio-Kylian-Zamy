import { create } from "zustand";

interface EditProjectStore {
    title: string;
    description: string;
    enterprise: string;
    role_date: string;
    selectedStacks: string[];
    stacks: string[];
    images: string[];  
    allStacks: string[];

    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setEnterprise: (enterprise: string) => void;
    setRoleDate: (role_date: string) => void;
    setSelectedStacks: (stacks: string[]) => void;
    setStacks: (stacks: string[]) => void;
    setImages: (images: string[]) => void;
    setAllStacks: (allStacks: string[]) => void;
    fetchProjectDetails: (projectId: number) => Promise<void>;
    fetchStacks: () => Promise<void>;
    removeImage: (index: number) => void;  
}

export const useEditProjectStore = create<EditProjectStore>((set) => ({
    title: "",
    description: "",
    enterprise: "",
    role_date: "",
    selectedStacks: [],
    stacks: [],
    images: [],  
    allStacks: [],

    setTitle: (title: string) => set({ title }),
    setDescription: (description: string) => set({ description }),
    setEnterprise: (enterprise: string) => set({ enterprise }),
    setRoleDate: (role_date: string) => set({ role_date }),
    setSelectedStacks: (selectedStacks: string[]) => set({ selectedStacks }),
    setStacks: (stacks: string[]) => set({ stacks }),
    setImages: (images: string[]) => set({ images }),
    setAllStacks: (allStacks: string[]) => set({ allStacks }),

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
}));
