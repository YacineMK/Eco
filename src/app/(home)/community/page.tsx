"use client"

import PostCard from "@/components/home/PostCard";
import ProfilCard from "@/components/home/ProfilCard";
import { Input } from "@/components/ui/input";
import useMediaQuery from "@/hooks/useResponsive";
import { FC } from "react";

const CommunityPage: FC = () => {
    const { isLg } = useMediaQuery();
    return (
        <section className="w-full flex gap-4">
            <div className="md:w-2/3 flex flex-col gap-4">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            {
                isLg ?
                    (<div className="md:w-1/3">
                        <Input placeholder="Search for a Valunteer or organisation " />
                        <h1 className="text-sm mt-4 mb-3">suggestion for you</h1>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            <ProfilCard />
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