import { Link } from "react-router-dom";

export default function GetStarted() {
    return (
        <section className="relative flex w-full gap-10">
            {/* Big wolf */}
            <div className="flex flex-1 justify-center select-none">
                <img
                    src="src/assets/img/anjing_sus_melek_fix.png"
                    alt="anjing_sus_melek"
                    className="max-w-[400px]"
                    draggable={false}
                />
            </div>

            <MainRight />
        </section>
    );
}

function MainRight() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center text-center pt-15 pr-10">
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
