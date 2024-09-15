import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import './styles/carList.css';

function CarList({ setSelectedCar }) {
  const navigate = useNavigate();
  const [activeCarId, setActiveCarId] = useState(null); // Track active car for moving images

  const selectCar = (car) => {
    setSelectedCar(car);
    navigate("/customer-details");
  };

  const cars = [
    {
      carId: 'C001',
      brand: 'Toyota',
      model: 'Camry',
      pricePerDay: 60,
      isAvailable: true,
      images: ['/images/tayota.jpeg', '/images/tayota.jpeg', '/images/tayota.jpeg'],
      address: '123 Toyota Street, Los Angeles, CA',
    },
    {
      carId: 'C002',
      brand: 'Honda',
      model: 'Accord',
      pricePerDay: 70,
      isAvailable: true,
      images: ['/images/honda.jpeg', '/images/honda.jpeg', '/images/honda.jpeg'],
      address: '456 Honda Drive, San Francisco, CA',
    },
    {
      carId: 'C003',
      brand: 'Mahindra',
      model: 'Thar',
      pricePerDay: 150,
      isAvailable: true,
      images: ['/images/thar.jpeg', '/images/thar.jpeg', '/images/thar.jpeg'],
      address: '789 Mahindra Road, Miami, FL',
    },
    {
      carId: 'C004',
      brand: 'Ford',
      model: 'Mustang',
      pricePerDay: 120,
      isAvailable: true,
      images: ['/images/ford.jpeg', '/images/ford.jpeg', '/images/ford.jpeg'],
      address: '123 Mustang Lane, Detroit, MI',
    },
    {
      carId: 'C005',
      brand: 'Hyundai',
      model: 'Elantra',
      pricePerDay: 65,
      isAvailable: true,
      images: ['/images/hyundai.jpeg', '/images/hyundai.jpeg', '/images/hyundai.jpeg'],
      address: '456 Hyundai Avenue, New York, NY',
    },
    {
      carId: 'C006',
      brand: 'BMW',
      model: 'X5',
      pricePerDay: 200,
      isAvailable: true,
      images: ['/images/bmw.jpeg', '/images/bmw.jpeg', '/images/bmw.jpeg'],
      address: '789 BMW Boulevard, Chicago, IL',
    },
    {
      carId: 'C007',
      brand: 'Audi',
      model: 'A4',
      pricePerDay: 180,
      isAvailable: true,
      images: ['/images/audi.jpeg', '/images/audi.jpeg', '/images/audi.jpeg'],
      address: '123 Audi Way, Boston, MA',
    },
    {
      carId: 'C008',
      brand: 'Mercedes',
      model: 'C-Class',
      pricePerDay: 220,
      isAvailable: true,
      images: ['/images/mercedes.jpeg', '/images/mercedes.jpeg', '/images/mercedes.jpeg'],
      address: '456 Mercedes Drive, Washington, DC',
    },
    {
      carId: 'C009',
      brand: 'Tesla',
      model: 'Model 3',
      pricePerDay: 250,
      isAvailable: true,
      images: ['/images/tesla.jpeg', '/images/tesla.jpeg', '/images/tesla.jpeg'],
      address: '789 Tesla Street, Palo Alto, CA',
    },
    {
      carId: 'C010',
      brand: 'BMW',
      model: 'X5',
      pricePerDay: 180,
      isAvailable: true,
      images: ['/images/car images/bmw-x5-1.jpg', '/images/car images/bmw-x5-2.jpg', '/images/car images/bmw-x5-3.jpg','/images/car images/bmw-x5-4.jpg'],
      address: '123 Bavarian Road, Munich, Germany',
    },
    {
      carId: 'C011',
      brand: 'Audi',
      model: 'A6',
      pricePerDay: 200,
      isAvailable: false,
      images: ['/images/car images/audi-a6-1.jpeg', '/images/car images/audi-a6-2.jpeg', '/images/car images/audi-a6-3.jpg'],
      address: '456 Ingolstadt Lane, Ingolstadt, Germany',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    arrows: true,
  };

  return (
    <div className="car-list-container">
      <h2>Select a Car</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div
            key={car.carId}
            className="car-card"
            onClick={() => selectCar(car)}
            onMouseEnter={() => setActiveCarId(car.carId)}
            onMouseLeave={() => setActiveCarId(null)}
          >
            <div className="car-slider-container">
              {activeCarId === car.carId ? (
                <Slider {...sliderSettings}>
                  {car.images.map((image, index) => (
                    <div key={index} className="slider-image">
                      <img src={image} alt={`${car.model} ${index}`} className="car-image" />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img src={car.images[0]} alt={`${car.model}`} className="car-image-static" />
              )}
            </div>
            <div className="car-content">
              <h3 className="car-title">{car.brand} {car.model}</h3>
              <p className="car-price">Price Per Day: ${car.pricePerDay}</p>
              <p className="car-status">Address: {car.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
