import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";


const BookDetails = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const { id } = useParams(); // 🔍 extract book ID from URL
  const [book, setBook] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ebooks/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{book.name}</h2>
      <img
        src={`http://localhost:8080${book.imagePath}`}
        alt={book.name}
        style={{ width: "200px" }}
      />
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Category:</strong> {book.category}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher}
      </p>
      <p>
        <strong>Published:</strong> {book.dateOfPublish}
      </p>
      <p>
        <strong>Price:</strong> ₹{book.price}
      </p>
      <p>
        <strong>Language:</strong> {book.language}
      </p>
      <p>
        <strong>Pages:</strong> {book.pages}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>

      {/* {isLoggedIn  && (
        <button className="btn btn-success">Add to Cart</button>
      )} */}

      {!isLoggedIn && (
        <p className="text-danger mt-3">
          Please <a href="/login">login</a> to view.
        </p>
      )}

      {/* PDF Viewer */}
      {book.pdfPath && isLoggedIn && (
        <div className="my-4">
          <h4>Read Book:</h4>
          <iframe
            src={`http://localhost:8080${book.pdfPath}`}
            title={book.name}
            style={{ width: "100%", height: "500px" }}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
