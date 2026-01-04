import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Github from "../assets/github.png";
import Google from "../assets/google.png";


export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email: "user@example.com" });
        navigate("/dashboard");
    };

    // const responseGoogleLogin = async (response) => {
    //     try {
    //         if (response) {
    //             const authCode = response['code']
    //             console.log(authCode)
    //             toast.success("Login Successful")
    //         } else {
    //             throw new Error("Something went wrong");
    //         }
    //     } catch (error) {
    //         console.error(error)
    //         toast.error("Login Failed")
    //     }
    // }


    // const GoogleLogin = useGoogleLogin({
    //     onSuccess: responseGoogleLogin,
    //     onError: responseGoogleLogin,
    //     flow: 'auth-code'
    // })

    const loginWithGoogle = () => {
        const state = crypto.randomUUID();
        const Google_id = "660539433130-jq3emta7ha58efrnm2eogr87f9rocube.apps.googleusercontent.com"
        window.location.href =
            "https://accounts.google.com/o/oauth2/v2/auth" +
            `?client_id=${Google_id}` +
            "&redirect_uri=http://127.0.0.1:8000/auth/google/callback" +
            "&response_type=code" +
            "&scope=openid email profile" +
            `&state=${state}`;
        };

    const handleGithubLogin = () => {
        const clientId = "Ov23liGmfdfOTiZYWsh6";
        const redirectUri = "http://127.0.0.1:8000/auth/github/callback";
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
                    <input type="email" placeholder="you@example.com" required />
                    <input type="password" placeholder="Password" required />
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
