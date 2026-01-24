import api from "./auth.js";

export const admin_dashboard = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const result = await api.get("/admin/admin-dashboard");
        return result.data;
    } catch (e) {
        console.error("Admin dashboard API error:", e);
        throw e;
    }
};

