import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Ebooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/ebooks")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ebooks:", error);
      });
  }, []);

  // const handleAddToCart = (bookId) => {
  //   axios
  //     .post(`http://localhost:8080/add-to-cart/${bookId}`)
  //     .then((response) => {
  //       console.log("Book added to cart:", response.data);
  //       // Optionally, you can update the UI or show a success message
  //     })
  //     .catch((error) => {
  //       console.error("Error adding book to cart:", error);
  //     });
  // };
  const handleDelete = (bookId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;
    axios
      .delete(`http://localhost:8080/ebooks/${bookId}`)
      .then((res) => {
        alert("Book deleted successfully!");

        setBooks(books.filter((book) => book.id !== bookId));
        // Navigate("/ebooks");
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        alert("Failed to delete book. Please try again.");
      });
  };

  return (
    <div className="container mt-4">
      {sessionStorage.getItem("role") === "ADMIN" && (
        <>
          <div>
            <h3>Add Book</h3>
            <Link to="/add-book" className="btn btn-primary mb-3">
              Add New Book
            </Link>
          </div>
        </>
      )}

      <h2>Book List</h2>
      <div className="row">
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`http://localhost:8080${book.imagePath}`}
                  className="card-img-top"
                  alt={book.title}
                />
                <div className="card-body">
                  <Link
                    to={`/ebooks/${book.id}`}
                    className="btn btn-primary mb-2"
                  >
                    View Details
                  </Link>
                  {/* <button
                    className="btn btn-success mb-2"
                    onClick={handleAddToCart}
                  >
                   
                    Add To Cart
                  </button> */}
                  {sessionStorage.getItem("role") === "ADMIN" && (
                    <>
                      <button
                        className="btn btn-danger mb-2"
                        onClick={() => handleDelete(book.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/ebooks/update/${book.id}`}
                        className="btn btn-warning mb-2"
                      >
                        Update Details
                      </Link>
                    </>
                  )}

                  <h5 className="card-title">{book.name}</h5>
                  <p className="card-text">Author: {book.author}</p>
                  <p>Price : Rs. {book.price}</p>

                  <p className="card-text">Category: {book.category}</p>
                  <p className="card-text">Rating: {book.rating}</p>
                  <p className="card-text">Language: {book.language}</p>
                  <p className="card-text">Publisher: {book.publisher}</p>
                  <p className="card-text">
                    Published Date: {book.dateOfPublish}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Ebooks;
