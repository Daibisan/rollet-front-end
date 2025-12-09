import main_logo from "@/assets/img/logo/main_logo.png";
import { Link } from "react-router-dom";

export default function RolletLogo() {
    return (
        <div>
            <Link
                to="/"
                className={`flex h-[69px] gap-1 select-none w-max`}
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
