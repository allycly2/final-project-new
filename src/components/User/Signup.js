import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // New state for alert message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate field lengths
    if (name.length > 30) {
      // Handle error: Name is too long
      return;
    }

    if (email.length > 40) {
      // Handle error: Email is too long
      return;
    }

    if (password.length > 70) {
      // Handle error: Password is too long
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        password,
      });

      // Handle successful signup
      console.log("Signup successful");
      setShowAlert(true); // Set showAlert to true to show the alert message
      // Redirect to the login page after a short delay (e.g., 2 seconds)
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup-form-container">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <h1 className="logo">Great Plan</h1>
        </div>
        <div className="signup-header">
          <h2>Signup</h2>
        </div>
        <div>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
        <div className="signup-text">
          Already have an account? <a href="/login">Login here</a>
        </div>
        {showAlert && (
          <div className="signup-redirect">
            <p>Signup successful!</p>
            <p>Redirecting to the login page...</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
