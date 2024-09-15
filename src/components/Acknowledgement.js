import React from "react";
import { useLocation } from "react-router-dom";
import './styles/acknowledgement.css';

function Acknowledgement() {
  const location = useLocation();
  const { selectedCar, customerDetails } = location.state || {};

  return (
    <div className="acknowledgement-container">
      <h2>Thank You for Your Booking!</h2>
      <p>Your booking has been successfully processed. Below are the details of your booking:</p>

      <div className="details-section">
        <div className="car-details">
          <h3>Car Details</h3>
          <p><strong>Car Model:</strong> {selectedCar?.model}</p>
          <p><strong>Price Per Day:</strong> ${selectedCar?.pricePerDay}</p>
          <p><strong>Total Days:</strong> {customerDetails?.days}</p>
          <p><strong>Total Amount:</strong> ${selectedCar?.pricePerDay * customerDetails?.days}</p>
        </div>

        <div className="owner-details">
          <h3>Owner's Details</h3>
          <p><strong>Email:</strong> owner@example.com</p>
          <p><strong>Phone:</strong> 123-456-7890</p>
          <p><strong>WhatsApp:</strong> +1-234-567-890</p>
        </div>
      </div>
    </div>
  );
}

export default Acknowledgement;
