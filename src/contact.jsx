import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

const Contact = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 text-black p-6 flex flex-col md:flex-row justify-between items-start md:items-center px-20">
      <div className="md:w-1/2 text-left" style={{maxWidth:450}}>
        <h3 className="font-bold " style={{ fontSize: 50 }}>SING<span className="text-lightblue4">IZA</span></h3>
        <h1 className="max-w-sm text-2xl font-semibold">EDITED COLLECTION <span className="text-lightblue5">BY KYLIE</span> JENNER <span className="text-lightblue5">AND SPECIAL </span>GUEST COLLABORATORS</h1>
        <h2 className="font-bold text-lg mt-10 ">NEVER <span className="text-lightblue5">MISS AN</span> UPDATE</h2>
        <p className="mt-2 text-gray-700">Enter your email to receive launch announcements, updates + Early Access.</p>
        <input type="email" placeholder="Email" className="mt-4 p-2 w-full border border-gray-300 bg-gray-300"  style={{borderRadius:10}} />
        <p className="mt-2 text-sm text-gray-400" style={{fontSize:12}}>BY SIGNING UP YOU AGREE TO RECEIVE RECURRING AUTOMATED MARKETING MESSAGES FROM SINGIZA. VIEW <a href="#" className="underline">TERMS</a> & <a href="#" className="underline">PRIVACY</a></p>
        <button className="mt-4 p-2 bg-lightblue3 text-black w-full hover:text-white"style={{borderRadius:10}}>Submit</button>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col items-end ml-auto"> {/* Align to the right */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start text-left text-lightblue4"> {/* Adjusted layout */}
        {[
          { title: "Shop All", links: ["Shop All Products", "Best Sellers", "Digital Gift Card"] },
          { title: "Account", links: ["Login"] },
          { title: "Help", links: ["FAQs", "Returns", "Contact"] }
        ].map((section, index) => (
          <div key={index} className="w-full md:w-1/3 flex flex-col items-center mb-2"> {/* 3-column layout on desktop */}
            <div
              className="flex justify-between items-center cursor-pointer p-2 border-b md:border-none w-full"
              style={{paddingLeft:"10" }} // Remove extra space between text and icon
              onClick={() => toggleSection(index)}
            >
              <p className="font-semibold text-base">{section.title}</p>
              {openSection === index ? <FiMinus /> : <FiPlus />}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${openSection === index ? "max-h-40" : "max-h-0"}`}
              style={{ paddingLeft: "8px", paddingTop: "4px" }}
            >
              <ul>
                {section.links.map((link, i) => (
                  <li key={i} className="py-1">
                    <a href="#" className="no-underline hover:no-underline text-black">{link}</a> {/* Removed underline */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Social Media Icons centered under 'Account' on desktop */}
      <div className="flex space-x-3 mt-4 justify-center md:w-1/3 md:mx-auto"> {/* Icons centered below middle section */}
        <FaTwitter className="text-lightblue4 hover:text-lightblue2 cursor-pointer text-lg" />
        <FaFacebook className="text-lightblue4 hover:text-lightblue2 cursor-pointer text-lg" />
        <FaInstagram className="text-lightblue4 hover:text-lightblue2 cursor-pointer text-lg" />
        <FaLinkedin className="text-lightblue4 hover:text-lightblue2 cursor-pointer text-lg" />
        <FaPinterest className="text-lightblue4 hover:text-lightblue2 cursor-pointer text-lg" />
        <FaYoutube className="text-lightblue4 hover:text-lightblue2 cursor-pointer text-lg" />
        <FaTiktok className="text-lightblue4 hover:text-lightblue2 cursor-pointer text-lg" />
      </div>
    </div>
    </div>
  );
};

export default Contact;
