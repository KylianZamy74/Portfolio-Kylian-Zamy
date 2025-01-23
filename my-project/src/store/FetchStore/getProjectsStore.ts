import { create } from "zustand";
import { Project as PrismaProject, Image, Stack } from "@prisma/client";

interface ProjectWithRelations extends PrismaProject {
    images: Image[]; 
    stacks: Stack[]; 
  }

interface getProjectsStore {
    projects: ProjectWithRelations[];
    loading: boolean;
    error: null | string;
    setProjects: (projects: ProjectWithRelations[]) => void;
    project: ProjectWithRelations | null;
    setProject: (project: ProjectWithRelations) => void;
    fetchProjects: () => Promise<void>;
    deleteProject: (id: number) => Promise<void>;
}

export const useGetProjectsStore = create<getProjectsStore>((set) => ({
    projects: [],
    project: null,
    loading: false,
    error: null ,

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
    },
    deleteProject: async (projectId: number) => {
        set({ loading: true, error: null });
    
        try {
          const response = await fetch(`/api/manageProject/deleteProject/${projectId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            set({ error: errorData.message || "Une erreur est survenue", loading: false });
            return;
          }
    
          set((state) => ({
            projects: state.projects.filter((project) => project.id !== projectId),
            loading: false,
          }));
        } catch (error) {
          console.error(error)
          set({ error: "Erreur lors de la suppression du projet.", loading: false });
        }
      },

}));


