import {create} from "zustand";

interface ProjectModalStore {
    isProjectOpen: boolean;
    openProjectModal: () => void;
    closeProjectModal: () => void;
}

export const useProjectModalStore = create<ProjectModalStore>((set) => ( {
    isProjectOpen: false,
    openProjectModal: () => set({isProjectOpen: true}),
    closeProjectModal: () => set({isProjectOpen: false}),
}));