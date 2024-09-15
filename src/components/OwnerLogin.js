import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './styles/login.css';

function OwnerLogin({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "owner@example.com" && password === "password") {
      handleLogin(true); // Log in as a car owner
      navigate("/add-car"); // Navigate to AddCar page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Owner Login</h2>
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

        <div className="login-footer">
          <Link to="/forget-password" className="login-link">Forgot Password?</Link>
          <Link to="/signup" className="login-link">Create New Account</Link>
        </div>
      </div>
    </div>
  );
}

export default OwnerLogin;
