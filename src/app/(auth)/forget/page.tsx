import { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"


const ForgetPage: FC = () => {
    return (
        <section className="flex h-screen justify-center items-center">
            <div className="w-full flex flex-col gap-7 py-9 px-10 md:w-[500px] md:border border-black rounded-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold pb-2">Une dernière étape !</h1>
                    <h2>Entrez le code à 6 chiffres que vous avez reçu sur
                        votre . {" "}<Link href="/sigin" className="font-semibold">boite mail</Link></h2>
                </div>
                <form className="flex flex-col gap-4 items-center" >
                    <InputOTP maxLength={6} className="w-full h-[90px">
                        <InputOTPGroup className="h-[60px]">
                            <InputOTPSlot index={0} className="h-full w-[50px] border border-black" />
                            <InputOTPSlot index={1} className="h-full w-[50px] border border-t-black border-b-black" />
                            <InputOTPSlot index={2} className="h-full w-[50px] border border-black" />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="h-[60px]">
                            <InputOTPSlot index={3} className="h-full w-[50px] border border-black" />
                            <InputOTPSlot index={4} className="h-full w-[50px] border border-t-black border-b-black" />
                            <InputOTPSlot index={5} className="h-full w-[50px] border border-black" />
                        </InputOTPGroup>
                    </InputOTP>
                    <Button className="w-full mx-5 bg-green300 text-white mt-4">
                        Continuer
                    </Button>
                </form>
                <Link href="/login" className="text-center text-sm ">
                    Retour a la <span className=" text-base font-semibold">connexion</span>
                </Link>
            </div>
        </section>
    )
}

export default ForgetPage