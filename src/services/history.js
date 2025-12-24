import { API_BASE_URL } from "@/config/api.js";
import { getToken, isLogin } from "../utils/auth";

export default async function fetchHistory() {
    try {
        const headers = {
            "Content-Type": "application/json",
        };

        if (isLogin()) {
            const token = getToken();
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}/v1/user/history`, {
            method: "GET",
            headers,
        });

        if (!response.ok) {
            throw new Error(response.error);
        }

        const responseData = await response.json();
        // console.log("Success:", responseData);
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
