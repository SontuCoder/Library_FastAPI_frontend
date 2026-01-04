import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Otp from "./components/Otp";
import Dashboard from "./components/Dashboard";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route
          path="/dashboard"
          element={
            // <PrivateRoute>
              <Dashboard />
            // </PrivateRoute>
          }
          />
      </Routes>
    </BrowserRouter>
  );
}
