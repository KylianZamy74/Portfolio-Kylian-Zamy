import { create } from "zustand";
import { Project as PrismaProject, Image, Stack } from "@prisma/client";

interface ProjectWithRelations extends PrismaProject {
    images: Image[]; 
    stacks: Stack[]; 
  }
interface getProjectsStore {
    projects: ProjectWithRelations[];
    setProjects: (projects: ProjectWithRelations[]) => void;
    project: ProjectWithRelations | null;
    setProject: (project: ProjectWithRelations) => void;
    fetchProjects: () => Promise<void>;
}

export const useGetProjectsStore = create<getProjectsStore>((set) => ({
    projects: [],
    project: null,

    setProjects: (projects) => set({ projects }),
    setProject: (project) => set({ project }),

    fetchProjects: async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/projects`);
            const data = await response.json();
            set({ projects: data });
        } catch (error) {
            console.error("Nous n'avons pas pu récuperer vos projets :", error);
        }
    },

    fetchProject: async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/project/${id}`);
            const data = await response.json();
            set({ project: data });
        } catch (error) {
            console.error("Nous n'avons pas pu récuperer votre projet :", error);
        }
    }
}));


