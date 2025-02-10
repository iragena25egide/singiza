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
    <div className="p-20 px-20 bg-gray-50"> 
      <div className="flex flex-col items-start mb-4">
        <h1 className="font-bold text-3xl ml-8">Shop <span className="text-lightblue4">Best</span> T-Shirt</h1>
        <select className="mt-2 p-2 border rounded-md self-end bg-blue-200" style={{ width: 200, borderColor: "#50AFE4" }}>
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
      
      <div className="flex gap-10"> 
        <div className="w-1/4 pr-4 max-h-[400px] overflow-y-auto"> 
          <h2 className="mb-10 font-bold text-3xl">FILT<span className="text-lightblue4">ERS</span></h2>
          {Object.keys(filters).map((key) => (
            <div key={key} className="mb-2 border-b pb-2">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter(key)}>
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                {filters[key] ? <FaMinus className="text-lightblue3"/> : <FaPlus className="text-lightblue3"/>}
              </div>
              {filters[key] && (
                <div className="mt-2 flex flex-col"> 
                  {key === 'availability' && (
                    <label className="flex items-center gap-2"><input type="checkbox" /> In Stock</label>
                  )}
                  {key === 'sizeGrouping' && ['XXS-XS', 'S-M', 'M-L', 'L-XL', '2X-4X'].map(size => (
                    <label key={size} className="flex items-center gap-2">
                      <input type="checkbox" /> {size}
                    </label>
                  ))}
                  {key === 'productType' && ['Bottoms', 'Dresses', 'Hoodies', 'One Pieces', 'Tops'].map(type => (
                    <label key={type} className="flex items-center gap-2">
                      <input type="checkbox" /> {type}
                    </label>
                  ))}
                  {key === 'style' && ['Bodysuit', 'Hoodie', 'Longsleeve', 'Maxi Dress'].map(style => (
                    <label key={style} className="flex items-center gap-2">
                      <input type="checkbox" /> {style}
                    </label>
                  ))}
                  {key === 'color' && (
                    <div className="flex space-x-2 mt-2">
                      {Object.keys(colorMap).map(color => (
                        <div key={color} style={{ backgroundColor: colorMap[color], width: '16px', height: '16px', borderRadius: '50%' }} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-auto">
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
      <hr className="mt-10 border-gray-300" />
    </div>
  );
};

export default ShopnowProduct;
