import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 text-black p-6 flex flex-col md:flex-row justify-between items-start md:items-center px-20">
      <p className="text-sm md:text-base text-gray-600 " style={{maxWidth:250}}>© 2025 K Brand, Inc All rights reserved.</p>
      <div className="flex flex-col items-end">
        <div className="flex space-x-4 text-gray-600">
          <p>Site Credits</p>
          <p>Accessibility</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <p className="mt-2 text-gray-600">Cookies Settings</p>
        <select className="mt-2 p-2 bg-lightblue4 border border-grey-600 hover:border-black focus:outline-none focus:ring focus:ring-black"style={{borderWidth:1,width:300,borderRadius:10}}>
          <option>Choose Currency</option>
          <option>Nigerian Naira (NGN)</option>
          <option>South African Rand (ZAR)</option>
          <option>Egyptian Pound (EGP)</option>
          <option>Ghanaian Cedi (GHS)</option>
          <option>Kenyan Shilling (KES)</option>
          <option>Tanzanian Shilling (TZS)</option>
          <option>Ugandan Shilling (UGX)</option>
          <option>Ethiopian Birr (ETB)</option>
          <option>Algerian Dinar (DZD)</option>
          <option>Moroccan Dirham (MAD)</option>
          <option>Tunisian Dinar (TND)</option>
          <option>Libyan Dinar (LYD)</option>
          <option>Sudanese Pound (SDG)</option>
          <option>Rwandan Franc (RWF)</option>
          <option>Burundian Franc (BIF)</option>
          <option>Congolese Franc (CDF)</option>
          <option>Malawian Kwacha (MWK)</option>
          <option>Zambian Kwacha (ZMW)</option>
          <option>Angolan Kwanza (AOA)</option>
          <option>Mozambican Metical (MZN)</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
