import React from "react";
import { useNavigate } from "react-router-dom";


const Favorite = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-end justify-start px-6 md:px-12 pb-12"
      style={{ backgroundImage: "url('../image/shirt-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-left text-white max-w-xl left-7">
        <h1 className="md:text-5xl leading-tight" style={{fontWeight:600,fontSize:40}}>
        Limitless<span className="text-gray-400">Comfort</span> 
        </h1>
        <p className="md:text-xl mt-6" style={{maxWidth:550,fontSize:15}}>
        Designed for those who move, explore, and redefine fashion. Wear the statement.
        </p>
        <button onClick={() => navigate("/shop-NOW")}
        className="mt-6 px-7 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-800 hover:text-white transition"style={{fontSize:13,fontWeight:700}}>
          Shop T-Shirt Now
        </button>
      </div>
    </div>
  );
};

export default Favorite;
