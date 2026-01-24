import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";




import { useAuth } from "../context/AuthContext.jsx";
import { admin_dashboard } from "../Utils/admin_dashboard.js";
import Skeleton from "./Sceliton.jsx";

dayjs.extend(relativeTime);

const DashboardSection = () => {
    const { user, loading: authLoading } = useAuth();

    const [dashLoading, setDashLoading] = useState(false);
    const [dashData, setDashData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) return;

        const loadDashboard = async () => {
            try {
                setDashLoading(true);
                setError("");

                if (user.role === "admin") {
                    const data = await admin_dashboard();
                    setDashData(data);
                    console.log(data)
                } else if (user.role === "student") {
                    setDashData(null);
                } else {
                    setError("Invalid role");
                }
            } catch (err) {
                setError("Something went wrong");
            } finally {
                setDashLoading(false);
            }
        };

        loadDashboard();
    }, [user]);

    const bookPersentSign = (data) => {
        return Number(data) > 0 ? "+" : "-";
    } 


    if (authLoading) {
        return <p>Authenticating...</p>;
    }

    if (error) {
        return <h1 className="section-title">{error}</h1>;
    }

    if (dashLoading) {
        return (
            <div className="section">

            <div className="stats-grid">

                <Skeleton className="stat-card height-80" />
                <Skeleton className="stat-card height-80" />
                <Skeleton className="stat-card height-80" />
                <Skeleton className="stat-card height-80" />

            </div>

                <Skeleton className="card" />
        </div>
        );
    }


    return (

        <div className="section">
            <h1 className="section-title">Dashboard Overview</h1>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon blue">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Total Books</div>
                        <div className="stat-value">{Number(dashData?.total_books || '00').toLocaleString()}</div>
                        <div className={dashData?.books_percentage_change < 0 ? "stat-change negative" : "stat-change positive"}>{bookPersentSign(dashData?.books_percentage_change || 0)}{Math.abs(dashData?.books_percentage_change || 0)}% from last month</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon green">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect x="8" y="2" width="8" height="4" rx="1" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Books Issued</div>
                        <div className="stat-value">{Number(dashData?.total_issued_books || "00").toLocaleString()}</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon purple">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Active Students</div>
                        <div className="stat-value">{Number(dashData?.total_students || "00").toLocaleString()}</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon orange">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Overdue Books</div>
                        <div className="stat-value">{Number(dashData?.overdue_issued_books || "00").toLocaleString()}</div>
                    </div>
                </div>
            </div>

            <div className="card">
                <h2 className="card-title">Recent Activity</h2>
                <div className="activity-list">
                    
                    {(dashData?.popular_books.length >0 )? dashData?.popular_books.map((book, index) => (
                        <div className="activity-item" key={index}>
                            <div className="activity-icon blue">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </div>
                            <div className="activity-content">
                                <div className="activity-text">
                                    {book.name}
                                </div>
                                <div className="activity-auther">{dayjs(book.added_at).fromNow()}</div>
                            </div>
                            <div className="activity-content">
                                <div className="activity-text">
                                    By, {book.author}
                                </div>
                                <div className="activity-auther">edition: {book.edition}</div>
                            </div>
                        </div>
                    )):(
                        <div className="activity-auther">No popular books.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DashboardSection
