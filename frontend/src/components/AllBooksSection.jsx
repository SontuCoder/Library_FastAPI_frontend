import React from 'react'

const AllBooksSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("all");

    const books = [
        {
            id: 1,
            title: "Clean Code",
            author: "Robert C. Martin",
            isbn: "978-0132350884",
            category: "Technology",
            copies: 5,
            available: 3,
            status: "Available",
        },
        {
            id: 2,
            title: "Design Patterns",
            author: "Gang of Four",
            isbn: "978-0201633612",
            category: "Technology",
            copies: 4,
            available: 1,
            status: "Available",
        },
        {
            id: 3,
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            isbn: "978-0135957059",
            category: "Technology",
            copies: 6,
            available: 0,
            status: "Unavailable",
        },
        {
            id: 4,
            title: "You Don't Know JS",
            author: "Kyle Simpson",
            isbn: "978-1491904244",
            category: "Technology",
            copies: 8,
            available: 5,
            status: "Available",
        },
        {
            id: 5,
            title: "Refactoring",
            author: "Martin Fowler",
            isbn: "978-0134757599",
            category: "Technology",
            copies: 3,
            available: 2,
            status: "Available",
        },
        {
            id: 6,
            title: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            isbn: "978-0262033848",
            category: "Science",
            copies: 4,
            available: 1,
            status: "Available",
        },
    ];

    return (
        <div className="section">
            <div className="section-header">
                <h1 className="section-title">All Books</h1>
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
                    Add New Book
                </button>
            </div>

            <div className="table-card">
                <div className="table-header">
                    <input
                        type="text"
                        className="table-search"
                        placeholder="Search by title, author, or ISBN..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="table-filter"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="Technology">Technology</option>
                        <option value="Science">Science</option>
                        <option value="Fiction">Fiction</option>
                        <option value="History">History</option>
                    </select>
                </div>

                <table className="data-table">
                    <thead>
                        <tr>
                            <th>BOOK ID</th>
                            <th>TITLE</th>
                            <th>AUTHOR</th>
                            <th>ISBN</th>
                            <th>CATEGORY</th>
                            <th>COPIES</th>
                            <th>AVAILABLE</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id}>
                                <td className="font-semibold">
                                    #{book.id.toString().padStart(4, "0")}
                                </td>
                                <td className="font-semibold">{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>
                                    <span className="badge">{book.category}</span>
                                </td>
                                <td>
                                    <span className="badge-count">{book.copies}</span>
                                </td>
                                <td>
                                    <span className="badge-count">{book.available}</span>
                                </td>
                                <td>
                                    <span
                                        className={`status-badge ${book.available > 0 ? "available" : "unavailable"
                                            }`}
                                    >
                                        {book.status}
                                    </span>
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

export default AllBooksSection