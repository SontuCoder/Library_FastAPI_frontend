import React from 'react'

const DashboardSection = () => {
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
                        <div className="stat-value">12,459</div>
                        <div className="stat-change positive">+12% from last month</div>
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
                        <div className="stat-value">3,264</div>
                        <div className="stat-change positive">+8% from last month</div>
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
                        <div className="stat-value">8,429</div>
                        <div className="stat-change positive">+18% from last month</div>
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
                        <div className="stat-value">127</div>
                        <div className="stat-change negative">+3% from last week</div>
                    </div>
                </div>
            </div>

            <div className="content-grid">
                <div className="card">
                    <h2 className="card-title">Recent Activity</h2>
                    <div className="activity-list">
                        <div className="activity-item">
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
                                    New book added: "Advanced React Patterns"
                                </div>
                                <div className="activity-time">2 minutes ago</div>
                            </div>
                        </div>

                        <div className="activity-item">
                            <div className="activity-icon green">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div className="activity-content">
                                <div className="activity-text">
                                    Book issued to Sarah Johnson (ID: ST-2847)
                                </div>
                                <div className="activity-time">15 minutes ago</div>
                            </div>
                        </div>

                        <div className="activity-item">
                            <div className="activity-icon purple">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                </svg>
                            </div>
                            <div className="activity-content">
                                <div className="activity-text">
                                    New student registered: Michael Chen
                                </div>
                                <div className="activity-time">1 hour ago</div>
                            </div>
                        </div>

                        <div className="activity-item">
                            <div className="activity-icon green">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                </svg>
                            </div>
                            <div className="activity-content">
                                <div className="activity-text">
                                    Book returned: "Clean Code" by Robert Martin
                                </div>
                                <div className="activity-time">2 hours ago</div>
                            </div>
                        </div>

                        <div className="activity-item">
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
                                    New book added: "JavaScript: The Good Parts"
                                </div>
                                <div className="activity-time">3 hours ago</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h2 className="card-title">Popular Books</h2>
                    <div className="book-list">
                        <div className="book-item">
                            <div className="book-rank">1</div>
                            <div className="book-name">Clean Code</div>
                            <div className="book-count">284 issues</div>
                        </div>
                        <div className="book-item">
                            <div className="book-rank">2</div>
                            <div className="book-name">Design Patterns</div>
                            <div className="book-count">267 issues</div>
                        </div>
                        <div className="book-item">
                            <div className="book-rank">3</div>
                            <div className="book-name">The Pragmatic Programmer</div>
                            <div className="book-count">243 issues</div>
                        </div>
                        <div className="book-item">
                            <div className="book-rank">4</div>
                            <div className="book-name">You Don't Know JS</div>
                            <div className="book-count">218 issues</div>
                        </div>
                        <div className="book-item">
                            <div className="book-rank">5</div>
                            <div className="book-name">Refactoring</div>
                            <div className="book-count">195 issues</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSection
