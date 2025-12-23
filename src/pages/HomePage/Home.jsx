import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppVersion from "../../components/ui/AppVersion";
import { useEffect, useState } from "react";
import sun from "@/assets/img/sun.png";
import moon from "@/assets/img/moon.png";
import home_cloud from "@/assets/img/home_cloud.png";
import home_cloud_dark from "@/assets/img/home_cloud_dark.png";

export default function Home() {
    const location = useLocation().pathname;
    console.log(location);

    const [darkMode, setDarkMode] = useState(() => {
        const isDark = localStorage.getItem("dark-mode");
        return isDark === "true";
    });

    const home_cloud_theme = darkMode ? home_cloud_dark : home_cloud;

    useEffect(() => {
        localStorage.setItem("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <div
            className={`from-blue-sky to-yellow-sky dark:from-dark-purple-sky dark:via-purple-sky dark:to-yellow-sky relative flex h-full justify-center bg-linear-to-b/srgb via-white px-4 dark:via-50% dark:to-95% ${darkMode ? "dark" : ""} transition-colors duration-400`}
        >
            <div className="darumadrop-one-regular mt-8 mb-8 flex w-full max-w-[1250px] gap-12">
                <aside className="border-gray-border relative z-20 w-full max-w-[220px] rounded-[38px] border-5 bg-white">
                    <Navbar />
                </aside>
                <main className="w-full">
                    <Outlet context={{ darkMode, setDarkMode }} />
                </main>
            </div>
            <AppVersion />

            {/* sun */}
            {location !== "/home/settings" && (
                <img
                    src={darkMode ? moon : sun}
                    alt="sun_smiling"
                    width={570}
                    height={525}
                    draggable={false}
                    className={`fixed z-10 ${location === "/home" ? "translate-x-72" : "-right-48 -bottom-48 rotate-28"}`}
                    loading="eager"
                    decoding="async"
                />
            )}

            {location === "/home" && (
                <>
                    {/* sun cloud */}
                    <img
                        src={home_cloud_theme}
                        alt="home_cloud_theme"
                        width={darkMode ? 336 : 280}
                        height={154}
                        draggable={false}
                        className={`fixed z-10 ${darkMode ? "translate-x-90 translate-y-37" : "translate-x-86 translate-y-46"}`}
                        loading="eager"
                        decoding="async"
                    />
                    {/* mid cloud */}
                    <img
                        src={home_cloud_theme}
                        alt="home_cloud_theme"
                        width={160}
                        height={88}
                        draggable={false}
                        className="fixed z-10 -translate-x-5 translate-y-35"
                        loading="eager"
                        decoding="async"
                    />
                    {/* left mid cloud */}
                    <img
                        src={home_cloud_theme}
                        alt="home_cloud_theme"
                        width={160}
                        height={88}
                        draggable={false}
                        className="fixed z-10 -translate-x-97 translate-y-105"
                        loading="eager"
                        decoding="async"
                    />
                    {/* left cloud */}
                    <img
                        src={home_cloud_theme}
                        alt="home_cloud_theme"
                        width={160}
                        height={88}
                        draggable={false}
                        className="fixed top-70 -left-17 z-10"
                        loading="eager"
                        decoding="async"
                    />
                    {/* right cloud */}
                    <img
                        src={home_cloud_theme}
                        alt="home_cloud_theme"
                        width={160}
                        height={88}
                        draggable={false}
                        className="fixed -right-12 bottom-1/3 z-10"
                        loading="eager"
                        decoding="async"
                    />
                </>
            )}
        </div>
    );
}
