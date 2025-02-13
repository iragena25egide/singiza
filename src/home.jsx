import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(false);
  const [expandedAccounts, setExpandedAccounts] = useState(false);
  const navigate = useNavigate();

  // Function to close both menus
  const closeMenus = () => {
    setIsCartOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Free Shipping Banner */}
      <div className="absolute top-0 left-0 w-full text-center text-xs font-mono tracking-widest p-2 uppercase">
        FREE DELIVERY ONLY IN RWANDA
      </div>

      {/* Navbar */}
      <nav className="absolute top-4 left-6 right-6 flex justify-between items-center">
        <div className="flex mt-10 gap-x-6">
          <button className="p-4 bg-gray-600 rounded-full" onClick={() => { setIsMenuOpen(true); setIsCartOpen(false); }}>
            <IoMenu className="text-white"/>
          </button>
          <h1 className="text-3xl font-bold tracking-tight "style={{marginTop:5}}>SING<span className="text-white">IZA</span></h1>
        </div>

        <div className="flex gap-4">
          <button className="p-4 bg-gray-600 rounded-full mt-12">
            <CiSearch size={20} className="text-white"/>
          </button>
          <button className="p-4 bg-gray-600 rounded-full mt-12" onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }}>
            <FaBagShopping size={20} className="text-white"/>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex h-full pt-12">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('../image/hoodie-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-10 left-20 text-white max-w-xl">
        <h2 className="text-4xl font-bold"> Warm<span className="text-gray-400"> & Cozy</span></h2>
        <p className="mt-2 text-base" style={{maxWidth:500}}>
        Wrap yourself in comfort, style, and confidence. Because every outfit tells a story.
        </p>
        <div className="mt-6 flex justify-start">
          <button onClick={() => navigate("/shop-valentine")}
          className="px-10 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
            Shop Hoodies Now
          </button>
        </div>
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
    <button className="w-full py-2 mt-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-500 hover:text-white">Shop Now</button>
    
    <h3 className="text-center mt-6 text-lg font-semibold">Categories</h3>
    <ul className="mt-4 space-y-4 pl-4">
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate()}>SINGIZA Wall-mounted tables</li>
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate("/shop-now")}>SINGIZA TEES</li>
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate("/shop-valentine")}>SINGIZA HOODIES</li>
      <li className="border-b border-gray-300 cursor-pointer pb-2 hover:text-gray-400"onClick={() => navigate("/shop-essential")}>SINGIZA SOCKS</li>
    </ul>
  </div>
)}



    </div>
  );
}
