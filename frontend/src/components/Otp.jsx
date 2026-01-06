import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";  // Import useAuth
import api from "../Utils/auth.js"; 

export default function Otp() {
    const navigate = useNavigate();
    const inputsRef = useRef([]);
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const [params] = useSearchParams();
    const token = params.get("token");
    const { setUser } = useAuth();

    // handle input change
    const handleChange = (e, index) => {
        const value = e.target.value;

        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    // handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    // verify OTP
    const handleVerify = async (e) => {
        e.preventDefault();
        
        const finalOtp = otp.join("");

        if (finalOtp.length !== 6) {
            toast.error("Please enter complete OTP");
            return;
        }

        try{
            setLoading(true);
            const response = await axios.post("http://127.0.0.1:8000/auth/verify-otp",
                { otp: finalOtp, token },
                { withCredentials: true }
            )
            if (response?.data && response?.data?.status !== "success"){
                toast.error(response?.data?.message || "Invalid OTP")
                return;
            }
            const userRes = await api.get("/auth/me");
            setUser(userRes.data);
            toast.success("OTP verified");
            navigate("/dashboard");
        } catch {
            toast.error("Somthing wents wrong")
        }finally {
            setLoading(false);
        }
    };

    const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("text");
    const digits = pastedData.replace(/\D/g, "").slice(0, 6);

    if (digits.length === 0) return;

    const newOtp = [...otp];

    for (let i = 0; i < digits.length; i++) {
        newOtp[i] = digits[i];
    }

    setOtp(newOtp);

    // focus next empty input or last one
    const nextIndex = Math.min(digits.length, 5);
    inputsRef.current[nextIndex]?.focus();
    };


    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                toast.error("Invalid URL");
                navigate("/signup");
                return;
            }
    
            try {
                const res = await axios.get(
                    "http://127.0.0.1:8000/auth/verify-otp-token",
                    { params: { token } }
                );
    
                if (res.data.status !== "valid") {
                    throw new Error();
                }
            } catch {
                toast.error("Invalid or expired link");
                navigate("/signup");
            }
        };
    
        verifyToken();
    }, [token, navigate]);



    return (
        <div className="auth-container">
            <div className="auth-card auth-card-wide">
                <h1>Verify your email</h1>

                <form className="auth-form" onSubmit={handleVerify}>
                    <div className="otp-inputs">
                        {otp.map((_, i) => (
                            <input
                                key={i}
                                ref={(el) => (inputsRef.current[i] = el)}
                                maxLength="1"
                                className="otp-input"
                                value={otp[i]}
                                onChange={(e) => handleChange(e, i)}
                                onKeyDown={(e) => handleKeyDown(e, i)}
                                onPaste={handlePaste}
                            />
                        ))}
                    </div>

                    <button className="btn-primary">
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </form>
            </div>
        </div>
    );
}
