import { Link } from "react-router-dom";

export default function FormSection({ isForgot, isLogin, isSignup }) {
    return (
        // Default = regist form
        <form
            className={`text-secondary-gray relative flex flex-col ${
                isForgot ? "mt-5" : "mt-7"
            }`}
        >
            <div className="flex flex-col gap-3">
                {/* email */}
                <input
                    type="email"
                    placeholder="email"
                    className="rounded-full bg-white px-4 py-2 outline-none"
                />

                {/* username */}
                {isSignup && (
                    <input
                        type="text"
                        placeholder="username"
                        className="rounded-full bg-white px-4 py-2 outline-none"
                    />
                )}

                {/* password */}
                {!isForgot && (
                    <input
                        type="password"
                        placeholder="password"
                        className="rounded-full bg-white px-4 py-2 outline-none"
                    />
                )}
            </div>

            {/* submit button */}
            <button
                type="submit"
                className={`bg-secondary-black cursor-pointer rounded-full p-2 text-center text-3xl text-white mt-4`}
            >
                {isLogin ? "Log in" : isSignup ? "Sign Up" : "Submit"}
            </button>

            {/* forgot password button */}
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
