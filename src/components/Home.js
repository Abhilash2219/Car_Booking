import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/home.css';

function Home() {

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Car Rental Service</h1>
        <p>Your one-stop solution for renting cars or earning money by listing your car for rental.</p>
        <p>Experience the convenience of renting from a wide selection of vehicles, or become a car owner and let your car work for you.</p>
        <p>Whether you're planning a trip or looking for a business opportunity, we have everything you need.</p>
      </header>
      
      <div className="login-buttons">
        <Link to="/login">
          <button className="login-btn">Customer</button>
        </Link>
        <Link to="/owner-login">
          <button className="login-btn">Owner </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
