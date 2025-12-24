import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetch_login, fetch_register } from "../../../services/auth";
import { useAuth } from "../../../context/AuthContext";

export default function FormSection({ isForgot, isLogin, isSignup }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleRegist(e) {
        e.preventDefault();

        try {
            const res = await fetch_register(email, name, password);
            alert(res.message);
            navigate('/login');
        } catch (error) {
            alert(error);
        }
    }

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await fetch_login(email, password);
            login(res);
            
        } catch (error) {
            alert(error);
        }
    }

    return (
        // Default layout = regist form
        <form
            onSubmit={isSignup ? handleRegist : isLogin ? handleLogin : null}
            className={`text-secondary-gray relative flex flex-col ${
                isForgot ? "mt-5" : "mt-7"
            }`}
        >
            <div className="flex flex-col gap-3">
                {/* email */}
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="rounded-full bg-white px-4 py-2 outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* username */}
                {isSignup && (
                    <input
                        type="text"
                        placeholder="username"
                        name="name"
                        className="rounded-full bg-white px-4 py-2 outline-none"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                )}

                {/* password */}
                {!isForgot && (
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="rounded-full bg-white px-4 py-2 outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="off"
                        minLength={8}
                    />
                )}
            </div>

            {/* submit button */}
            <button
                type="submit"
                className={`bg-secondary-black mt-4 cursor-pointer rounded-full p-2 text-center text-3xl text-white`}
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
