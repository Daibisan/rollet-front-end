import { API_BASE_URL } from "@/config/api.js";
import { getToken } from "../utils/auth";

export async function fetchHistory() {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${getToken()}`
        };

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

export async function deleteHistory(id) {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${getToken()}`
        };

        const response = await fetch(`${API_BASE_URL}/v1/user/history/${id}`, {
            method: "DELETE",
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

