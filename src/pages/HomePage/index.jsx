import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

export default function index() {
    return (
        <div className="flex h-full max-h-[768px] justify-center lg:px-4 relative">
            <div
                className="darumadrop-one-regular mt-8 h-max lg:flex lg:w-full lg:max-w-[1250px] lg:gap-15"
            >
                <aside className="lg:relative lg:flex-1">
                    <Navbar />
                </aside>
                <main className="lg:flex-[4.55]">
                    <Outlet />
                </main>
            </div>
            <footer className="darumadrop-one-regular lg:absolute lg:bottom-5 lg:left-6 lg:text-[11px]">
                version 0.0.0.1
            </footer>
        </div>
    );
}
