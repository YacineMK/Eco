import { FiHome } from "react-icons/fi";
import { SiAirplayaudio } from "react-icons/si";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";

export const SideBarBtns = [
    {
        title: "Home",
        icon: (
            <FiHome className="mr-2" />
        )
    },
    {
        title: "Community",
        icon: (
            <SiAirplayaudio className="mr-2" />
        )
    },
    {
        title: "Agenda",
        icon: (
            <IoCalendarClearOutline className="mr-2" />
        )
    },
    {
        title: "Blogs",
        icon: (
            <HiOutlineBookOpen className="mr-2" />
        )
    },
]