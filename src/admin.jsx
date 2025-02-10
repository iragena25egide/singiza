import { useState } from "react";
import { 
  Bell, ChevronDown, User, LayoutDashboard, Box, ShoppingCart, CreditCard, MessageSquare, 
  Users, Briefcase, Megaphone, Shield, MapPin, ArrowLeft 
} from "lucide-react";

export default function SingizaDashboard() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [viewAllProducts, setViewAllProducts] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Order", icon: MessageSquare },
    { name: "Categories", icon: Box },
    { name: "Add Products", icon: ShoppingCart },
    { name: "All Products", icon: CreditCard },
  ];

  const products = [
    "Techno Spark 10C", "iPhone XR", "iPhone 12 Pro Max", "Galaxy A05s",
    "Samsung S22", "MacBook Pro", "HP Spectre", "Dell XPS 13"
  ];

  const categories = [
    { name: "Tablets", image: "tablet.png" },
    { name: "Televisions", image: "tv.png" },
    { name: "Computers", image: "computer.png" },
    { name: "Mobile Phones", image: "phone.png" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-6">Sing<span className="text-lightblue4">iza</span></h1>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-3 p-3 w-full text-left rounded-lg 
                ${selectedMenu === item.name ? "bg-lightblue4 text-white" : "text-gray-700 hover:bg-gray-200"}`}
              onClick={() => {
                setSelectedMenu(item.name);
                setViewAllProducts(false);
              }}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg text-lightblue7">Hello Admin, welcome back!</p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-lightblue3 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-lightblue3 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-lightblue3 rounded-full flex items-center justify-center">
            <ChevronDown className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {viewAllProducts ? (
          <div>
            <div className="flex items-center mb-4">
              <ArrowLeft className="w-6 h-6 cursor-pointer text-lightblue4 mr-2" onClick={() => setViewAllProducts(false)} />
              <h2 className="text-xl font-bold">All Products</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {products.map((product, index) => (
                <div key={index} className="flex items-center p-2 bg-white shadow rounded-lg">
                  <img src="placeholder.png" alt="Product" className="w-10 h-10 rounded-lg" />
                  <div className="ml-2">
                    <p className="text-xs font-semibold">{product}</p>
                    <p className="text-xs text-gray-500">S/N: 123456789</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : selectedMenu === "Dashboard" ? (
          <div>
            {/* Singiza Cards & Recent Categories */}
            <div className="flex gap-6">
              <div className="w-2/3">
                <h2 className="text-xl font-bold mb-4">Singiza</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-12 bg-blue-500 text-white rounded-lg text-sm">Registered Items Today: 0</div>
                  <div className="p-12 bg-orange-500 text-white rounded-lg text-sm">Total Amount Registered Today: 0</div>
                  <div className="p-12 bg-green-500 text-white rounded-lg text-sm">Transferred Products Today: 0</div>
                  <div className="p-12 bg-green-600 text-white rounded-lg text-sm">Total Amount Transferred Today: 0</div>
                </div>
                {/* Recent Products */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">Recent Products</h3>
                    <button className="text-blue-600 text-sm" onClick={() => setViewAllProducts(true)}>View All</button>
                  </div>
                  <div className="flex gap-2">
                    {products.slice(0, 2).map((product, index) => (
                      <div key={index} className="flex items-center p-10 bg-white shadow rounded-lg" style={{width:320}}>
                        <img src="placeholder.png" alt="Product" className="w-10 h-10 rounded-lg" />
                        <div className="ml-2">
                          <p className="text-xs font-semibold">{product}</p>
                          <p className="text-xs text-gray-500">S/N: 123456789</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <h3 className="text-lg font-bold mb-4">Recent Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category, index) => (
                    <div key={index} className="p-5 bg-blue-300 text-white rounded-lg text-sm flex flex-col items-center">
                      <img src={category.image} alt={category.name} className="w-12 h-12 object-contain mb-1" />
                      {category.name} (4)
                    </div>
                  ))}
                  <img src="/myImage.png" alt="Public Image" width="200" height="150" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">No Content</div>
        )}
      </div>
    </div>
  );
}
