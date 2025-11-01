export default function LandingPage() {
    return (
        <div id="body" className="flex h-full justify-center lg:px-4">
            <div
                id="main-container"
                className="w-full max-w-[1200px] font-[rubik-one] mt-10"
            >
                <header className="lg:mb-20 lg:flex lg:items-center lg:justify-between">
                    <div
                        id="logo"
                        className="lg:flex lg:items-baseline lg:gap-2.5"
                    >
                        <div className="lingkaran-gray h-[67px] w-[77px] rounded-full bg-[#D9D9D9]"></div>
                        <h1 className="font-['yellow-candy'] lg:text-5xl">
                            Rollet
                        </h1>
                    </div>
                    <div id="login-btn">
                        <a
                            href="/login"
                            className="h-[50px] w-[148px] rounded-full bg-[#D9D9D9] lg:flex lg:items-center lg:justify-center lg:px-2 lg:py-4 lg:text-2xl"
                        >
                            Login
                        </a>
                    </div>
                </header>
                <main className="lg:flex lg:gap-15">
                    <div
                        id="main-left"
                        className="h-[484px] w-[593px] flex-2 bg-[#D9D9D9]"
                    ></div>
                    <div
                        id="main-right"
                        className="flex-2 lg:flex lg:flex-col lg:items-center lg:justify-center"
                    >
                        <h2 className="lg:mb-9 lg:text-6xl">Get Started</h2>
                        <p className="m-plus-rounded-1c-regular lg:mb-11 lg:text-center lg:text-2xl lg:leading-normal">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repudiandae minima fuga cum, commodi harum
                            unde eveniet obcaecati nemo repellat officia sunt
                            esse aliqua.
                        </p>
                        <a
                            id="get-started-btn"
                            className="w-max rounded-full bg-[#D9D9D9] lg:mb-6 lg:flex lg:items-center lg:justify-center lg:px-12 lg:py-2 lg:text-4xl"
                            href="/home"
                        >
                            Get Started
                        </a>
                        <a
                            id="learn-more-btn"
                            href="#"
                            className="m-plus-rounded-1c-regular w-max rounded-full bg-[#D9D9D9] font-semibold! lg:px-12 lg:py-1.5 lg:text-2xl"
                        >
                            Learn more
                        </a>
                    </div>
                </main>
                <footer className="darumadrop-one-regular absolute lg:bottom-8 lg:left-10">
                    version 0.0.0.1
                </footer>
            </div>
        </div>
    );
}
