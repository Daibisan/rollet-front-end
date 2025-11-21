import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppVersion from "../../components/ui/AppVersion";

export default function index() {
    return (
        <div className="flex h-full max-h-[768px] justify-center px-4 relative">
            <div
                className="darumadrop-one-regular mt-8 h-max flex w-full max-w-[1250px] gap-12"
            >
                <aside className="relative max-w-[220px] w-full rounded-4xl border-5 border-main-gray">
                    <Navbar />
                </aside>
                <main className="w-full">
                    <Outlet />
                </main>
            </div>
            <AppVersion/>
        </div>
    );
}
