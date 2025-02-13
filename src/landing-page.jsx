import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SingizaShop = () => {
  const [activeContent, setActiveContent] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleMenuClick = (content) => {
    setActiveContent(content);
    setMenuOpen(false);
  
    if (content === "shop") {
      navigate("/shop"); // Redirect to the /shop page
    }
  };
  

  const handleLogin = () => {
    if (username === "Dalton" && password === "11111") {
      setIsLoggedIn(true);
      navigate("/admin-page"); // Redirect to dashboard
    } else {
      alert("Invalid username or password. Try again.");
    }
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-no-repeat flex flex-col overflow-hidden"
      style={{ backgroundImage: "url('../image/l4.jpg')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      <div className="relative z-20 flex flex-col h-full w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="flex justify-between items-center py-4 text-white">
          {!menuOpen ? (
            <div className="cursor-pointer z-30" onClick={() => setMenuOpen(true)}>
              <FaBars size={24} />
            </div>
          ) : (
            <div className="w-6"></div>
          )}

          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-center w-full">
            SINGIZA SHOP
          </h1>

          <p className="cursor-pointer font-bold" onClick={() => setActiveContent("login")}>
            Login
          </p>
        </header>

         {/* Left Side Menu */}
{menuOpen && (
  <div className="fixed top-0 left-0 w-80 h-full bg-gray-700 bg-opacity-90 backdrop-blur-md p-6 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">SINGIZA<span className="text-white"> SHOP</span></h2>
      <button onClick={() => setMenuOpen(false)} className="p-2 bg-gray-600 rounded-full">

        <FaTimes size={20} />
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

        {/* Content Area */}
        <main className="flex-1 flex items-center justify-center text-white text-left max-w-5xl mx-auto overflow-y-auto">
  {activeContent === "home" && <p className="text-lg md:text-xl">Welcome to Singiza Shop</p>}
  {activeContent === "shop" && <p>Shop Content Displayed Here</p>}
  {activeContent === "location" && <p>Location Content Displayed Here</p>}
  {activeContent === "content" && <p>Content Displayed Here</p>}
  {activeContent === "contact" && (
    <div className="p-6 w-full max-w-md bg-transparent">
      <h2 className="text-lg font-bold text-center mb-4">Contact Us</h2>
      <label className="block mb-1 font-bold">Name</label>
      <input type="text" placeholder="Enter your name" className="w-full max-w-[350px] p-3 bg-white text-gray-700 border rounded mb-2" />
      <label className="block mb-1 font-bold">Email</label>
      <input type="email" placeholder="Enter your email" className="w-full max-w-[350px] p-3 bg-white text-gray-700 border rounded mb-2" />
      <label className="block mb-1 font-bold">Message</label>
      <textarea placeholder="Enter your message" className="w-full p-3 bg-white text-gray-700 border rounded mb-2"></textarea>
      <button className="w-full bg-gray-600 text-white focus:none mt-4 p-3 rounded hover:bg-gray-800 hover:text-white font-bold">Send</button>
    </div>
  )}
  {activeContent === "login" && (
    <div className="p-4 w-full max-w-md bg-transparent">
      <h2 className="text-lg font-bold text-center mb-4">Login</h2>
      <label className="block mb-1 font-bold">Username</label>
      <input
        type="text"
        placeholder="Enter username"
        className="w-full max-w-[350px] p-3 bg-white text-gray-700 border rounded mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="block mb-1 font-bold">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        className="w-full max-w-[350px] p-3 bg-white text-gray-700 border rounded mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-gray-600 text-white focus:none mt-4 p-3 rounded 
      hover:bg-gray-800 hover:text-white font-bold" onClick={handleLogin}>
        Login
      </button>
    </div>
  )}
  {activeContent === "admin-page" && (
    <div className="p-6 w-full max-w-3xl bg-white text-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Welcome, Admin</h2>
      <p className="text-center">You have successfully logged in as an administrator.</p>
    </div>
  )}
</main>


        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center px-4 py-2 text-white font-bold text-sm w-full bg-opacity-50">
          <div className="flex space-x-2">
            <MdPrivacyTip /> <span>Terms</span>
            <span>Privacy</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegCopyright /> <span>Singiza</span>
          </div>
          <div className="flex space-x-2 items-center">
            <RiPhoneFill className="cursor-pointer" onClick={() => handleMenuClick("contact")} />
            <span className="cursor-pointer" onClick={() => handleMenuClick("contact")}>
              Contact
            </span>
            <img src="../image/rda.png" alt="Globe" className="w-9 h-5" />
            <span>RW</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SingizaShop;
