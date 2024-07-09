import { openStore } from "@/store/openstore";

export const useOpen = () => {
    const isOpen = openStore((state) => state.isOpen);
    const toggleOpen = openStore((state) => state.toggleOpen);

    return { isOpen, toggleOpen };
}