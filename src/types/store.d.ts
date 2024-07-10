export interface OpenStore {
    isOpen: boolean,
    toggleOpen: () => void
}


export interface AuthStore {
    auth: string | null;
    login: (string) => void;
    logout: () => void;
}