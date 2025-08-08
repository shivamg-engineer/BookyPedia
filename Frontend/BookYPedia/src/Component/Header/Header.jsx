import React, { useState,useEffect,useContext } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link, useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import roundedCircle from "react-bootstrap/Image";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { AuthContext } from "../../../src/context/AuthContext";

const Header = () => {
  const [categoryShow, setCategoryShow] = useState(false);
  const [authorShow, setAuthorShow] = useState(false);
 const { isLoggedIn, logout } = useContext(AuthContext);


  // useEffect(() => {
  //   // Check if user is logged in
  //   axios
  //     .get("http://localhost:8080/me", { withCredentials: true })
  //     .then((response) => {
  //       setIsLoggedIn(true);
  //     })
  //     .catch((error) => {
  //       setIsLoggedIn(false); // Not logged in
  //       console.error("Error checking login status:", error);
  //     });
  // }, []);

  // const logout = () => {
  //   axios
  //     .post("http://localhost:8080/logout", {}, { withCredentials: true })
  //     .then((response) => {
  //       console.log("Logout successful:", response.data);
  //       setIsLoggedIn(false);
  //       alert("Logged out successfully");
  //     })
  //     .catch((error) => {
  //       console.error("Error during logout:", error);
  //       alert("Logout failed. Please try again.");
  //     });
  // };

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        {/* Left: Logo */}
        <Navbar.Brand href="#home" className="fw-bold text-primary">
          BookyPedia
        </Navbar.Brand>

        <Navbar>
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="px-3">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/ebooks" className="px-3">
                Ebooks
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown
                title="Categories"
                id="categories-dropdown"
                show={categoryShow}
                onMouseEnter={() => setCategoryShow(true)}
                onMouseLeave={() => setCategoryShow(false)}
                className="animated-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Authors"
                id="authors-dropdown"
                show={authorShow}
                onMouseEnter={() => setAuthorShow(true)}
                onMouseLeave={() => setAuthorShow(false)}
                className="animated-dropdown"
              >
                <NavDropdown.Item href="#author/1">Author A</NavDropdown.Item>
                <NavDropdown.Item href="#author/2">Author B</NavDropdown.Item>
                <NavDropdown.Item href="#author/3">Author C</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#author/4">
                  All Authors
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/my books" className="btn btn-primary">
                My Books
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Right: Cart and Profile */}

        <div className="d-flex align-items-center">
          {isLoggedIn ? (
            <Nav className="ms-auto">
              <Nav.Link
                onClick={logout}
                className="btn btn-danger"
              >
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login" className="btn btn-success">
                Login
              </Nav.Link>
            </Nav>
          )}

          {/* <Link to={"/cart"}>
            <FaShoppingCart size={20} className="me-3" />
          </Link> */}
          <Image
            src="https://i.imgur.com/I80W1Q0.png"
            roundedCircle
            width={35}
            height={35}
            alt="Profile"
          />
        </div>
      </Container>
    </Navbar>
  );
};
export default Header;
