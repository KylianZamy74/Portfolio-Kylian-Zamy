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
    userId: number;

    setImages: (images: File[]) => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setEnterprise: (enterprise: string) => void;
    setStacks: (stacks: Stack[]) => void;
    setRoleDate: (role_date: string) => void;
    setSelectedStacks: (stacks: string[]) => void; 
    addNewStack: (stack: string) => void;  
    submitProject: () => Promise<void>;
    setUserId: (userId: number) => void;

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
    userId: 0,

    setImages: (images: File[]) => set({ images }),
    setTitle: (title: string) => set({ title }),
    setDescription: (description: string) => set({ description }),
    setStacks: (stacks: Stack[]) => set({ stacks }),
    setEnterprise: (enterprise: string) => set({ enterprise }),
    setRoleDate: (role_date: string) => set({ role_date }),
    setSelectedStacks: (stacks: string[]) => set({ selectedStacks: stacks }),
    setUserId: (userId: number) => set({ userId }),

  
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
    
        
        const projectData = {
            title: state.title,
            description: state.description,
            enterprise: state.enterprise,
            role_date: state.role_date,
            stacks: state.selectedStacks,
            userId: state.userId
        };
    
     
        const formData = new FormData();
        state.images.forEach((image) => {
            formData.append("images", image);
        });
    
        try {
         
            const projectResponse = await fetch(`http://localhost:3000/api/manageProject/addProject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "credentials": "include",
                },
                body: JSON.stringify(projectData), 
            });
    
            if (!projectResponse.ok) {
                throw new Error("Erreur lors de l'envoi des données textuelles");
            }
    
            const { projectId } = await projectResponse.json();
    
          
            if (state.images.length > 0) {
                formData.append("projectId", projectId); 
                const imageResponse = await fetch(`http://localhost:3000/api/manageProject/uploadImages`, {
                    method: "POST",
                    body: formData,
                });
    
                if (!imageResponse.ok) {
                    throw new Error("Erreur lors de l'envoi des images");
                }
            }
    
           
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
