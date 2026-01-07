import React from 'react'

const AdminsSection = () => {
    const admins = [
        {
            id: 1,
            name: "John Smith",
            email: "john.smith@library.edu",
            role: "Super Admin",
            lastLogin: "2024-01-20 10:30 AM",
            status: "Active",
        },
        {
            id: 2,
            name: "Maria Garcia",
            email: "maria.garcia@library.edu",
            role: "Admin",
            lastLogin: "2024-01-20 09:15 AM",
            status: "Active",
        },
        {
            id: 3,
            name: "David Lee",
            email: "david.lee@library.edu",
            role: "Librarian",
            lastLogin: "2024-01-19 04:20 PM",
            status: "Active",
        },
        {
            id: 4,
            name: "Lisa Anderson",
            email: "lisa.anderson@library.edu",
            role: "Librarian",
            lastLogin: "2024-01-20 08:45 AM",
            status: "Active",
        },
    ];

    return (
        <div className="section">
            <div className="section-header">
                <h1 className="section-title">All Admins</h1>
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
                    Add New Admin
                </button>
            </div>

            <div className="table-card">
                <div className="table-header">
                    <input
                        type="text"
                        className="table-search"
                        placeholder="Search by name or email..."
                    />
                    <select className="table-filter">
                        <option value="all">All Roles</option>
                        <option value="super">Super Admin</option>
                        <option value="admin">Admin</option>
                        <option value="librarian">Librarian</option>
                    </select>
                </div>

                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>LAST LOGIN</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin) => (
                            <tr key={admin.id}>
                                <td className="font-semibold">
                                    #ADM-{admin.id.toString().padStart(3, "0")}
                                </td>
                                <td className="font-semibold">{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>
                                    <span className="badge role">{admin.role}</span>
                                </td>
                                <td>{admin.lastLogin}</td>
                                <td>
                                    <span className="status-badge active">{admin.status}</span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="action-btn view">View</button>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Remove</button>
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

export default AdminsSection