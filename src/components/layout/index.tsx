import { FC } from "react";
import SideBar from "./sidebar";
import Navbar from "./navbar";
import { LayoutProps } from "@/types/props";

const HomeLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-screen flex h-screen overflow-hidden">
            <SideBar />
            <div className="flex flex-col md:w-[calc(100vw-298px)] h-full">
                <Navbar />
                <div className="flex-grow overflow-auto mx-6 mt-7 no-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
