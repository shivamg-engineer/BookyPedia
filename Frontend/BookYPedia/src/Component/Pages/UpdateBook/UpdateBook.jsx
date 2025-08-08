import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    category: "",
    publisher: "",
    dateOfPublish: "",
    ratings: "1",
    language: "",
    pages: "",
  });

  const [image, setImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    // Fetch the book details using the ID from the URL
    axios.get(`http://localhost:8080/ebooks/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append book fields
    for (const key in book) {
      formData.append(key, book[key]);
    }

    // Append files
    if (image) formData.append("image", image);
    if (pdfFile) formData.append("file", pdfFile);

    try {
      await axios.put(`http://localhost:8080/update-book/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Book updated successfully!");
      navigate("/ebooks"); // change this route if needed
    } catch (err) {
      console.error("Error updating book:", err);
      alert("Failed to update book.");
    }
  };
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="add-book-page">
      <h1>Update Book</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={book.name} // this binds the current name
            onChange={handleChange} // this updates the state when typing
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Book Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={book.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={book.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">
            Publisher
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date-of-publish" className="form-label">
            Published Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date-of-publish"
            name="dateOfPublish"
            value={book.dateOfPublish}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ratings">Rating:</label>
          <select name="ratings" id="ratings" onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="language" className="form-label">
            Language
          </label>
          <input
            type="text"
            className="form-control"
            id="language"
            name="language"
            value={book.language}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pages" className="form-label">
            Pages
          </label>
          <input
            type="number"
            className="form-control"
            id="pages"
            name="pages"
            value={book.pages}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Book File (PDF)
          </label>
          <input
            type="file"
            className="form-control"
            id="file"
            name="file"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
          />
        </div>

        <button
          type="button"
          className="btn btn-secondary mb-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button type="submit" className="btn btn-warning">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
