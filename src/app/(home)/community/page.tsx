"use client"

import AddPost from "@/components/home/AddPost";
import PostCard from "@/components/home/PostCard";
import ProfilCard from "@/components/home/ProfilCard";
import { Input } from "@/components/ui/input";
import useMediaQuery from "@/hooks/useResponsive";
import { FC, useEffect } from "react";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';


const CommunityPage: FC = () => {
    const { isLg } = useMediaQuery();

    const isAuthenticated = Cookies.get('token');

    useEffect(() => {
        if (isAuthenticated === null || isAuthenticated === undefined) {
            console.log(isAuthenticated);
            redirect('/login');
        }
    }, []);
    return (
        <section className="w-full flex gap-4">
            <div className=" w-full lg:w-2/3 flex flex-col gap-4">
                <AddPost />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            {
                isLg ?
                    (<div className="lg:w-1/3">
                        <Input placeholder="Search for a Valunteer or organisation " />
                        <h1 className="text-sm mt-4 mb-3">suggestion for you</h1>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            <ProfilCard />
                            <ProfilCard />
                            <ProfilCard />
                        </div>
                    </div>)
                    : <></>
            }
        </section>
    )
}

export default CommunityPage;