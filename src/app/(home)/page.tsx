"use client"

import EventCard from "@/components/home/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category } from "@/data/home";
import { FC, useEffect } from "react";
import Cookies from 'js-cookie';
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { redirect } from "next/navigation";

const HomePage: FC = () => {
    const isAuthenticated = Cookies.get('token');
    console.log(isAuthenticated);

    useEffect(() => {
        if (isAuthenticated === undefined) {
            console.log(isAuthenticated);
            redirect('/login');
        }
    }, []);

    return (
        <section className="flex flex-col gap-5">
            <div className="flex justify-between">
                <Input className="w-2/3 border border-gray" placeholder="search" />
                <div>
                    <Button className=" text-black border border-gray px-4"><CgArrowsExchangeAlt /> Sort By </Button>
                </div>
            </div>
            <div className="md:flex gap-4 hidden w-full mb-3">
                {Category.map((item, index) => (
                    <Button key={index} className="text-black border-gray ">{item}</Button>
                ))}
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </section>
    );
};

export default HomePage;