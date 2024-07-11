import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { Button } from "../ui/button";
import { LuUser2 } from "react-icons/lu";
import { TiMap } from "react-icons/ti";
import { LuClock1 } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import Image from "next/image";

const AgendaCard: FC = () => {
    return (
        <Card className="w-full p-2 shadow-none border-none flex">
            <div>
                <CardHeader className="flex justify-between gap-3">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                            <Image
                                src="/user.png"
                                alt="avatar"
                                width={50}
                                height={50}
                                className="mr-3 rounded-full"
                            />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-sm ">BioScience Club USTHB</h1>
                                <p className="text-xs text-black">
                                    Services de conseil en environnement
                                </p>
                            </div>
                        </div>
                        <FiPlusCircle className="text-3xl text-green300" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <Button className="text-gray border-gray"><LuTicket className="mr-1" /> {" "} Ticket</Button>
                        <Button className="bg-green200 text-green300 border-green300">Accepted ✅</Button>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <CardTitle className="text-2xl">Recycle Rally: Transforming Waste into Resources</CardTitle>
                    <CardDescription className="text-sm text-gray100">
                        🌳🌟 Join Us for &quot;Green Horizons: Community Tree Planting Day&quot;! 🌟🌳<br></br>
                        Let's come together to make a lasting impact on our environment! On Saturday, September 15th, we're hosting a massive tree-planting event where our community will unite to plant hundreds of trees.  We aim to inspire and educate members .
                    </CardDescription>
                    <div className="flex w-full py-2 justify-between">
                        <Button className="h-[65px] w-[120px]  bg-green200 text-green300 border-green300 flex flex-col "><LuUser2 className="text-xl mb-1" />16 Participants</Button>
                        <Button className="h-[65px] w-[120px] bg-red200 text-alert border-alert flex flex-col "><TiMap className="text-xl mb-1" />Casablanca</Button>
                        <Button className="h-[65px] w-[120px] bg-blue200 text-blue300 border-blue300 flex flex-col "><LuClock1 className="text-xl mb-1" />12/1/2023</Button>
                    </div>
                </CardContent>
            </div>
            <div>
            </div>
        </Card>
    )
}

export default AgendaCard;
