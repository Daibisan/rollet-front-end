import AppRouter from "./AppRouter";
import { AuthProvider } from "@/context/AuthContext.jsx";

export default function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}
