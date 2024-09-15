import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/customerDetails.css';

function CustomerDetails({ selectedCar, setCustomerDetails }) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [adharCard, setAdharCard] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [address, setAddress] = useState("");
  const [days, setDays] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomerDetails({ 
      firstName, middleName, lastName, mobileNumber, adharCard, 
      drivingLicense, address, days, carDetails: selectedCar 
    });
    navigate("/payment");
  };

  return (
    <div className="customer-details-container">
      <h2>Customer Details</h2>

      {/* Display selected car details */}
      {selectedCar && (
        <div className="selected-car-details">
          <h3>Selected Car:</h3>
          <p><strong>Brand:</strong> {selectedCar.brand}</p>
          <p><strong>Model:</strong> {selectedCar.model}</p>
          <p><strong>Price Per Day:</strong> ${selectedCar.pricePerDay}</p>
          <p><strong>Address:</strong> {selectedCar.address}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        <input type="text" placeholder="Adhar Card Number" value={adharCard} onChange={(e) => setAdharCard(e.target.value)} required />
        <input type="text" placeholder="Driving License" value={drivingLicense} onChange={(e) => setDrivingLicense(e.target.value)} required />
        <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <input type="number" placeholder="Number of Days" value={days} onChange={(e) => setDays(e.target.value)} min="1" required />
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
}

export default CustomerDetails;
