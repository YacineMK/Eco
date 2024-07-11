import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Image from "next/image";

const BlogPost: FC = () => {
    return (
        <Card className="px-3 shadow-md hover:shadow-lg transition duration-300 py-4 border border-gray">
            <div className="flex items-center justify-between">
                <div className="flex ml-5 items-center">
                    <Image
                        src="/user.png"
                        alt="avatar"
                        width={40}
                        height={40}
                        className="mr-3 rounded-full"
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-sm ">BioScience Club USTHB</h1>
                        <p className="text-xs text-black">
                            Services de conseil en environnement
                        </p>
                    </div>
                </div>
            </div>
            <CardHeader>
                <Image
                    src="/image.png"
                    alt="event image"
                    width={318}
                    height={153}
                    className="w-full rounded-lg"
                />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <CardTitle className="text-xl">
                    Recycle Rally: Transforming Waste into Resources
                </CardTitle>
                <CardDescription className="text-sm text-gray100">
                    Join us for &quot;Green Horizons: Community Tree Planting Day,&quot;
                    where we unite to plant trees,{" "} Join us for &quot;Green Horizons: Community Tree Planting Day,&quot;
                    where we unite to plant trees,{" "}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default BlogPost;
