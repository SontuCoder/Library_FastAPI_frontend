import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Github from "../assets/github.png";
import Google from "../assets/google.png";
import toast from "react-hot-toast";

export default function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const BackEnd_UR = "http://127.0.0.1:8000"

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (password.length < 6) {
            setError("Password must have 6 characters");
            return;
        }
        try {
            setError("")
            const response = await axios.post(`${BackEnd_UR}/auth/signup`, {
                email,
                password,
            },{ withCredentials: true });
            if (response?.data?.status && response?.data?.status !== "success"){
                setError("Something went wrong");
                return;
            }

            const username = email.split("@")[0]
            const domain = email.split("@")[1]
            const mail = [username.slice(0, 5), "***@", domain].join("")
            setError("")
            toast.success(`Otp sent to ${mail}`)
            navigate(response?.data?.redirect)
        } catch (err) {
            setError(err.response?.data?.detail || "Signup failed");
        }
    };

    const loginWithGoogle = () => {
    const state = crypto.randomUUID();
    const Google_id = "660539433130-jq3emta7ha58efrnm2eogr87f9rocube.apps.googleusercontent.com"
    window.location.href =
        "https://accounts.google.com/o/oauth2/v2/auth" +
        `?client_id=${Google_id}` +
        `&redirect_uri=${BackEnd_UR}/auth/google/callback` +
        "&response_type=code" +
        "&scope=openid email profile" +
        `&state=${state}`;
    };

    const handleGithubLogin = () => {
        const clientId = "Ov23liGmfdfOTiZYWsh6";
        const redirectUri = encodeURIComponent(`${BackEnd_UR}/auth/github/callback`);
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
                <h1>Create your account</h1>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" required />

                    <button className="btn-primary">Create Account</button>
                </form>
                {error.length >0  && (<p className="error-txt">{error}</p>)}

                <div className="social-auth">
                    <button className="social-icon" onClick={loginWithGoogle}>
                        <img src={Google} alt="" className="icons" />
                    </button>
                    <button className="social-icon" onClick={handleGithubLogin}>
                        <img src={Github} alt="" className="icons" />
                    </button>
                </div>

                <p className="footer-text">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
