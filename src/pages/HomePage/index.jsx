import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function index() {
    return (
        <div id="body" className="flex h-full justify-center lg:px-4">
            <div
                id="wrapper"
                className="darumadrop-one-regular mt-8 h-max lg:flex lg:w-full lg:max-w-[1250px] lg:gap-15"
            >
                <aside className="lg:relative lg:flex-1">
                    <Navbar />
                </aside>
                <main className="lg:flex-[4.55]">
                    <Outlet />
                </main>
            </div>
            <footer className="darumadrop-one-regular lg:absolute lg:bottom-3 lg:left-5 lg:text-[11px]">
                version 0.0.0.1
            </footer>
        </div>
    );
}
