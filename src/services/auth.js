import { API_BASE_URL } from "@/config/api.js";

async function handleResponse(res) {
    const data = await res.json();
    console.log(res);
    
    if (!res.ok) throw new Error(data.error);

    return data;
}

export async function fetch_register(email, name, password) {
    const res = await fetch(`${API_BASE_URL}/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
    });

    return handleResponse(res);
}

export async function fetch_login(email, password) {
    const res = await fetch(`${API_BASE_URL}/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    return handleResponse(res);
}