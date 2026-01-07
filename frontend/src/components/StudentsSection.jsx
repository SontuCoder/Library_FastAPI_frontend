import React from 'react'

const StudentsSection = () => {
    const students = [
        {
            id: 1,
            name: "Sarah Johnson",
            studentId: "ST-2847",
            email: "sarah.j@university.edu",
            phone: "+1 234-567-8901",
            department: "Computer Science",
            booksIssued: 2,
            status: "Active",
        },
        {
            id: 2,
            name: "Michael Chen",
            studentId: "ST-3921",
            email: "michael.c@university.edu",
            phone: "+1 234-567-8902",
            department: "Engineering",
            booksIssued: 1,
            status: "Active",
        },
        {
            id: 3,
            name: "Emma Williams",
            studentId: "ST-1564",
            email: "emma.w@university.edu",
            phone: "+1 234-567-8903",
            department: "Business",
            booksIssued: 3,
            status: "Active",
        },
        {
            id: 4,
            name: "James Brown",
            studentId: "ST-4782",
            email: "james.b@university.edu",
            phone: "+1 234-567-8904",
            department: "Mathematics",
            booksIssued: 1,
            status: "Active",
        },
        {
            id: 5,
            name: "Olivia Davis",
            studentId: "ST-2193",
            email: "olivia.d@university.edu",
            phone: "+1 234-567-8905",
            department: "Physics",
            booksIssued: 2,
            status: "Active",
        },
    ];

    return (
        <div className="section">
            <div className="section-header">
                <h1 className="section-title">All Students</h1>
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
                    Add New Student
                </button>
            </div>

            <div className="table-card">
                <div className="table-header">
                    <input
                        type="text"
                        className="table-search"
                        placeholder="Search by name, ID, or email..."
                    />
                    <select className="table-filter">
                        <option value="all">All Departments</option>
                        <option value="cs">Computer Science</option>
                        <option value="eng">Engineering</option>
                        <option value="bus">Business</option>
                        <option value="math">Mathematics</option>
                    </select>
                </div>

                <table className="data-table">
                    <thead>
                        <tr>
                            <th>STUDENT ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>DEPARTMENT</th>
                            <th>BOOKS ISSUED</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="font-semibold">{student.studentId}</td>
                                <td className="font-semibold">{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>
                                    <span className="badge">{student.department}</span>
                                </td>
                                <td>
                                    <span className="badge-count">{student.booksIssued}</span>
                                </td>
                                <td>
                                    <span className="status-badge active">{student.status}</span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="action-btn view">View</button>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
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

export default StudentsSection