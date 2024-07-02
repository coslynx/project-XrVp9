import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    // Fetch cars data from backend API and set it to 'cars' state
    // This logic depends on backend functionality to retrieve car data
    // Update 'cars' state with fetched data
  }, []);

  useEffect(() => {
    // Filter cars based on price filter criteria and update 'filteredCars' state
    // This logic depends on backend API to filter cars based on price
    // Update 'filteredCars' state with filtered data
  }, [priceFilter]);

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handlePurchase = (carId) => {
    // Logic to handle purchase of a selected car using PayPal API
    // This logic depends on PayPal API integration
  };

  return (
    <div>
      <Navbar />
      <div>
        <input type="text" placeholder="Enter price filter" onChange={handlePriceFilterChange} value={priceFilter} />
      </div>
      <div>
        {filteredCars.map((car) => (
          <div key={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <p>Price: {car.price}</p>
            <button onClick={() => handlePurchase(car.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;