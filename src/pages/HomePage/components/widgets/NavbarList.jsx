import { Link, useLocation } from "react-router-dom";
import home_icon from '@/assets/img/logo/Home.svg';
import clock_icon from '@/assets/img/logo/Clock.svg';
import settings_icon from '@/assets/img/logo/Settings.svg';

export default function NavbarList() {
    const location = useLocation();
    return (
        <ul>
            <li>
                <Link
                    to="/home"
                    className={`flex gap-3 rounded-full ${location.pathname === "/home" ? "bg-secondary-blue" : ""} px-4.5 py-3`}
                >
                    <img
                        src={home_icon}
                        alt="Home"
                        width={"39px"}
                        draggable={false}
                        className="select-none"
                    />
                    <p className="flex items-center">Home</p>
                </Link>
            </li>
            <li className="mb-44">
                <Link
                    to="/home/history"
                    className={`flex gap-3 rounded-full ${location.pathname === "/home/history" ? "bg-secondary-blue" : ""} px-4.5 py-3`}
                >
                    <img
                        src={clock_icon}
                        alt="Clock"
                        width={"33px"}
                        draggable={false}
                        className="select-none"
                    />
                    <p className="flex items-center">History</p>
                </Link>
            </li>
            <li className="-ml-1">
                <Link
                    to="/home/settings"
                    className={`flex gap-1 rounded-full ${location.pathname === "/home/settings" ? "bg-secondary-blue" : ""} px-4 py-2 text-[20px]`}
                >
                    <img
                        src={settings_icon}
                        alt="Settings"
                        width={"42px"}
                        draggable={false}
                        className="select-none"
                    />
                    <p className="flex items-center">Settings</p>
                </Link>
            </li>
        </ul>
    );
}
