import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AllProduct = () => {
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
    { name: 'Smooth Stretch Strapless Mini Dress', price: '163,200 RF RWF', image: 'dress1.png', colors: ['pink', 'black'] },
    { name: 'Smooth Stretch Halter Mini Dress', price: '174,300 RF RWF', image: 'dress2.png', colors: ['pink', 'black'] },
    { name: 'Soft Stretch Halter Maxi Dress', price: '144,700 RF RWF', image: 'dress3.png', colors: ['black', 'orange', 'red', 'white'] },
    { name: 'Soft Stretch Asymmetrical Midi Dress', price: '133,500 RF RWF', image: 'dress4.png', colors: ['black', 'orange', 'red', 'white'] },
    { name: 'Elegant Evening Gown', price: '200,000 RF RWF', image: 'dress5.png', colors: ['blue', 'gold'] },
    { name: 'Casual Summer Dress', price: '120,000 RF RWF', image: 'dress6.png', colors: ['yellow', 'green'] },
    { name: 'Floral Print Maxi Dress', price: '180,000 RF RWF', image: 'dress7.png', colors: ['purple', 'white'] },
    { name: 'Chic Bodycon Dress', price: '150,000 RF RWF', image: 'dress8.png', colors: ['red', 'black'] },
  ];

  return (
    <div className="p-20 px-20 bg-gray-50"> 
      <div className="flex flex-col items-start mb-4">
        <h1 className="font-bold" style={{ fontSize: 30, marginLeft: 30 }}>All Product</h1>
        <select className="mt-2 p-2 border rounded-md self-end bg-gray-200" style={{ width: 200 }}>
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
          <h2 className="mb-10" style={{ fontSize: 30 }}>FILTERS</h2>
          {Object.keys(filters).map((key) => (
            <div key={key} className="mb-2 border-b pb-2">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter(key)}>
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                {filters[key] ? <FaMinus /> : <FaPlus />}
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
                      {['black', 'pink', 'orange', 'red', 'white', 'blue', 'gold', 'yellow', 'green', 'purple'].map(color => (
                        <div key={color} className={`w-6 h-6 rounded-full bg-${color}-500`} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="w-3/4 grid grid-cols-4 gap-4 overflow-auto">
          {products.map((product, index) => (
            <div key={index} className="border p-2 rounded-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.price}</p>
              <div className="flex space-x-2 mt-2">
                {product.colors.map(color => (
                  <div key={color} className={`w-4 h-4 rounded-full bg-${color}-500`} />
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

export default AllProduct;
