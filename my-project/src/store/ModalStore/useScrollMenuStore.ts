"use client";
import { create } from "zustand";

interface showMenuStore {
    showMenu: boolean;
    setShowMenu: (value: boolean) => void;
}

export const useScrollMenuStore = create<showMenuStore>((set) => ({
    showMenu: false,
    setShowMenu: (value) => set({ showMenu: value }),
}))


