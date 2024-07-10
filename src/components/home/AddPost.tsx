import { FC, useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
} from "../ui/card"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image";
import { Button } from "../ui/button";
import { IoImageOutline } from "react-icons/io5";
import { PiGifBold } from "react-icons/pi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useForm } from "react-hook-form";

const AddPost: FC = () => {
    const { register, handleSubmit } = useForm();


    // const onSubmit = async (data: Loginschema) => {
    //     try {
    //         const api = await customAxios();
    //         const response = await api.post('/api/v1/auth/login', data);
    //         console.log(response.data)
    //         toast.success('Login successful!');
    //         Cookies.set('token', response.data.token);
    //     } catch (error) {
    //         console.error('Error signing up:', error);
    //     }
    // };


    return (
        <Card className="pt-5 pb-3 border h-full flex flex-col border-gray">
            <CardContent className="flex gap-1 items-start">
                <Image src="/user.png" alt="avatar" width={40} height={40} className="w-[40px] h-[40px] mr-3 rounded-full" />
                <Textarea placeholder="What’s happening?" className="h-full flex-1" />
            </CardContent>
            <div className="flex flex-row items-center justify-between px-4 py-2">
                <div className="flex ml-16 text-green300 gap-2 mx-2 items-center text-xl ">
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <IoImageOutline />
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        {...register('content', { required: true })}
                        {...register("description", { value: "" })}
                    />
                    <MdOutlineEmojiEmotions />
                    <PiGifBold />
                </div>
                <Button className="bg-green200 border-green300 text-green300">
                    Post
                </Button>
            </div>
        </Card>
    )
}

export default AddPost;
