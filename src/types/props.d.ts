import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode,
}

export interface Event {
    date: Date;
    title: string;
    img: string;
    type: string;
}