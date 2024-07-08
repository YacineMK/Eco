"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { FC } from "react"
import Link from "next/link";
import { LoginBtns } from "@/data/auth";


const Login: FC = () => {

    return (
        <section className="flex h-screen justify-center items-center">
            <div className="w-full flex flex-col gap-5 py-9 px-10 md:w-[560px] md:border border-black rounded-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold pb-2">Bienvenue !</h1>
                    <h2>Vous n’avez pas de compte ? {" "}<Link href="/sigin" className="font-semibold">S’inscrire</Link></h2>
                </div>
                <form className="flex flex-col gap-4">
                    <div>
                        <Label>Email</Label>
                        <Input />
                    </div>
                    <div>
                        <Label>Mot de passe</Label>
                        <Input />
                    </div>
                    <Link href="#" className="text-right text-sm">Mot de passe oublié ?</Link>
                    <Button className="bg-green300 text-white" >Connexion</Button>
                </form>
                <span className="text-center text-sm">Ou continuer avec</span>
                <div className="flex sm:flex-col gap-4 justify-center">
                    {LoginBtns.map((item, index) => (
                        <Button className="flex items-center justify-center" key={index}>
                            {item.icon}
                            <span className="text-base hidden sm:flex ">Continuez avec {item.title}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Login