import { useNavigate } from "react-router-dom";
import styles from './Register.module.css'; // Make sure your CSS module exists
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    axios.post("http://localhost:8080/register", {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        address: formData.get("address")

    }).then((response) => {
      console.log("Registration successful:", response.data);
        alert("Registration successful!");
    }).catch((error) => {
      console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
    }
    );
    navigate("/login");
  };

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${styles.loginWrapper}`}>
      <div className={styles.loginBox}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">email</label>
            <input type="text" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">phone</label>
            <input type="text" className="form-control" id="phone" name="phone" required />
          </div>
          <div className="mb-3">
            <label htmlFor="add" className="form-label">Add</label>
            <input type="text" className="form-control" id="add" name="address" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>

          <p className="text-center mt-3">Already registered?</p>
          <button 
            type="button" 
            className="btn btn-secondary w-100" 
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
