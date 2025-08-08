import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const AddBook = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({}); // optional: for local state
  const [file, setFile] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Optional: Rename field to match backend's expected PDF param
    if (formData.has("file")) {
      formData.set("pdf", formData.get("file"));
      formData.delete("file");
    }

    try {
      const response = await fetch("http://localhost:8080/add-book", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // ✅ Redirect to /ebooks after success
        navigate("/ebooks");
      } else {
        const error = await response.json();
        alert(error.message || "Failed to add book.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };
  return (
    <div className="add-book-page">
      <h1>Add New Book</h1>
      <form
       onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="name"
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
            required
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
            required
          />
        </div>
        <div>
          <label for="ratings">Rating:</label>
          <select name="ratings" id="ratings">
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
            
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
