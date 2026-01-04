import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles.css'
import { AuthProvider } from "./context/AuthContext.jsx";


import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'
const AppWrapper = () => { 
    return (
        <GoogleOAuthProvider clientId='660539433130-jq3emta7ha58efrnm2eogr87f9rocube.apps.googleusercontent.com'>
            <AuthProvider>
                <App /> 
                <Toaster position="top-right" />
            </AuthProvider>
        </GoogleOAuthProvider>
    )
} 

createRoot(document.getElementById('root')).render(
<StrictMode> 
    <AppWrapper /> 
</StrictMode>,
);