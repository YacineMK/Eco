import EventCard from "@/components/home/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category } from "@/data/home";
import { FC } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";

const HomePage: FC = () => {
    return (
        <section className="flex flex-col gap-5">
            <div className="flex justify-between">
                <Input className="w-2/3 border border-gray" placeholder="search" />
                <div>
                    <Button className=" text-black border border-gray px-4 mr-2"><CgArrowsExchangeAlt /> Sort By </Button>
                    <Button className=" text-black border border-gray px-4"><CgArrowsExchangeAlt /> Sort By </Button>
                </div>
            </div>
            <div className="flex gap-4 w-full mb-3">
                {Category.map((item, index) => (
                    <Button key={index} className="text-black border-gray ">{item}</Button>
                ))}
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </section>
    );
};

export default HomePage;