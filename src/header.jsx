import React, { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(false);
  const navigate = useNavigate();

  const closeMenus = () => {
    setIsCartOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-50 absolute top-4 left-6 right-6 flex justify-between items-center px-4 md:px-6">
      <div className="flex items-center gap-2">
        <button
          className="bg-gray-600 p-2 rounded-full flex items-center justify-center w-10 h-10"
          onClick={() => { setIsMenuOpen(true); setIsCartOpen(false); }}
        >
          <IoMenu size={20} className="text-white" />
        </button>
        <h1 className="text-lg md:text-xl font-bold">SING<span className="text-black">IZA</span></h1>
      </div>
      <div className="flex gap-3 md:gap-4">
        <button className="bg-gray-600 p-2 rounded-full flex items-center justify-center w-10 h-10">
          <CiSearch size={20} className="text-white" />
        </button>
        <button
          className="bg-gray-600 p-2 rounded-full flex items-center justify-center w-10 h-10"
          onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }}
        >
          <FaBagShopping size={20} className="text-white" />
        </button>
      </div>

      {/* Overlay */}
      {(isCartOpen || isMenuOpen) && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" 
          onClick={closeMenus}
        ></div>
      )}

            {/* Right Cart Menu */}
     {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-700 bg-opacity-90 backdrop-blur-md p-6 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg text-white font-bold">BAG</h2>
            <button onClick={closeMenus} className="p-2 bg-gray-600 rounded-full">
              <IoClose size={20}/>
            </button>
          </div>
          <h3 className="text-xl text-center mt-10">YOUR CART<span className="text-white text-xl"> IS EMPTY</span> </h3>
          <button 
            className="w-full py-2 mt-4 bg-gray-500 text-white hover:text-white font-semibold rounded-lg"
            onClick={() => navigate("/all-product")}
          >
            Shop all drops
          </button>
          <div className="mt-6 p-4 bg-gray-600 rounded-md">
            <p style={{fontSize:11}}>YOU'RE RF 200 RWF AWAY FROM FREE SHIPPING</p>
            <hr className="my-2 border-gray-400"style={{borderWidth:1}}/>
            <div className="flex justify-between">
              <span className="text-white">Subtotal:</span>
              <span>RF 0 RWF</span>
            </div>
          </div>
          <button className="w-full py-3 mt-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-500 hover:text-white"
          onClick={() => navigate("/all-product")}
          >Checkout</button>
          <p className="text-center mt-2 hover:underline cursor-pointer text-white"
          onClick={() => navigate("/all-product")}
          >View Bag</p>
        </div>
      )}

      {/* Left Side Menu */}
{isMenuOpen && (
  <div className="fixed top-0 left-0 w-80 h-full bg-gray-700 bg-opacity-90 backdrop-blur-md p-6 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">SINGIZA<span className="text-white"> SHOP</span></h2>
      <button onClick={closeMenus} className="p-2 bg-gray-600 rounded-full">
        <IoClose size={20} />
      </button>
    </div>
    <button className="w-full py-2 mt-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-500 hover:text-white"
    onClick={() => navigate("/shop")}>Shop Now</button>
    
    <h3 className="text-center mt-6 text-lg font-semibold">Categories</h3>
    <ul className="mt-4 space-y-4 pl-4">
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate("/shop")}>SINGIZA Wall-mounted tables</li>
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate("/shop-now")}>SINGIZA TEES</li>
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate("/shop-valentine")}>SINGIZA HOODIES</li>
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate("/shop-essential")}>SINGIZA SOCKS</li>
    </ul>
  </div>
)}
    </nav>
  );
};

export default Header;
