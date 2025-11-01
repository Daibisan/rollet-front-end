import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import HomePage from '../pages/HomePage'
import History from '../pages/HomePage/History'
import Settings from '../pages/HomePage/Settings'
import Home from "../pages/HomePage/Home";
import LoginPage from "../pages/LoginPage";

export default function index() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />}>
                <Route index element={<Home />} />
                <Route path="history" element={<History />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}
