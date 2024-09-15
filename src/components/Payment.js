import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/payment.css';

function Payment({ customerDetails, selectedCar, setPaymentMode }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    setPaymentMode(paymentMethod);
    navigate("/acknowledgement", { state: { selectedCar, customerDetails } });
  };

  return (
    <div className="payment-container">
      <h2>Payment for {selectedCar?.model}</h2>
      <p>Total Amount: ${selectedCar?.pricePerDay * customerDetails?.days}</p>

      <h3>Select Payment Method</h3>
      <div className="payment-methods">
        <div className="payment-option">
          <input
            type="radio"
            id="phonepe"
            name="paymentMethod"
            value="PhonePe"
            checked={paymentMethod === "PhonePe"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="phonepe">
            <img src="/images/phonepe.png" alt="PhonePe" /> PhonePe
          </label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="gpay"
            name="paymentMethod"
            value="Google Pay"
            checked={paymentMethod === "Google Pay"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="gpay">
            <img src="/images/googlepay.jpeg" alt="Google Pay" /> Google Pay
          </label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="paytm"
            name="paymentMethod"
            value="Paytm"
            checked={paymentMethod === "Paytm"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="paytm">
            <img src="/images/paytm.png" alt="Paytm" /> Paytm
          </label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Credit Card"
            checked={paymentMethod === "Credit Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="creditCard">
             Credit Card
          </label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="other"
            name="paymentMethod"
            value="Other"
            checked={paymentMethod === "Other"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="other">
             Other
          </label>
        </div>
      </div>

      <button
        className="pay-now-button"
        onClick={handlePayment}
        disabled={!paymentMethod}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
