import { useNavigate, Link } from "react-router-dom";
import Github from "../assets/github.png";
import Google from "../assets/google.png";
import { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import api from "../Utils/auth.js"



export default function Login() {
    const BackEnd_URL = "http://127.0.0.1:8000"
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const { setUser } = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        if (password.length < 6) {
            setError("Password must have 6 characters");
            return;
        }
        try {
            const response = await axios.post(`${BackEnd_URL}/auth/login`, {
                email,
                password,
            },{ withCredentials: true });
            if (response?.data?.status && response?.data?.status !== "success"){
                setError("Something went wrong");
                return;
            }
            // Fetch and set user data after login
            const userRes = await api.get("/auth/me");
            setUser(userRes.data);
            navigate("/dashboard");
            toast.success(response.data.message)
        } catch (err) {
            console.log(err)
            setError(err.response?.data?.detail || "Login failed");
        }
    };

    const loginWithGoogle = () => {
        const state = crypto.randomUUID();
        const Google_id = "660539433130-jq3emta7ha58efrnm2eogr87f9rocube.apps.googleusercontent.com"
        window.location.href =
            "https://accounts.google.com/o/oauth2/v2/auth" +
            `?client_id=${Google_id}` +
            `&redirect_uri=${BackEnd_URL}/auth/google/callback` +
            "&response_type=code" +
            "&scope=openid email profile" +
            `&state=${state}`;
        };

    const handleGithubLogin = () => {
        const clientId = "Ov23liGmfdfOTiZYWsh6";
        const redirectUri = `${BackEnd_URL}/auth/github/callback`;
        const state = crypto.randomUUID();

        window.location.href =
        "https://github.com/login/oauth/authorize" +
        `?client_id=${clientId}` +
        `&redirect_uri=${redirectUri}` +
        `&scope=user:email` +
        `&state=${state}`;
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Welcome back</h1>
                <p className="subtitle">Sign in to your account</p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="you@example.com" required />
                    <input type="password" name="password" placeholder="Password" required />
                    {error.length >0  && (<p className="error-txt">{error}</p>)}
                    <button className="btn-primary">Sign in</button>
                </form>

                <div className="social-auth">
                    <button className="social-icon" onClick={loginWithGoogle}>
                        <img src={Google} alt="" className="icons" />
                    </button>
                    <button className="social-icon" onClick={handleGithubLogin}>
                        <img src={Github} alt="" className="icons" />
                    </button>
                </div>

                <p className="footer-text">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
