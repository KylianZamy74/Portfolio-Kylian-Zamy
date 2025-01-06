import {create} from "zustand";

interface ExtendImageStore {
    isExtendImageOpen: boolean;
    selectedImage: string | null;
    openExtendImageModal: (image: string) => void;
    closeExtendImageModal: () => void;
  }

export const useExtendImageStore = create<ExtendImageStore>((set) => ({
    isExtendImageOpen: false,
    selectedImage: null,

    openExtendImageModal: (image) => set({selectedImage: image, isExtendImageOpen: true}),
    closeExtendImageModal: () => set({isExtendImageOpen: false, selectedImage: null}),
}));