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
          className="bg-lightblue3 p-2 rounded-full flex items-center justify-center w-10 h-10"
          onClick={() => { setIsMenuOpen(true); setIsCartOpen(false); }}
        >
          <IoMenu size={20} className="text-white" />
        </button>
        <h1 className="text-lg md:text-xl font-bold">SING<span className="text-lightblue4">IZA</span></h1>
      </div>
      <div className="flex gap-3 md:gap-4">
        <button className="bg-lightblue3 p-2 rounded-full flex items-center justify-center w-10 h-10">
          <CiSearch size={20} className="text-white" />
        </button>
        <button
          className="bg-lightblue3 p-2 rounded-full flex items-center justify-center w-10 h-10"
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
            <h2 className="text-lg text-lightblue4 font-bold">BAG</h2>
            <button onClick={closeMenus} className="p-2 bg-lightblue3 rounded-full">
              <IoClose size={20}/>
            </button>
          </div>
          <h3 className="text-xl text-center mt-10">YOUR CART<span className="text-lightblue4 text-xl"> IS EMPTY</span> </h3>
          <button 
            className="w-full py-2 mt-4 bg-gray-500 text-white hover:text-lightblue4 font-semibold rounded-lg"
            onClick={() => navigate("/all-product")}
          >
            Shop all drops
          </button>
          <div className="mt-6 p-4 bg-gray-600 rounded-md">
            <p style={{fontSize:11}}>YOU'RE RF 200 RWF AWAY FROM FREE SHIPPING</p>
            <hr className="my-2 border-gray-400"style={{borderWidth:1}}/>
            <div className="flex justify-between">
              <span className="text-lightblue4">Subtotal:</span>
              <span>RF 0 RWF</span>
            </div>
          </div>
          <button className="w-full py-3 mt-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-500 hover:text-lightblue4">Checkout</button>
          <p className="text-center mt-2 hover:underline cursor-pointer text-lightblue4">View Bag</p>
        </div>
      )}

      {/* Left Side Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-80 h-full bg-gray-700 bg-opacity-90 backdrop-blur-md p-6 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">SINGIZA<span className="text-lightblue4"> SHOP</span></h2>
            <button onClick={closeMenus} className="p-2 bg-lightblue3 rounded-full">
              <IoClose size={20} />
            </button>
          </div>
          <button className="w-full py-2 mt-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-500 hover:text-lightblue4">Shop Now</button>
          <ul className="mt-6 space-y-4">
  <li className="border-b border-lightblue4 pb-2">New</li>
  <li className="border-b border-lightblue4 pb-2">Essential Outerwear</li>
  <li className="border-b border-lightblue4 pb-2">Best Sellers</li>
  <li className="border-b border-lightblue4 pb-2">
    <button onClick={() => setExpandedCategories(!expandedCategories)} className="flex justify-between w-full">
      Categories {expandedCategories ? "-" : "+"}
    </button>
    {expandedCategories && (
      <ul className="pl-4 mt-2 space-y-2">
        <li>SINGIZA Wall-mounted tables</li>
        <li>SINGIZA TEES</li>
        <li>SINGIZA HOODIES</li>
        <li>SINGIZA SOCKS</li>
      </ul>
    )}
  </li>
  <li className="border-b border-lightblue4 pb-2">Shop All</li>
</ul>

<div className="mt-6 space-y-2">
  <a href="#" className="block border-b border-lightblue4 pb-2">About</a>
  <a href="#" className="block border-b border-lightblue4 pb-2">FAQ's</a>
  <a href="#" className="block border-b border-lightblue4 pb-2">Accounts</a>
</div>

        </div>
      )}
    </nav>
  );
};

export default Header;
