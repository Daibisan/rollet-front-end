import { useEffect, useState } from "react";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 5000); // muncul setelah 300px
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollTop}
            className={`bg-main-gray border-gray fixed bottom-6 left-6 rounded-full border-2 px-5 py-3 text-white transition-all duration-300 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"} hover:border-secondary-gray hover:text-secondary-gray scale-110 cursor-pointer`}
        >
            ↑
        </button>
    );
}
