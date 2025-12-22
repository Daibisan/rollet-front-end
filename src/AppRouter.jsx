import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage/Home";
import HistoryLayout from "./pages/HomePage/components/layout/HistoryLayout";
import SettingsLayout from "./pages/HomePage/components/layout/SettingsLayout";
import HomeLayout from "./pages/HomePage/components/layout/HomeLayout";
import LoginPage from "./pages/LoginPage";

export default function AppRouter() {
    const AUTH_LAYOUT = {
        LOGIN: "login",
        SIGNUP: "signup",
        FORGOT: "forgot-password",
    };

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />}>
                <Route index element={<HomeLayout />} />
                <Route path="history" element={<HistoryLayout />} />
                <Route path="settings" element={<SettingsLayout />} />
            </Route>
            <Route
                path="/login"
                element={<LoginPage layoutType={AUTH_LAYOUT.LOGIN} />}
            />
            <Route
                path="/signup"
                element={<LoginPage layoutType={AUTH_LAYOUT.SIGNUP} />}
            />
            <Route
                path="/forgot-password"
                element={<LoginPage layoutType={AUTH_LAYOUT.FORGOT} />}
            />
        </Routes>
    );
}
