import { Link } from "react-router-dom";
import RolletLogo from "../../components/ui/RolletLogo";
import OurTeam from "./components/OurTeam";
import GetStarted from "./components/GetStarted";
import AboutRollet from "./components/AboutRollet";

export default function LandingPage() {
    return (
        // Body
        <div className="relative flex justify-center overflow-x-hidden px-4 py-6">
            {/* Wrapper */}
            <div className="w-full max-w-[1200px] font-[rubik-one]">
                <header className="mb-8 flex items-center justify-between">
                    <RolletLogo />
                    <LoginBtn />
                </header>

                <main>
                    <GetStarted />

                    {/* Long big Clouds */}
                    <img
                        src="src/assets/img/clouds.png"
                        alt="clouds"
                        className="mt-12 scale-200 pr-20"
                        loading="lazy"
                    />

                    {/* Wolf melet */}
                    <img
                        src="src/assets/img/anjing_melet.png"
                        alt="anjing_melet"
                        width={"172px"}
                        className="absolute right-0 bottom-0"
                        loading="lazy"
                    />

                    {/* App Version */}
                    <div className="darumadrop-one-regular absolute top-185 left-5 z-30">
                        version 0.0.0.1
                    </div>
                </main>

                <footer
                    id="about-rollet"
                    className="relative mt-70 flex flex-col gap-12 pt-15 select-none"
                >
                    <AboutRollet />
                    <OurTeam />

                    {/* Small Clouds */}
                    <img
                        src="src/assets/img/cloud.png"
                        alt="cloud"
                        width={"440px"}
                        className="absolute -top-33 -left-77"
                        loading="lazy"
                    />
                    <img
                        src="src/assets/img/cloud.png"
                        alt="cloud"
                        width={"440px"}
                        className="absolute top-23 -right-77"
                        loading="lazy"
                    />
                </footer>
            </div>
        </div>
    );
}

function LoginBtn() {
    return (
        <div>
            <Link
                to="/login"
                className="bg-secondary-black flex h-[50px] w-[148px] items-center justify-center rounded-full px-2 py-4 text-2xl text-white"
            >
                Login
            </Link>
        </div>
    );
}
