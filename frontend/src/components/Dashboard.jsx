import { useState } from "react";

import { useAuth } from "../context/AuthContext";
import AddBookSection from "./AddBookSection";
import DashboardSection from './DashboardSection'
import AllBooksSection from "./AllBooksSection"
import IssuedBooksSection from "./IssuedBooksSection"
import StudentsSection from "./StudentsSection"
import AdminsSection from "./AdminsSection"

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div
          className="sidebar-header"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <div className="logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span className="logo-text">LibraryHub</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${
              activeSection === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </button>

          <button
            className={`nav-item ${
              activeSection === "add-book" ? "active" : ""
            }`}
            onClick={() => setActiveSection("add-book")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Add Book
          </button>

          <button
            className={`nav-item ${
              activeSection === "all-books" ? "active" : ""
            }`}
            onClick={() => setActiveSection("all-books")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            All Books
          </button>

          <button
            className={`nav-item ${
              activeSection === "issued-books" ? "active" : ""
            }`}
            onClick={() => setActiveSection("issued-books")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" />
            </svg>
            Issued Books
          </button>

          <button
            className={`nav-item ${
              activeSection === "students" ? "active" : ""
            }`}
            onClick={() => setActiveSection("students")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Students
          </button>

          <button
            className={`nav-item ${activeSection === "admins" ? "active" : ""}`}
            onClick={() => setActiveSection("admins")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            All Admins
          </button>

        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.25m7.07 7.07l4.24 4.25M1 12h6m6 0h6M4.22 19.78l4.24-4.24m7.07-7.07l4.24-4.25" />
            </svg>
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navbar */}
        <header className="top-navbar">
          <button
            className="menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <div className="search-bar">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search books, students, or anything..."
            />
          </div>

          <div className="navbar-actions">
            <button className="icon-button">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="notification-badge">3</span>
            </button>

            <div className="profile-button" >
              <img
                src="/admin-avatar.png"
                alt="Admin"
                className="profile-avatar"
              />
              <div className="profile-info" onClick={() => logout()} >
                <div className="profile-name">{user?.role[0].toUpperCase() + user?.role.substring(1)}</div>
                <div className="profile-role">Logout</div>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="content-area">
          {activeSection === "dashboard" && <DashboardSection />}
          {activeSection === "add-book" && <AddBookSection />}
          {activeSection === "all-books" && <AllBooksSection />}
          {activeSection === "issued-books" && <IssuedBooksSection />}
          {activeSection === "students" && <StudentsSection />}
          {activeSection === "admins" && <AdminsSection />}
        </div>

      </main>
    </div>
  );
}
