import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/signup.css';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate signup and redirect to login
    setError("");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2></h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        {/* Gender selection */}
        <div className="gender-selection">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="Other"
              checked={gender === "Other"}
              onChange={() => setGender("Other")}
            />
            Other
          </label>
        </div>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Error message if passwords don't match */}
        {error && <p className="error-message">{error}</p>}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
