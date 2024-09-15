import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/addCar.css'; // Add necessary styles

function AddCar({ addCarToList }) {
  const [carModel, setCarModel] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [carImage, setCarImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setCarImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create car object with details
    const newCar = {
      carModel,
      pricePerDay,
      carNumber,
      carImage: URL.createObjectURL(carImage), // Temporarily store image URL
    };

    addCarToList(newCar); // Add car to the list

    // Redirect to car list page after successful submission
    navigate("/cars");
  };

  return (
    <div className="add-car-container">
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit} className="add-car-form">
        <input
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price Per Day"
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Car Number"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} required />
        <button type="submit" className="submit-car-button">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
