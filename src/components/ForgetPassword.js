import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/forgetpassword.css';

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate sending a password reset link
    setMessage("A password reset link has been sent to your email.");
    setError("");

    // Simulate a delay before redirecting
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-card">
        <h2 className="forget-password-title">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="forget-password-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="forget-password-input"
          />
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          <button type="submit" className="forget-password-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
