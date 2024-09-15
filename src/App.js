import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home"; // Home component
import Login from "./components/Login";
import Signup from "./components/Signup";
import CarList from "./components/CarList";
import OwnerLogin from "./components/OwnerLogin"; // OwnerLogin component for car owners
import AddCar from "./components/AddCar"; // AddCar component for car owners
import CustomerDetails from "./components/CustomerDetails";
import Payment from "./components/Payment";
import Acknowledgement from "./components/Acknowledgement";
import ForgetPassword from "./components/ForgetPassword"; // ForgetPassword component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({});
  const [paymentMode, setPaymentMode] = useState("");
  const [isCarOwner, setIsCarOwner] = useState(false); // State to track if the user is a car owner
  const [carList, setCarList] = useState([]); // State to track the list of cars

  const handleLogin = (isOwner = false) => {
    setIsLoggedIn(true);
    setIsCarOwner(isOwner); // Set if the user is a car owner or customer
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsCarOwner(false);
  };

  // Function to add a new car to the car list
  const addCarToList = (newCar) => {
    setCarList((prevCarList) => [...prevCarList, newCar]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page as the default route */}
          <Route path="/" element={<Home />} />

          {/* Customer login */}
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />

          {/* Owner login */}
          <Route path="/owner-login" element={<OwnerLogin handleLogin={handleLogin} />} />

          {/* Signup page */}
          <Route path="/signup" element={<Signup />} />

          {/* Forget password */}
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* Car listing page after login */}
          <Route
            path="/cars"
            element={
              isLoggedIn && !isCarOwner ? (
                <CarList setSelectedCar={setSelectedCar} carList={carList} />
              ) : isLoggedIn && isCarOwner ? (
                <Navigate to="/add-car" /> // Redirect car owners to AddCar page
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Add Car page for car owners */}
          <Route
            path="/add-car"
            element={
              isLoggedIn && isCarOwner ? (
                <AddCar addCarToList={addCarToList} />
              ) : (
                <Navigate to="/owner-login" />
              )
            }
          />

          {/* Customer details form */}
          <Route
            path="/customer-details"
            element={
              selectedCar ? (
                <CustomerDetails selectedCar={selectedCar} setCustomerDetails={setCustomerDetails} />
              ) : (
                <Navigate to="/cars" />
              )
            }
          />

          {/* Payment page */}
          <Route
            path="/payment"
            element={
              Object.keys(customerDetails).length ? (
                <Payment customerDetails={customerDetails} selectedCar={selectedCar} setPaymentMode={setPaymentMode} />
              ) : (
                <Navigate to="/customer-details" />
              )
            }
          />

          {/* Acknowledgment page */}
          <Route
            path="/acknowledgement"
            element={
              paymentMode ? (
                <Acknowledgement customerDetails={customerDetails} selectedCar={selectedCar} paymentMode={paymentMode} />
              ) : (
                <Navigate to="/payment" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
