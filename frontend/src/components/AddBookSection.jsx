import React from 'react'

const AddBookSection = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        isbn: "",
        category: "",
        publisher: "",
        publishYear: "",
        language: "",
        pages: "",
        quantity: "",
        location: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book added:", formData);
        alert("Book added successfully!");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="section">
            <h1 className="section-title">Add New Book</h1>

            <div className="form-card">
                <form className="book-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="title">Book Title *</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter book title"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author *</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                placeholder="Enter author name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="isbn">ISBN Number *</label>
                            <input
                                type="text"
                                id="isbn"
                                name="isbn"
                                value={formData.isbn}
                                onChange={handleChange}
                                placeholder="Enter ISBN number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select category</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Science">Science</option>
                                <option value="Technology">Technology</option>
                                <option value="History">History</option>
                                <option value="Biography">Biography</option>
                                <option value="Self-Help">Self-Help</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type="text"
                                id="publisher"
                                name="publisher"
                                value={formData.publisher}
                                onChange={handleChange}
                                placeholder="Enter publisher name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="publishYear">Publication Year</label>
                            <input
                                type="number"
                                id="publishYear"
                                name="publishYear"
                                value={formData.publishYear}
                                onChange={handleChange}
                                placeholder="2024"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="language">Language *</label>
                            <select
                                id="language"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select language</option>
                                <option value="English">English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pages">Number of Pages</label>
                            <input
                                type="number"
                                id="pages"
                                name="pages"
                                value={formData.pages}
                                onChange={handleChange}
                                placeholder="300"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity *</label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="Enter quantity"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Shelf Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="A-23"
                            />
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter book description"
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
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
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddBookSection