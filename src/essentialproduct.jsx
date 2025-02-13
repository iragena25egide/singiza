import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const colorMap = {
  chocolate: '#7B3F00',
  gray: '#808080',
  green: '#008000',
  kaki: '#C3B091',
  orange: '#FFA500',
  pink: '#FFC0CB',
  yellow: '#FFFF00',
  blue: '#0000FF',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000'
};

const ShopEssential = () => {
  const [filters, setFilters] = useState({
    availability: false,
    sizeGrouping: false,
    productType: false,
    style: false,
    color: false,
    drop: false
  });

  const toggleFilter = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const products = [
    { name: 'Black socks', price: '160,000 RF RWF', image: './image/socks/black-sock.png', colors: ['black'] },
    { name: 'Royal socks', price: '150,000 RF RWF', image: './image/socks/blue-sock.png', colors: ['blue'] },
    { name: 'Chocolate socks', price: '163,200 RF RWF', image: './image/socks/chocolate-sock.png', colors: ['chocolate'] },
    { name: 'Gray socks', price: '174,300 RF RWF', image: './image/socks/gray-sock.png', colors: ['gray'] },
    { name: 'Green socks', price: '144,700 RF RWF', image: './image/socks/green-sock.png', colors: ['green'] },
    { name: 'Red socks', price: '170,000 RF RWF', image: './image/socks/red-sock.png', colors: ['red'] },
    { name: 'White socks', price: '155,000 RF RWF', image: './image/socks/white-sock.png', colors: ['white'] },
    { name: 'Yellow socks', price: '180,000 RF RWF', image: './image/socks/yellow-sock.png', colors: ['yellow'] },
  ];

  return (
    <div className="p-20 px-20 bg-gray-50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4">
        <h1 className="font-bold text-3xl sm:ml-8 whitespace-nowrap">Shop <span className="text-black">Best</span> Socks</h1>
        <select className="mt-2 sm:mt-0 p-2 border rounded-md self-start sm:self-end w-full sm:w-52" style={{ borderWidth: 2, borderColor: "#cccccc" }}>
          <option>Featured</option>
          <option>Best selling</option>
          <option>Alphabetically, A-Z</option>
          <option>Alphabetically, Z-A</option>
          <option>Price, Low-High</option>
          <option>Price, High-Low</option>
          <option>Date, New-Old</option>
          <option>Date, Old-New</option>
        </select>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
        <div className="w-full sm:w-1/4 pr-2 sm:pr-4 max-h-[400px] overflow-y-auto text-sm sm:text-base"> 
          <h2 className="mb-4 sm:mb-10 font-bold text-xl sm:text-3xl">FILT<span className="text-black">ERS</span></h2>
          {Object.keys(filters).map((key) => (
            <div key={key} className="mb-2 border-b pb-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center cursor-pointer gap-1 sm:gap-2" onClick={() => toggleFilter(key)}>
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                {filters[key] ? <FaMinus className="text-gray-600 text-xs sm:text-sm"/> : <FaPlus className="text-gray-600 text-xs sm:text-sm"/>}
              </div>
            </div>
          ))}
        </div>
      
        <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-md flex flex-col items-center bg-white shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-sm sm:text-lg font-semibold text-center">{product.name}</h2>
              <p className="text-xs sm:text-sm text-gray-600 text-center">{product.price}</p>
              <div className="flex space-x-1 sm:space-x-2 mt-2">
                {product.colors.map(color => (
                  <div key={color} style={{ backgroundColor: colorMap[color] }} className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-300"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopEssential;
