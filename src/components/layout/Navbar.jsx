import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    return (
        <>
            <div
                id="welcome-container"
                className="absolute w-full flex flex-col rounded-4xl bg-[#5F5F5F] pt-6 pr-5 pb-4 pl-5 text-white"
            >
                <h2 className="mb-6 text-[32px] leading-none">
                    Welcome
                    <span className="block text-2xl">[name]</span>
                </h2>
                <div className="h-[100px] w-[103px] self-end rounded-full bg-[#D9D9D9]"></div>
            </div>
            <nav className="relative flex flex-col rounded-4xl bg-[#D9D9D9] mt-40 pt-28 px-4 pb-13">
                <ul >
                    <li id="home-btn">
                        <Link
                            to="/home"
                            className={`flex gap-3 rounded-full ${location.pathname === "/home" ? "bg-[#B1B1B1]" : ""} px-4.5 py-3`}
                        >
                            <div className="h-[26px] w-[39px] bg-[#555555]"></div>
                            <p className="pt-1">Home</p>
                        </Link>
                    </li>
                    <li id="history-btn" className="mb-50">
                        <Link
                            to="/home/history"
                            className={`flex gap-3 rounded-full ${location.pathname === "/home/history" ? "bg-[#B1B1B1]" : ""} px-4.5 py-3`}
                        >
                            <div className="h-[26px] w-[39px] bg-[#555555]"></div>
                            <p>History</p>
                        </Link>
                    </li>
                    <li id="settings-btn" className="-ml-3">
                        <Link
                            to="/home/settings"
                            className={`flex gap-3 rounded-full ${location.pathname === "/home/settings" ? "bg-[#B1B1B1]" : ""} px-4.5 py-3 text-[20px]`}
                        >
                            <div className="h-[38px] w-[37px] rounded-full bg-[#555555]"></div>
                            <p className="pt-1">Settings</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
