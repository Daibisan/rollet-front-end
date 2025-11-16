import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* header and logo */}
            <div className="bg-secondary-blue absolute z-30 flex w-full flex-col rounded-3xl pt-6 pr-5 pl-5 text-white">
                {/* welcome [name] */}
                <h2 className="mb-6 text-[32px] leading-none">
                    Welcome
                    <span className="block text-2xl">[name]</span>
                </h2>

                {/* dog image */}
                <div className="relative flex w-full justify-end select-none">
                    <img
                        src="src/assets/img/anjing_melet.png"
                        alt="anjing_melet"
                        width={"134px"}
                        draggable={false}
                    />
                    <img
                        src="src/assets/img/tangan_anjing.png"
                        alt="tangan_anjing"
                        width={"110px"}
                        className="absolute -bottom-4 left-5"
                        draggable={false}
                    />
                </div>
            </div>

            {/* navbar */}
            <nav className="relative mt-40 flex flex-col rounded-3xl px-4 pt-28 pb-13 select-none">
                <Lists />
            </nav>
        </>
    );
}

function Lists() {
    const location = useLocation();
    return (
        <ul>
            <li>
                <Link
                    to="/home"
                    className={`flex gap-3 rounded-full ${location.pathname === "/home" ? "bg-secondary-blue" : ""} px-4.5 py-3`}
                >
                    <img
                        src="src/assets/img/logo/Home.svg"
                        alt="Home"
                        width={"39px"}
                        draggable={false}
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
                        src="src/assets/img/logo/Clock.svg"
                        alt="Clock"
                        width={"33px"}
                        draggable={false}
                    />
                    <p className="flex items-center">History</p>
                </Link>
            </li>
            <li className="-ml-3">
                <Link
                    to="/home/settings"
                    className={`flex gap-1 rounded-full ${location.pathname === "/home/settings" ? "bg-secondary-blue" : ""} px-4.5 py-3 text-[20px]`}
                >
                    <img
                        src="src/assets/img/logo/Settings.svg"
                        alt="Settings"
                        width={"42px"}
                        draggable={false}
                    />
                    <p className="flex items-center">Settings</p>
                </Link>
            </li>
        </ul>
    );
}
