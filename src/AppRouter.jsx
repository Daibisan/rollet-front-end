import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import HomePage from './pages/HomePage'
import HistoryLayout from './pages/HomePage/components/layout/HistoryLayout'
import SettingsLayout from './pages/HomePage/components/layout/SettingsLayout'
import HomeLayout from "./pages/HomePage/components/layout/HomeLayout";
import LoginPage from "./pages/LoginPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />}>
                <Route index element={<HomeLayout/>} />
                <Route path="history" element={<HistoryLayout />} />
                <Route path="settings" element={<SettingsLayout />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}
