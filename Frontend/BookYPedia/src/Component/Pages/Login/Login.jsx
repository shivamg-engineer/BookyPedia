import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext"

import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.target);
  //     axios
  //       .post("http://localhost:8080/login", {
  //         email: formData.get("email"),
  //         password: formData.get("password"),
  //       },{withCredentials: true})
  //       .then((response) => {
  //         console.log("Login successful:", response.data);
  //         alert("Login successful!");
  //         navigate("/home");
  //       })
  //       .catch((error) => {
  //         console.error("Error during login:", error);
  //         alert("Login failed. Please try again.");
  //       });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const user=await login(email, password); // <- using context
      //add role in session storage
      sessionStorage.setItem("role", user.role); // Assuming role is 'user'
      console.log("Login successful");
       console.log("Logged in user:", user);

      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 ${styles.loginWrapper}`}
    >
      <div className={styles.loginBox}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          not registered yet?
          <br />
          <button
            type="button"
            className="btn btn-secondary mt-2 w-100"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
