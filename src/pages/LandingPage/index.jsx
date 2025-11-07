import RolletLogo from "../../components/ui/RolletLogo";

export default function LandingPage() {
    return (
        <div id="body" className="flex h-full max-h-[768px] justify-center px-4 relative">
            <div
                id="main-container"
                className="mt-10 w-full max-w-[1200px] font-[rubik-one]"
            >
                <header className="mb-20 flex items-center justify-between">
                    <RolletLogo />
                    <LoginBtn />
                </header>
                <main className="flex gap-15">
                    <div
                        id="main-left"
                        className="h-[484px] w-[593px] flex-2 bg-[#D9D9D9]"
                    ></div>
                    <MainRight />
                </main>
                <footer className="darumadrop-one-regular absolute bottom-8 left-10">
                    version 0.0.0.1
                </footer>
            </div>
        </div>
    );
}

function MainRight() {
    return (
        <div
            id="main-right"
            className="flex-2 flex flex-col items-center justify-center"
        >
            <h2 className="mb-9 text-6xl">Get Started</h2>
            <p className="m-plus-rounded-1c-regular mb-11 text-center text-2xl leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae minima fuga cum, commodi harum unde eveniet
                obcaecati nemo repellat officia sunt esse aliqua.
            </p>
            <a
                id="get-started-btn"
                className="w-max rounded-full bg-[#D9D9D9] mb-6 flex items-center justify-center px-12 py-2 text-4xl"
                href="/home"
            >
                Get Started
            </a>
            <a
                id="learn-more-btn"
                href="#"
                className="m-plus-rounded-1c-regular w-max rounded-full bg-[#D9D9D9] font-semibold! px-12 py-1.5 text-2xl"
            >
                Learn more
            </a>
        </div>
    );
}

function LoginBtn() {
    return (
        <div id="login-btn">
            <a
                href="/login"
                className="h-[50px] w-[148px] rounded-full bg-[#D9D9D9] flex items-center justify-center px-2 py-4 text-2xl"
            >
                Login
            </a>
        </div>
    );
}
