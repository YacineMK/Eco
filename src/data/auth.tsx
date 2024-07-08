import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export const LoginBtns = [
    {
        icon: (
            <FaFacebook className="text-[#1877F2] text-lg sm:mr-2" />
        ),
        title: "Facebook",
    },
    {
        icon: (
            <FcGoogle className="text-lg sm:mr-2" />
        ),
        title: "Google",
    },
    {
        icon: (
            <FaApple className="text-lg sm:mr-2" />
        ),
        title: "Apple",
    },
]