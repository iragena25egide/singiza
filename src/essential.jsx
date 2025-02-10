import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Faux Leather Collared Coat",
    price: "348,000 RF RWF",
    colors: {
      green: "../image/socks/green-sock.png",
      yellow: "../image/socks/yellow-sock.png",
      gray: "../image/socks/gray-sock.png",
      chocolate: "../image/socks/chocolate-sock.png",
      white: "../image/socks/white-sock.png",
      red: "../image/socks/red-sock.png",


    },
  },
  {
    id: 2,
    name: "Faux Leather Oversized Blazer",
    price: "255,400 RF RWF",
    colors: {
      green: "../image/socks/green-sock.png",
      yellow: "../image/socks/yellow-sock.png",
      gray: "../image/socks/gray-sock.png",
      chocolate: "../image/socks/chocolate-sock.png",
      white: "../image/socks/white-sock.png",
      red: "../image/socks/red-sock.png",




    },
  },
];

const Essentials = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState(
    products.map((product) => ({ id: product.id, image: Object.values(product.colors)[0] }))
  );

  const handleColorClick = (productId, color) => {
    setSelectedImages((prevImages) =>
      prevImages.map((item) =>
        item.id === productId ? { ...item, image: products.find((p) => p.id === productId).colors[color] } : item
      )
    );
  };

  return (
    <div className="w-full px-6 md:px-12 mt-10 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div key={product.id} className="w-72">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="h-64 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={selectedImages.find((img) => img.id === product.id)?.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-3 text-base font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{product.price}</p>
              <div className="flex gap-2 mt-3">
                {Object.keys(product.colors).map((color) => (
                  <button
                    key={color}
                    className="w-5 h-5 rounded-full border cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(product.id, color)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 mb-6">
        <button
          onClick={() => navigate("/shop-essential")}
          className="px-6 py-2 bg-lightblue3 font-medium text-black rounded-md hover:bg-lightblue3 hover:text-white transition"
        >
         Shop Socks Wear
        </button>
      </div>
    </div>
  );
};

export default Essentials;
