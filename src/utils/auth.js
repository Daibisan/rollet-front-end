const TOKEN_KEY = "token";
const USER_KEY = "user";

// ===== TOKEN =====
export function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

// ===== USER =====
export function saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
}

export function removeUser() {
    localStorage.removeItem(USER_KEY);
}

// ===== JWT =====
export function getTokenPayload() {
    const token = getToken();
    if (!token) return null;

    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch {
        return null;
    }
}

export function isLogin() {
    const payload = getTokenPayload();
    if (!payload?.expr) return false;

    const now = Math.floor(Date.now() / 1000);
    return payload.expr > now;
}

export function clearAuth() {
    removeToken();
    removeUser();
}
