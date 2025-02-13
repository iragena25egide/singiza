import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const colorMap = {
  chocolate: '#7B3F00',
  gray: '#808080',
  orange: '#FFA500',
  pink: '#FFC0CB',
  blue: '#0000FF',
  red: '#FF0000',
  purple:'#800080',
  teal:'#008080',
};

const ShopnowProduct = () => {
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
    { name: 'Blue Shirts', price: '150,000 RF RWF', image: './image/shirts/blue-tee.png', colors: ['blue'] },
    { name: 'Chocolate Shirts', price: '163,200 RF RWF', image: './image/shirts/chocolate-tee.png', colors: ['chocolate'] },
    { name: 'Gray Shirts', price: '174,300 RF RWF', image: './image/shirts/gray-tee.png', colors: ['gray'] },
    { name: 'Pink Shirts', price: '174,300 RF RWF', image: './image/shirts/pink-tee.png', colors: ['pink'] },
    { name: 'Orange Shirts', price: '174,300 RF RWF', image: './image/shirts/orange-tee.png', colors: ['orange'] },
    { name: 'Purple Shirts', price: '170,000 RF RWF', image: './image/shirts/purple-tee.png', colors: ['purple'] },
    { name: 'Red Shirts', price: '180,000 RF RWF', image: './image/shirts/red-shirt.png', colors: ['red'] },
    { name: 'Teal Shirts', price: '160,000 RF RWF', image: './image/shirts/teal-shirt.png', colors: ['teal'] },
  ];

  return (
    <div className="p-20 sm:p-20 bg-gray-50"> 
      <div className="flex flex-col sm:flex-row sm:items-start mb-4 sm:justify-between">
        <h1 className="font-bold text-2xl sm:text-3xl">Shop <span className="text-black">Best</span> T-Shirt</h1>
        <select className="mt-2 sm:mt-0 p-2 border rounded-md w-full sm:w-52 border-gray-300" >
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
      <div className="w-full md:w-1/4 pr-2 md:pr-4 max-h-[400px] overflow-y-auto text-sm md:text-base"> 
          <h2 className="mb-6 md:mb-10 font-bold text-lg md:text-2xl">
            FILT<span className="text-black">ERS</span>
          </h2>
          {Object.keys(filters).map((key) => (
            <div key={key} className="mb-2 border-b pb-2 text-xs md:text-base" style={{borderColor:"#50AFE4"}}>
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter(key)}>
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                {filters[key] ? <FaMinus className="text-gray-600 text-xs md:text-base"/> : <FaPlus className="text-gray-600 text-xs md:text-base"/>}
              </div>
              {filters[key] && (
                <div className="mt-2 flex flex-col"> 
                  {key === 'availability' && (
                    <label className="flex items-center gap-1 md:gap-2 text-xs md:text-base">
                      <input type="checkbox" /> In Stock
                    </label>
                  )}
                  {key === 'sizeGrouping' && ['XXS-XS', 'S-M', 'M-L', 'L-XL', '2X-4X'].map(size => (
                    <label key={size} className="flex items-center gap-1 md:gap-2 text-xs md:text-base">
                      <input type="checkbox" /> {size}
                    </label>
                  ))}
                  {key === 'productType' && ['Bottoms', 'Dresses', 'Hoodies', 'One Pieces', 'Tops'].map(type => (
                    <label key={type} className="flex items-center gap-1 md:gap-2 text-xs md:text-base">
                      <input type="checkbox" /> {type}
                    </label>
                  ))}
                  {key === 'style' && ['Bodysuit', 'Hoodie', 'Longsleeve', 'Maxi Dress'].map(style => (
                    <label key={style} className="flex items-center gap-1 md:gap-2 text-xs md:text-base">
                      <input type="checkbox" /> {style}
                    </label>
                  ))}
                  {key === 'color' && (
                    <div className="flex space-x-1 md:space-x-2 mt-2">
                      {['black', 'pink', 'orange', 'red', 'white', 'blue', 'gold', 'yellow', 'green', 'purple'].map(color => (
                        <div key={color} className="w-4 md:w-6 h-4 md:h-6 rounded-full" style={{ backgroundColor: colorMap[color] || color }} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:px-4">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-md flex flex-col items-center text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.price}</p>
              <div className="flex space-x-2 mt-2">
                {product.colors.map(color => (
                  <div key={color} style={{ backgroundColor: colorMap[color], width: '16px', height: '16px', borderRadius: '50%' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopnowProduct;
