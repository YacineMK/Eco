"use client"

import { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "../ui/select";
import { RiMenu2Line } from "react-icons/ri";
import { useOpen } from "@/hooks/useOpen";
import { HiX } from "react-icons/hi";

const Navbar: FC = () => {
    const { isOpen, toggleOpen } = useOpen();

    return (
        <header className="">
            <nav className="h-[80px] px-5 md:px-0 bg-[#fbfbfb] md:bg-[#d9d9d91a] w-full flex justify-between md:justify-end items-center border-b border-b-gray">
                {isOpen ? (
                    <HiX
                        onClick={toggleOpen}
                        className="flex md:hidden text-2xl font-semibold text-black"
                    />
                ) : (
                        <RiMenu2Line
                        onClick={toggleOpen}
                        className="flex md:hidden text-2xl font-semibold text-black"
                    />
                )}
                <div className="flex items-center gap-4">
                    <Button className="bg-red200 border-red200  p-2"><FaRegHeart className="text-base text-alert" /></Button>
                    <Button className="bg-yellow200 border-yellow200 p-2"><IoMdNotificationsOutline className="text-lg text-yellow300" /></Button>
                    <Select>
                        <SelectTrigger className="border-none hidden md:flex"> 🇺🇸 English</SelectTrigger>
                        <SelectContent className="border-none">
                            <SelectGroup className=" bg-white">
                                <SelectItem value="🇫🇷 French">🇫🇷 French</SelectItem>
                                <SelectItem value="🇸🇦 Arabi">🇸🇦 Arabic</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </nav>
        </header>
    )
}

export default Navbar