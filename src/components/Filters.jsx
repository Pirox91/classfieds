import React from "react";
import { useState } from "react";
export default function Filters(){
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="space-y-2">
        <div className="flex items-center">
          <input 
            type="radio" 
            id="option1" 
            name="priceOption" 
            value="option1" 
            checked={selectedOption === 'option1'} 
            onChange={handleOptionChange} 
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <label htmlFor="option1" className="ml-2 text-gray-700">Option 1</label>
        </div>
        <div className="flex items-center">
          <input 
            type="radio" 
            id="option2" 
            name="priceOption" 
            value="option2" 
            checked={selectedOption === 'option2'} 
            onChange={handleOptionChange} 
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <label htmlFor="option2" className="ml-2 text-gray-700">Option 2</label>
        </div>
      </div>
      <div className="space-y-2">
        <div className=" flex flex-col">
          <label htmlFor="minPrice" className="mb-1 text-gray-700">Min Price:</label>
          <input 
            type="number" 
            id="minPrice" 
            value={minPrice} 
            onChange={handleMinPriceChange} 
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="maxPrice" className="mb-1 text-gray-700">Max Price:</label>
          <input 
            type="number" 
            id="maxPrice" 
            value={maxPrice} 
            onChange={handleMaxPriceChange} 
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

