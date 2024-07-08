"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC } from "react";
import Link from "next/link";
import { LoginBtns } from "@/data/auth";
import { useForm } from "react-hook-form";
import { SignInSchema } from "@/utils/schemavalidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signin: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm({
        resolver: zodResolver(SignInSchema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
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
                            {...register("username")}
                            className={errors.username ? "border border-alert placeholder:text-alert" : ""}
                        />
                        {errors.username && (
                            <p className="text-alert text-sm">
                                {errors.username.message as string}
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
                        <Label>Confirmez le Mot de passe</Label>
                        <div className="flex border border-black items-center w-full">
                            <Input
                                type="password"
                                placeholder="Confirmez le Mot de passe"
                                {...register("confirmPassword")}
                                className={
                                    `
                                     border-none
                                    ${errors.confirmPassword
                                        ? "border border-alert placeholder:text-alert"
                                        : ""}
                                    `
                                }
                            />
                            <FaEye />
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-alert text-sm">
                                {errors.confirmPassword.message as string}
                            </p>
                        )}
                    </div>
                    <Button className="bg-green300 text-white mt-4">
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
        </section>
    );
};

export default Signin;
