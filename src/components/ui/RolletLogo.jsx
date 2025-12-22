import main_logo from "@/assets/img/logo/main_logo.png";
import { Link } from "react-router-dom";

export default function RolletLogo({ location }) {
    return (
        <div>
            <Link to="/" className={`flex ${location === 'homePage'? 'h-[49px]' : ''} w-max gap-2 select-none`}>
                <img
                    src={main_logo}
                    alt="main_logo"
                    width={`${location === 'homePage'? '60px' : '80px'}`}
                    height={`${location === 'homePage'? '60px' : '80px'}`}
                    draggable={false}
                />
                <h1
                    className={`flex items-center pt-2 font-['yellow-candy'] dark:text-white ${location === "homePage" ? "text-3xl" : "text-5xl"}`}
                >
                    Rollet
                </h1>
            </Link>
        </div>
    );
}
