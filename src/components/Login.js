import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './styles/login.css';

function Login({ handleLogin }) {
  const [username, setUsername] = useState(""); // Changed to username
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("customer"); // New state for user type
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate successful login
    if (username === "owner@example.com" && password === "password") {
      handleLogin(true); // Log in as a car owner
      navigate("/add-car"); // Navigate to AddCar page
    } else if (username === "customer@example.com" && password === "password") {
      handleLogin(false); // Log in as a customer
      navigate("/cars"); // Navigate to CarList page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>

        {/* Forgot Password and Signup links */}
        <div className="login-footer">
          <Link to="/forget-password" className="login-link">Forgot Password?</Link>
          <Link to="/signup" className="login-link">Create New Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
