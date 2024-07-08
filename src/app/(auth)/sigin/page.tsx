
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaRegEyeSlash } from "react-icons/fa";

import { FC } from "react"
import Link from "next/link";
import { LoginBtns } from "@/data/auth";

const Signin: FC = () => {
    return (
        <section className="flex h-screen justify-center items-center">
            <div className="w-full flex flex-col gap-5 py-9 px-10 md:w-[550px] md:border border-black rounded-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold pb-2">Bienvenue !</h1>
                    <h2>Vous avez déjà un compte ? {" "}<Link href="/login" className="font-semibold">Connexion</Link></h2>
                </div>
                <form className="flex flex-col gap-4">
                    <div>
                        <Label>Email</Label>
                        <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <Label>Username</Label>
                        <Input type="text" placeholder="Username" />
                    </div>
                    <div>
                        <Label>Mot de passe</Label>
                        <div className="flex items-center">
                            <Input type="password" placeholder="Mot de passe" />
                            {/* <span>
                                <FaRegEyeSlash />
                            </span> */}
                        </div>
                    </div>
                    <div>
                        <Label>Confirmez le Mot de passe</Label>
                        <Input type="password" placeholder="Confirmez le Mot de passe" />
                    </div>
                    <Button className="bg-green300 text-white mt-4" >S’inscrire</Button>
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

export default Signin