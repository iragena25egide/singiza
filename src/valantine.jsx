import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Best Hoodies and pillovers",
    price: "348,000 RF RWF",
    colors: {
      pink: "../image/hoodies/pink-hoodie.png",
      yellow: "../image/hoodies/yellow-hoodie.png",
      maroon: "../image/hoodies/chock-hoodie.png",
      chocolate: "../image/hoodies/kaki-hoodie.png",
      green: "../image/hoodies/green-hoodie.png",
      darkorange: "../image/hoodies/orange-hoodies.png",
      gray: "../image/hoodies/gray-hoodie.png",


    },
  },
  {
    id: 2,
    name: "Best Hoodies and pillovers ",
    price: "255,400 RF RWF",
    colors: {
      pink: "../image/hoodies/pink-hoodie.png",
      yellow: "../image/hoodies/yellow-hoodie.png",
      maroon: "../image/hoodies/chock-hoodie.png",
      chocolate: "../image/hoodies/kaki-hoodie.png",
      green: "../image/hoodies/green-hoodie.png",
      darkorange: "../image/hoodies/orange-hoodies.png",
      gray: "../image/hoodies/gray-hoodie.png",

    },
  },
];

const Valentine = () => {
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
          onClick={() => navigate("/shop-valentine")}
          className="px-6 py-2 bg-gray-600 font-medium text-white rounded-md hover:bg-gray-800 hover:text-white transition"
        >
          Shop Hoodies
        </button>
      </div>
    </div>
  );
};

export default Valentine;
