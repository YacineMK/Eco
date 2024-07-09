import { FC } from "react";
import Image from 'next/image';
import { SideBarBtns } from "@/data/layout";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const SideBar: FC = () => {
    return (
        <section className="bg-[#d9d9d91a] overflow-hidden h-screen w-[298px] border-r border-gray flex gap-6 ">
            <div className="my-10 w-full flex flex-col justify-between">
                <div className="w-full flex flex-col px-10 gap-9">
                    <Image src="/Logo.svg" alt="logo" width={70} height={40} />
                    <Card className="bg-[url('/profil.png')] bg-opacity-55 flex flex-col justify-center p-2 py-2 items-center  rounded-xl border h-48 border-green300">
                        <Image src="/user.png" alt="avatar" width={80} height={80} className="mb-2" />
                        <h1 className="text-base font-semibold">Bennaceur Younes</h1>
                        <div className="text-center ">
                            <p className="text-sm text-black">Volunteer</p>
                            <Link href={"#"} className=" text-xs text-green300 underline">View Profile</Link>
                        </div>
                    </Card>
                    <div className="flex flex-col gap-4 items-start">
                        {SideBarBtns.map((item, index) => (
                            <Label key={index} className=" text-black text-left flex text-base items-center">{item.icon} {" "} {item.title}</Label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center ">
                    <div className="w-[80%] flex justify-between">
                        <Button className="bg-green200 text-green300 border border-green300 w-[48%]"><MdOutlineLightMode /> Light</Button>
                        <Button className=" text-black border border-gray px-4 w-[48%]"><MdOutlineDarkMode /> Dark </Button>
                    </div>
                    <Button className="w-[80%] border border-alert text-alert">Sign Out</Button>
                </div>
            </div>
        </section>
    );
};

export default SideBar; 