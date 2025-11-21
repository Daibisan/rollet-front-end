import main_logo from "@/assets/img/logo/main_logo.png";
import { Link, useLocation } from "react-router-dom";

export default function RolletLogo({ layoutType }) {
    const location = useLocation();
    const isLoginPage = layoutType === "login";

    return (
        <div>
            <Link
                to={isLoginPage ? "/" : location.pathname}
                className={`flex h-[69px] gap-1 select-none ${isLoginPage ? "" : "cursor-default"} w-max`}
            >
                <img
                    src={main_logo}
                    alt="main_logo"
                    width={"80px"}
                    draggable={false}
                />
                <h1 className="flex items-center pt-2 font-['yellow-candy'] text-5xl">
                    Rollet
                </h1>
            </Link>
        </div>
    );
}
