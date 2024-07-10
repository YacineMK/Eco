


import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "../ui/card"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image";
import { Button } from "../ui/button";
import { IoImageOutline } from "react-icons/io5";
import { PiGifBold } from "react-icons/pi";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const AddPost: FC = () => {
    return (
        <Card className="pt-5 border h-full flex flex-col border-gray">
            <CardContent className="flex gap-1 h-full">
                <Image src="/user.png" alt="avatar" width={40} height={40} className="w-[40px] h-[40px] mr-3 rounded-full" />
                <Textarea placeholder="What’s happening?" className="h-full" />
            </CardContent>
            <CardFooter className="flex flex-row items-center justify-between">
                <div className="flex ml-14 text-green300 gap-2 items-center text-xl ">
                    <IoImageOutline />
                    <MdOutlineEmojiEmotions />
                    <PiGifBold />
                </div>
                <Button className="bg-green200 border-green300 text-green300">
                    Post
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AddPost;
