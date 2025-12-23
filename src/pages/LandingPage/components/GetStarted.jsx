import { Link } from "react-router-dom";
import anjing_sus_melek_fix from "@/assets/img/anjing_sus_melek_fix.png";

export default function GetStarted() {
    return (
        <section className="relative flex w-full gap-10">
            {/* Big wolf */}
            <div className="flex flex-1 justify-center select-none">
                <img
                    src={anjing_sus_melek_fix}
                    alt="anjing_sus_melek"
                    className="max-w-[400px]"
                    draggable={false}
                    loading="eager"
                    decoding="async"
                />
            </div>

            <MainRight />
        </section>
    );
}

function MainRight() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center pt-15 pr-10 text-center">
            <h2 className="text-main-black mb-9 text-6xl">Get Started</h2>
            <p className="m-plus-rounded-1c-regular text-secondary-black mb-11 text-2xl leading-normal">
                Grouping headache? Nah. We got you. Shuffle squads in seconds no
                stress. Just tap and Go
            </p>
            <Link
                className="bg-secondary-black mb-3 flex w-max items-center justify-center rounded-full px-12 py-2 text-4xl text-white"
                to="/home"
            >
                Get Started
            </Link>
            <button
                onClick={() =>
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",
                    })
                }
                className="bg-main-gray w-max cursor-pointer rounded-full px-12 py-1.5 text-2xl"
            >
                Learn more
            </button>
        </div>
    );
}
