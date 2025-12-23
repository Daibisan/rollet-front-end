import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    saveToken,
    saveUser,
    getUser,
    clearAuth,
    isLogin as checkIsLogin,
} from "../utils/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // ======================
    // INIT AUTH (SAAT REFRESH)
    // ======================
    useEffect(() => {
        if (!checkIsLogin()) {
            clearAuth();
            return;
        }

        const storedUser = getUser();
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    // ======================
    // LOGIN
    // ======================
    function login(data) {
        const user = {
            id: data.user_id,
            name: data.name,
        };

        saveToken(data.token);
        saveUser(user);
        setUser(user);
        navigate("/home");
    }

    // ======================
    // LOGOUT
    // ======================
    function logout(redirect = null) {
        clearAuth();
        setUser(null);
        if (redirect) navigate("/login");
    }

    function isLogin() {
        return checkIsLogin();
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
