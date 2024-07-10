import { FiHome } from "react-icons/fi";
import { SiAirplayaudio } from "react-icons/si";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";

export const SideBarBtns = [
    {
        title: "Home",
        link:"/",
        icon: (
            <FiHome className="mr-2" />
        )
    },
    {
        title: "Community",
        link: "/community",
        icon: (
            <SiAirplayaudio className="mr-2" />
        )
    },
    {
        title: "Agenda",
        link: "/agenda",
        icon: (
            <IoCalendarClearOutline className="mr-2" />
        )
    },
    {
        title: "Blogs",
        link: "/blogs",
        icon: (
            <HiOutlineBookOpen className="mr-2" />
        )
    },
]