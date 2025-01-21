import { Project } from "@prisma/client";
import { create } from "zustand";

interface ProjectDeleteStore {
  projects: Project[];
  loading: boolean;
  error: string | null;

  deleteProject: (projectId: number) => void;

  setProjects: (projects: Project[]) => void;
}

export const useProjectDeleteStore = create<ProjectDeleteStore>((set) => ({
  projects: [],
  loading: false,
  error: null,

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

  setProjects: (projects: Project[]) => set({ projects }),
}));
