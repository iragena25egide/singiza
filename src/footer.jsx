import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 text-black p-6 md:px-20 flex flex-col md:flex-row justify-between items-center w-full">
      {/* Footer Text */}
      <div className="w-full text-center md:text-left mb-4 md:mb-0">
        <p className="text-sm md:text-base text-gray-600 mx-auto md:mx-0 max-w-[250px]">
          © 2025 K Brand, Inc. All rights reserved.
        </p>
      </div>

      {/* Links Section */}
      <div className="w-full flex flex-col items-center md:items-end text-gray-600">
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-2">
          <p>Site Credits</p>
          <p>Accessibility</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <p className="mt-2">Cookies Settings</p>

        {/* Currency Selector - Placed at Bottom on Mobile */}
        <div className="w-full flex justify-center md:justify-end mt-4">
          <select className="p-2 bg-white border hover:border-black focus:outline-none border-2 w-full md:w-[300px] rounded-lg border-gray-300">
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
    </div>
  );
};

export default Footer;
