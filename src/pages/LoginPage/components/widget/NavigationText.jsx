import { Link } from "react-router-dom";

export default function NavigationText({ layoutType, isForgot }) {
    const textMap = {
        login: {
            message: "Don't have an account? ",
            link: "/signup",
            linkText: "Sign up",
        },
        signup: {
            message: "Already have an account? ",
            link: "/login",
            linkText: "Log In",
        },
        "forgot-password": {
            message: "",
            link: "/login",
            linkText: "Back to login page",
        },
    };
    const { message, link, linkText } = textMap[layoutType] ?? textMap.login;

    return (
        <p className={`${isForgot ? "mt-2" : "mt-6 self-center"}`}>
            {message}
            <Link
                to={link}
                className={`cursor-pointer hover:underline ${isForgot ? "" : "text-main-blue"}`}
            >
                {linkText}
            </Link>
        </p>
    );
}
