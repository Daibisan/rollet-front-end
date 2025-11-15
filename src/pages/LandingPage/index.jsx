import { Link } from "react-router-dom";
import RolletLogo from "../../components/ui/RolletLogo";

export default function LandingPage() {
    const ourNames = [
        {
            name: "Syandana Mazna Aisyah",
            role: "UI/UX",
        },
        {
            name: "Muhammad Zalzala",
            role: "Back-end",
        },
        {
            name: "Muhammad Rahsya Nadibia",
            role: "Front-end",
        },
        {
            name: "Bariza Rafi",
            role: "Back-end",
        },
    ];

    return (
        // Body
        <div className="relative flex justify-center overflow-x-hidden p-4">
            {/* Wrapper */}
            <div className="w-full max-w-[1200px] font-[rubik-one]">
                <header className="mb-8 flex items-center justify-between">
                    <RolletLogo />
                    <LoginBtn />
                </header>

                <main>
                    {/* get started section */}
                    <section className="relative flex w-full select-none">
                        {/* Big wolf */}
                        <div className="flex flex-1 justify-center">
                            <img
                                src="src/assets/img/anjing_sus_melek_fix.png"
                                alt="anjing_sus_melek"
                                className="max-w-[434px]"
                                loading="lazy"
                            />
                        </div>

                        <MainRight />
                    </section>

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
                    className="relative mt-70 flex flex-col gap-12 select-none"
                >
                    {/* About Rollet */}
                    <div className="mx-25 text-center">
                        <h2 className="text-main-black text-6xl">
                            About Rollet
                        </h2>
                        <p className="m-plus-rounded-1c-regular text-secondary-black mt-7 text-2xl">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae eaque ab nobis labore commodi totam,
                            vitae aperiam? Nulla, molestias!
                        </p>
                    </div>
                    {/* Our Team */}
                    <div className="mx-12 pb-20 text-center">
                        <h2 className="text-main-black mb-8 text-6xl">
                            Our Team
                        </h2>
                        <ul className="flex justify-around">
                            {ourNames.map((p, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="flex w-full max-w-[220px] flex-col"
                                    >
                                        <div className="bg-secondary-black h-[185px] rounded-4xl"></div>
                                        <span className="mt-2 text-[1.3rem] leading-5">
                                            {p.name}
                                        </span>
                                        <span>({p.role})</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
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

function MainRight() {
    return (
        <div className="flex flex-1 flex-col items-center justify-end pb-5 text-center">
            <h2 className="text-main-black mb-9 text-6xl">Get Started</h2>
            <p className="m-plus-rounded-1c-regular text-secondary-black mb-11 text-2xl leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae minima fuga cum, commodi harum unde eveniet
                obcaecati nemo repellat officia sunt esse aliqua.
            </p>
            <Link
                className="bg-secondary-black mb-3 flex w-max items-center justify-center rounded-full px-12 py-2 text-4xl text-white"
                to="/home"
            >
                Get Started
            </Link>
            <a
                href="#about-rollet"
                className="bg-main-gray w-max rounded-full px-12 py-1.5 text-2xl"
            >
                Learn more
            </a>
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
