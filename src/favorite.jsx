import { useNavigate } from "react-router-dom";


const Favorite = () => {
  const navigate = useNavigate();

  
    return (
      <div className="relative w-full h-screen mt-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('../image/shirt-bg.jpg')" }}
        ></div>
  
        {/* Overlay to Improve Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
  
        {/* Content */}
        <div className="absolute bottom-10 left-20 text-white max-w-lg">
          <h1 className="md:text-5xl leading-tight" style={{fontWeight:600,fontSize:40}}>Limitless<span className="text-lightblue4"> Comfort</span></h1>
          <p className="md:text-xl mt-6" style={{maxWidth:550,fontSize:15}}>
          Designed for those who move, explore, and redefine fashion. Wear the statement.
          </p>
          <button 
          onClick={() => navigate("/shop-now")}
          className="mt-6 px-7 py-3 bg-lightblue3 text-white rounded-md hover:bg-lightblue3 hover:text-white transition"style={{fontSize:13,fontWeight:700}}>
            Shop T-ShirtS Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Favorite;
  