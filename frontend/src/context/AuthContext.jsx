import { createContext, useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../Utils/auth.js";


const AuthContext = createContext(null);

// const API_BASE = "http://localhost:8000";
// const API_BASE = "http://127.0.0.1:8000";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const didInit = useRef(false);

    // 🔓 LOGOUT
    const logout = async () => {
        try {
            await api.post("/auth/logout");
            toast.success("Logout successful")
        } catch (e) {
            toast.error("Logout failed");
        } finally {
            setUser(null);
        }
    };

    // 🔄 Load user on app start
    useEffect(() => {
        const initAuth = async () => {
            
            try {
                setLoading(true)
                const res = await api.get("/auth/me");
                setUser(res.data);
            } catch 
            {
                setUser(null)
            } finally {
                setLoading(false);
            }
        };
        if (didInit.current) return;
        didInit.current = true;

        initAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                logout,
                isAuthenticated: !!user,
                loading,
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
};
