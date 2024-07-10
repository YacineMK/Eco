"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FC, useEffect, useState } from "react"
import Link from "next/link";
import { LoginBtns } from "@/data/auth";
import { Loginschema, LoginSchema } from "@/utils/schemavalidator";
import { Toaster, toast } from 'react-hot-toast';
import customAxios from "@/api/customaxios";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';


const Login: FC = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm<Loginschema>({
        resolver: zodResolver(LoginSchema)
    });

    const onSubmit = async (data: Loginschema) => {
        try {
            setLoading(true);
            const api = await customAxios();
            const response = await api.post('/api/v1/auth/login', data);
            console.log(response.data)
            toast.success('Login successful!');
            setLoading(false);
            Cookies.set('token', response.data.token);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const isAuthenticated = Cookies.get('token');

    useEffect(() => {
        if (isAuthenticated != null) {
            redirect('/');
        }
    }, [isAuthenticated]);


    return (
        <section className="flex h-screen justify-center items-center">
            <div className="w-full flex flex-col gap-5 py-9 px-10 md:w-[560px] md:border border-black rounded-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold pb-2">Bienvenue !</h1>
                    <h2>Vous n’avez pas de compte ? {" "}<Link href="/signin" className="font-semibold">S’inscrire</Link></h2>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <Label>Email</Label>
                        <Input type="text" placeholder="Email" {...register("email")} className={errors.email ? "border border-alert placeholder:text-alert" : ""} />
                        {errors.email && <p className="text-alert text-sm">{errors.email.message as string}</p>}
                    </div>
                    <div>
                        <Label>Mot de passe</Label>
                        <Input type="password" placeholder="Mot de passe" {...register("password")} className={errors.password ? "border border-alert placeholder:text-alert" : ""} />
                        {errors.password && <p className="text-alert text-sm ">{errors.password.message as string}</p>}
                    </div>
                    <Link href="/forget" className="text-right text-sm">Mot de passe oublié ?</Link>
                    <Button className="bg-green300 text-white mt-4 flex justify-center items-center">
                        {loading && (
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        Conexion
                    </Button>
                </form>
                <span className="text-center text-sm ">Ou continuer avec</span>
                <div className="flex sm:flex-col gap-4 justify-center">
                    {LoginBtns.map((item, index) => (
                        <Button className="flex items-center justify-center" key={index}>
                            {item.icon}
                            <span className="text-base hidden sm:flex ">Continuez avec {item.title}</span>
                        </Button>
                    ))}
                </div>
            </div>
            <Toaster
                position="bottom-right"
            />
        </section>
    )
}

export default Login