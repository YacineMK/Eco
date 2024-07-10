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
import Image from "next/image";
import { FiPlusCircle } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { TiMap } from "react-icons/ti";
import { LuClock1 } from "react-icons/lu";

const AgendaCard: FC = () => {
    return (
        <Card className="w-full p-2 shadow-none border-none flex">
            <div>
                <CardHeader className="flex justify-between">
                    <Button className="bg-green200 text-green300 border-green300">Accepted ✅</Button>
                    <Button className="bg-green200 text-green300 border-green300">Accepted ✅</Button>
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
