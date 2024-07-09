import { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "../ui/select";



const Navbar: FC = () => {
    return (
        <header className="w-[calc(100vw-298px)]">
            <nav className="h-[80px] bg-[#d9d9d91a] flex justify-between md:justify-end items-center w-full border-b border-b-gray">

                <div className="mr-4 flex items-center gap-4">
                    <Button className="bg-red200 border-red200  p-2"><FaRegHeart className="text-base text-alert" /></Button>
                    <Button className="bg-yellow200 border-yellow200 p-2"><IoMdNotificationsOutline className="text-lg text-yellow300" /></Button>
                    <Select>
                        <SelectTrigger className="border-none"> 🇺🇸 English</SelectTrigger>
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