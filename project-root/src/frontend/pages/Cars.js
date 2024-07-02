import React, { useState, useEffect } from 'react';
import { getFilteredCars } from '../../services/carService';
import CarCard from '../components/CarCard';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('all');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    loadCars();
    loadFilterOptions();
  }, []);

  const loadCars = async () => {
    try {
      const data = await getFilteredCars(selectedOption, priceFilter);
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars: ', error);
    }
  };

  const loadFilterOptions = () => {
    const options = ['all', 'debadge', 'test2'];
    setFilterOptions(options);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSearch = () => {
    loadCars();
  };

  return (
    <div>
      <select onChange={(e) => handleOptionChange(e.target.value)}>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input type="number" value={priceFilter} onChange={handlePriceFilterChange} />
      <button onClick={handleSearch}>Search</button>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;