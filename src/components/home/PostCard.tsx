import { FC } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";

const PostCard: FC = () => {
    return (
        <Dialog>
            <DialogTrigger className="flex rounded-md border border-gray items-center p-4 py-6">
                <div className=" text-left flex flex-col gap-6 ">
                    <div className="flex ">
                        <Image src="/user.png" alt="event image" width={40} height={40} className="rounded-full mr-3" />
                        <div className="flex flex-col">
                            <h1 className="text-sm">Benacer Amine</h1>
                            <p className="text-xs text-gray100">@johndue</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-sm text-left text-gray-100 px-3">
                            🌊🌍 Join Us for Shoreline Sweep: Clean Beaches, Clean Future! 🌍🌊
                            <br /><br />
                            Let's come together to make a difference! 🌟 On Saturday, August 10th, we're hosting a beach cleaning event to remove litter and debris from our beautiful coastlines. Your participation will help protect marine life and ensure our beaches remain pristine for everyone to enjoy.
                            <br /><br />
                            Bring your friends, family, and lots of enthusiasm! Together, we can create a cleaner, healthier environment. Every piece of trash we pick up is a step towards a brighter future. 🌿💙
                            <br /><br />
                            <p className="text-green300">#ShorelineSweep #BeachCleanup #CleanBeaches #ProtectOurOceans #EcoWarriors #CommunityEvent</p>
                            <br /><br />
                            🌊💪 See you there! 💪🌊
                        </h1>
                    </div>
                    <div className="mx-5">
                        <Image src="/post.png" alt="event image" width={318} height={120} className="w-full rounded-xl" />
                    </div>
                    <nav className="bg-gray-800 p-4 text-base flex">
                        <ul className="flex space-x-4 justify-between">
                            <li className="flex items-center text-gray100">
                                <FaRegComment className="mr-1" />
                                <span>61</span>
                            </li>
                            <li className="flex items-center text-gray100">
                                <FaRetweet className="mr-1" />
                                <span>13</span>
                            </li>
                            <li className="flex items-center text-gray100">
                                <FaRegHeart className="mr-1" />
                                <span>80</span>
                            </li>
                            <li className="flex items-center text-gray100">
                                <RxShare2 className="mr-1" />
                                <span>12</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </DialogTrigger>
        </Dialog>
    )
}

export default PostCard;