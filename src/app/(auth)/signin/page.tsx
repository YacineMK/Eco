"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC, useState } from "react";
import Link from "next/link";
import { LoginBtns } from "@/data/auth";
import { useForm } from "react-hook-form";
import { SigninSchema, SignInSchema } from "@/utils/schemavalidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import customAxios from "@/api/customaxios";
import toast, { Toaster } from "react-hot-toast";

const Signin: FC = () => {
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninSchema>({
        resolver: zodResolver(SignInSchema)
    });

    const onSubmit = async (data: SigninSchema) => {
        setLoading(true);
        try {
            const api = await customAxios();
            const response = await api.post('/api/v1/auth/register', data);
            toast.success('Signup successful!');
            console.log(response.data);
            setShowPopup(true);
        } catch (error) {
            toast.error('Erreur inattendue. Veuillez réessayer.');
            console.error('Error signing up:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex h-screen justify-center items-center">
            <div className="w-full flex flex-col gap-5 py-9 px-10 md:w-[550px] md:border border-black rounded-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold pb-2">Bienvenue !</h1>
                    <h2>
                        Vous avez déjà un compte ? {" "}
                        <Link href="/login" className="font-semibold">
                            Connexion
                        </Link>
                    </h2>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label>Username</Label>
                        <Input
                            type="text"
                            placeholder="Username"
                            {...register("name")}
                            className={errors.name ? "border border-alert placeholder:text-alert" : ""}
                        />  
                        {errors.name && (
                            <p className="text-alert text-sm">
                                {errors.name.message as string}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className={errors.email ? "border border-alert placeholder:text-alert" : ""}
                        />
                        {errors.email && (
                            <p className="text-alert text-sm">
                                {errors.email.message as string}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label>Mot de passe</Label>
                        <Input
                            type="password"
                            placeholder="Mot de passe"
                            {...register("password")}
                            className={errors.password ? "border border-alert placeholder:text-alert" : ""}
                        />
                        {errors.password && (
                            <p className="text-alert text-sm">
                                {errors.password.message as string}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label>Gender</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a Gender" />
                            </SelectTrigger>
                            <SelectContent {...register("gender", { value: true })} className={` ${errors.gender ? "border border-alert placeholder:text-alert bg-white" : " bg-white"}`}>
                                <SelectGroup className="bg-white">
                                    <SelectItem value="true">Male</SelectItem>
                                    <SelectItem value="false">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {errors.gender && (
                            <p className="text-alert text-sm">
                                {errors.gender.message as string}
                            </p>
                        )}
                    </div>
                    <Button className="bg-green300 text-white mt-4 flex justify-center items-center">
                        {loading && (
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        S’inscrire
                    </Button>
                </form>
                <span className="text-center text-sm">
                    Ou continuer avec
                </span>
                <div className="flex sm:flex-col gap-4 justify-center">
                    {LoginBtns.map((item, index) => (
                        <Button
                            className="flex items-center justify-center"
                            key={index}
                        >
                            {item.icon}
                            <span className="text-base hidden sm:flex">
                                Continuez avec {item.title}
                            </span>
                        </Button>
                    ))}
                </div>
            </div>
            <Toaster position="bottom-right" />
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-4">Signup Successful!</h2>
                        <p className="mb-4">You can now login to your account.</p>
                        <Button
                            className="bg-green300 text-white"
                            onClick={() => router.push('/login')}
                        >
                            Go to Login
                        </Button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Signin;
