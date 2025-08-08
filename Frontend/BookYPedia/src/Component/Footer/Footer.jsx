import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Left Column */}
        <div className="footer-column">
          <Link to="/">Home</Link>
          <Link to="/ebooks">Ebooks</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/authors">Authors</Link>
        </div>

        {/* Center Column */}
        <div className="footer-column center">
          <h2 className="logo">BOOKYPEDIA</h2>
          <div className="social-icons">
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <blockquote>
            A room without a book
            <br />
            is like a body without a soul
            <footer>— Cicero</footer>
          </blockquote>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <a href="#">Help</a>
          <a href="#">FAQs</a>
          <a href="#">About us</a>
          <a href="#">Privacy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#">Privacy Policy</a>
        <p>Copyright © 2025 Bookly. All rights reserved.</p>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};
export default Footer;
