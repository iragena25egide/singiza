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
};

const ShopValentine = () => {
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
    { name: '', price: '163,200 RF RWF', image: './image/hoodies/chock-hoodie.png', colors: ['chocolate'] },
    { name: '', price: '174,300 RF RWF', image: './image/hoodies/gray-hoodie.png', colors: ['gray'] },
    { name: '', price: '144,700 RF RWF', image: './image/hoodies/green-hoodie.png', colors: ['green'] },
    { name: '', price: '133,500 RF RWF', image: './image/hoodies/kaki-hoodie.png', colors: ['kaki'] },
    { name: '', price: '200,000 RF RWF', image: './image/hoodies/orange-hoodies.png', colors: ['orange'] },
    { name: '', price: '120,000 RF RWF', image: './image/hoodies/pink-hoodie.png', colors: ['pink'] },
    { name: '', price: '180,000 RF RWF', image: './image/hoodies/yellow-hoodie.png', colors: ['yellow'] },
    { name: '', price: '150,000 RF RWF', image: './image/hoodies/RoyalHoodie.png', colors: ['blue'] },
  ];

  return (
    <div className="p-20 px-20 bg-gray-50"> 
      <div className="flex flex-col items-start mb-4">
        <h1 className="font-bold" style={{ fontSize: 30, marginLeft: 30 }}>Shop <span className="text-lightblue4">Best</span> Hoodies</h1>
        <select className="mt-2 p-2 border rounded-md self-end bg-blue-200" style={{ width: 200 ,borderWidth:2,borderColor:"#50AFE4"}}>
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
          <h2 className="mb-10 font-bold" style={{ fontSize: 30 }}>FILT<span className="text-lightblue4">ERS</span></h2>
          {Object.keys(filters).map((key) => (
            <div key={key} className="mb-2 border-b pb-2" style={{borderColor:"#50AFE4"}}>
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
                      {['black', 'pink', 'orange', 'red', 'white', 'blue', 'gold', 'yellow', 'green', 'purple'].map(color => (
                        <div key={color} className="w-6 h-6 rounded-full" style={{ backgroundColor: colorMap[color] || color }} />
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
            <div key={index} className="border p-2 rounded-md flex flex-col items-center text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.price}</p>
              <div className="flex space-x-2 mt-2 justify-center">
                {product.colors.map(color => (
                  <div key={color} className="w-4 h-4 rounded-full" style={{ backgroundColor: colorMap[color] }} />
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

export default ShopValentine;
