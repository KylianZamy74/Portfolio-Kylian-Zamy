import { create } from "zustand";
import { Project } from "@prisma/client";

interface getProjectsStore {
    projects: Project[];
    setProjects: (projects: Project[]) => void;
    project: Project | null;
    setProject: (project: Project) => void;
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
            const response = await fetch(`${process.env.API_URL}/project/${id}`);
            const data = await response.json();
            set({ project: data });
        } catch (error) {
            console.error("Nous n'avons pas pu récuperer votre projet :", error);
        }
    }
}));


