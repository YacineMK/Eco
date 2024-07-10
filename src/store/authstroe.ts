import { AuthStore } from "@/types/store";
import { create } from "zustand";

export const authStore = create<AuthStore>((set) => ({
    auth: null,
    login: (token) => {
        set({ auth: token })
    },
    logout: () => { set({ auth: null }) },
}));