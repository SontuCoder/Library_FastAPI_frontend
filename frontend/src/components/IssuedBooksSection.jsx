import React from 'react'

const IssuedBooksSection = () => {
    const issuedBooks = [
        {
            id: 1,
            bookTitle: "Clean Code",
            studentName: "Sarah Johnson",
            studentId: "ST-2847",
            issueDate: "2024-01-15",
            dueDate: "2024-02-15",
            status: "Active",
        },
        {
            id: 2,
            bookTitle: "Design Patterns",
            studentName: "Michael Chen",
            studentId: "ST-3921",
            issueDate: "2024-01-10",
            dueDate: "2024-02-10",
            status: "Active",
        },
        {
            id: 3,
            bookTitle: "The Pragmatic Programmer",
            studentName: "Emma Williams",
            studentId: "ST-1564",
            issueDate: "2024-01-05",
            dueDate: "2024-01-20",
            status: "Overdue",
        },
        {
            id: 4,
            bookTitle: "You Don't Know JS",
            studentName: "James Brown",
            studentId: "ST-4782",
            issueDate: "2024-01-18",
            dueDate: "2024-02-18",
            status: "Active",
        },
        {
            id: 5,
            bookTitle: "Refactoring",
            studentName: "Olivia Davis",
            studentId: "ST-2193",
            issueDate: "2024-01-12",
            dueDate: "2024-02-12",
            status: "Active",
        },
    ];

    return (
        <div className="section">
            <div className="section-header">
                <h1 className="section-title">Issued Books</h1>
                <button className="btn btn-primary">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Issue New Book
                </button>
            </div>

            <div className="table-card">
                <div className="table-header">
                    <input
                        type="text"
                        className="table-search"
                        placeholder="Search by book title or student name..."
                    />
                    <select className="table-filter">
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="overdue">Overdue</option>
                    </select>
                </div>

                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ISSUE ID</th>
                            <th>BOOK TITLE</th>
                            <th>STUDENT NAME</th>
                            <th>STUDENT ID</th>
                            <th>ISSUE DATE</th>
                            <th>DUE DATE</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issuedBooks.map((issue) => (
                            <tr key={issue.id}>
                                <td className="font-semibold">
                                    #ISS-{issue.id.toString().padStart(4, "0")}
                                </td>
                                <td className="font-semibold">{issue.bookTitle}</td>
                                <td>{issue.studentName}</td>
                                <td>{issue.studentId}</td>
                                <td>{issue.issueDate}</td>
                                <td>{issue.dueDate}</td>
                                <td>
                                    <span
                                        className={`status-badge ${issue.status === "Active" ? "active" : "overdue"
                                            }`}
                                    >
                                        {issue.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="action-btn primary">Return</button>
                                        <button className="action-btn edit">Renew</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default IssuedBooksSection