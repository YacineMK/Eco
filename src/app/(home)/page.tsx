import CustomCard from "@/components/home/CustomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";

const HomePage: FC = () => {
    return (
        <section className="flex flex-col gap-7">
            <div className="flex justify-between">
                <Input className="w-2/3 border border-gray" placeholder="search" />
                <div>
                    <Button className=" text-black border border-gray px-4 mr-2"><CgArrowsExchangeAlt /> Sort By </Button>
                    <Button className=" text-black border border-gray px-4"><CgArrowsExchangeAlt /> Sort By </Button>
                </div>
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
        </section>
    );
};

export default HomePage;