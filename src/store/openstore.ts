import { OpenStore } from "@/types/store";
import { create } from "zustand";


export const openStore = create<OpenStore>((set) => ({
    isOpen: false,
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

