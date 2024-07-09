import { FC } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { FiPlusCircle } from "react-icons/fi";

const ProfilCard: FC = () => {
    return (
        <Card className="flex border border-gray flex-col gap-4 justify-center items-center p-2 py-4">
            <Image src="/event.png" alt="logo" width={50} height={50} />
            <div className="flex flex-col gap-3 justify-center items-center">
                <div className="text-center">
                    <h1 className="text-sm">BioScience Club USTHB</h1>
                    <p className="text-black text-xs mt-3">Services en environnement</p>
                </div>
                <Button className="text-sm text-green300 border border-green300"><FiPlusCircle className="mr-1" />Follow</Button>
            </div>
        </Card>
    )
}

export default ProfilCard;