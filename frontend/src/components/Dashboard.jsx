import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <span>AuthApp</span>
          <button className="btn-ghost" onClick={logout}>Logout</button>
        </div>
      </header>

      <main className="dashboard-main">
        <h1>Welcome, {user?.email}</h1>
        <p>Your account is verified</p>
      </main>
    </div>
  );
}
