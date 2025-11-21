import { Link } from "react-router-dom";

export default function FormSection({ isForgot, isLogin, isSignup }) {

    return (
        <form
            className={`text-secondary-gray relative flex flex-col ${
                isForgot ? "mt-5" : "mt-7"
            }`}
        >
            {/* username */}
            <input
                type="text"
                placeholder="username"
                className="rounded-full bg-white px-4 py-2 outline-none"
            />

            {/* password only for login & signup */}
            {!isForgot && (
                <input
                    type="password"
                    placeholder="password"
                    className="mt-3 rounded-full bg-white px-4 py-2 outline-none"
                />
            )}

            {/* button */}
            <button
                type="submit"
                className={`bg-secondary-black cursor-pointer rounded-full p-2 text-center text-3xl text-white ${
                    isForgot ? "mt-4" : "mt-6"
                }`}
            >
                {isLogin ? "Log in" : isSignup ? "Sign Up" : "Submit"}
            </button>

            {/* forgot link */}
            {isLogin && (
                <Link
                    to="/forgot-password"
                    className="absolute -bottom-8 z-20 cursor-pointer self-end text-black hover:underline"
                >
                    forgot password?
                </Link>
            )}
        </form>
    );
}
