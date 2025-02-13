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
    { name: 'Black sock', price: '160,000 RF RWF', image: './image/socks/black-sock.png', colors: ['black'] },
    { name: 'Royal socks', price: '150,000 RF RWF', image: './image/socks/blue-sock.png', colors: ['blue'] },
    { name: 'Chocolate socks', price: '163,200 RF RWF', image: './image/socks/chocolate-sock.png', colors: ['chocolate'] },
    { name: 'Gray socks', price: '174,300 RF RWF', image: './image/socks/gray-sock.png', colors: ['gray'] },
    { name: 'Green socks', price: '144,700 RF RWF', image: './image/socks/green-sock.png', colors: ['green'] },
    { name: 'Red socks', price: '170,000 RF RWF', image: './image/socks/red-sock.png', colors: ['red'] },
    { name: 'White socks', price: '155,000 RF RWF', image: './image/socks/white-sock.png', colors: ['white'] },
    { name: 'Yellow socks', price: '180,000 RF RWF', image: './image/socks/yellow-sock.png', colors: ['yellow'] },
    { name: 'Blue Shirts', price: '150,000 RF RWF', image: './image/shirts/blue-tee.png', colors: ['blue'] },
    { name: 'Chocolate Shirts', price: '163,200 RF RWF', image: './image/shirts/chocolate-tee.png', colors: ['chocolate'] },
    { name: 'Gray Shirts', price: '174,300 RF RWF', image: './image/shirts/gray-tee.png', colors: ['gray'] },
    { name: 'Pink Shirts', price: '174,300 RF RWF', image: './image/shirts/pink-tee.png', colors: ['pink'] },
    { name: 'Orange Shirts', price: '174,300 RF RWF', image: './image/shirts/orange-tee.png', colors: ['orange'] },
    { name: 'Purple Shirts', price: '170,000 RF RWF', image: './image/shirts/purple-tee.png', colors: ['purple'] },
    { name: 'Red Shirts', price: '180,000 RF RWF', image: './image/shirts/red-shirt.png', colors: ['red'] },
    { name: 'Teal Shirts', price: '160,000 RF RWF', image: './image/shirts/teal-shirt.png', colors: ['teal'] },
    { name: '', price: '163,200 RF RWF', image: './image/hoodies/chock-hoodie.png', colors: ['chocolate'] },
    { name: '', price: '174,300 RF RWF', image: './image/hoodies/gray-hoodie.png', colors: ['gray'] },
    { name: '', price: '144,700 RF RWF', image: './image/hoodies/green-hoodie.png', colors: ['green'] },
    { name: '', price: '133,500 RF RWF', image: './image/hoodies/kaki-hoodie.png', colors: ['kaki'] },
    { name: '', price: '200,000 RF RWF', image: './image/hoodies/orange-hoodies.png', colors: ['orange'] },
    { name: '', price: '120,000 RF RWF', image: './image/hoodies/pink-hoodie.png', colors: ['pink'] },
    { name: '', price: '180,000 RF RWF', image: './image/hoodies/yellow-hoodie.png', colors: ['yellow'] },
    { name: '', price: '150,000 RF RWF', image: './image/hoodies/RoyalHoodie.png', colors: ['blue'] },
  ];

  const categories = [
    { name: "Hoodies", image: "../image/hoodies/pink-hoodie.png" },
    { name: "T-Shirts", image: "../image/shirts/chocolate-tee.png" },
    { name: "Socks", image: "../image/socks/red-sock.png" },
    { name: "Wall-mounted Tables", image: "../image/table/8.png" }
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-6">Sing<span className="text-gray-400">iza</span></h1>
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
      <div className="flex-1 p-4 md:p-6">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-lg text-gray-400 text-center md:text-left">Hello Admin, welcome back!</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <ChevronDown className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {viewAllProducts ? (
          <div>
            <div className="flex items-center mb-4">
              <ArrowLeft className="w-6 h-6 cursor-pointer text-black mr-2" onClick={() => setViewAllProducts(false)} />
              <h2 className="text-xl font-bold">All Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product, index) => (
                <div key={index} className="flex items-center p-2 bg-white shadow rounded-lg">
                  <img src={product.image} alt="Product" className="w-10 h-10 rounded-lg" />
                  <div className="ml-2">
                    <p className="text-xs font-semibold">{product.name}</p>
                    <p className="text-xs text-gray-500">S/N: 123456789</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : selectedMenu === "Dashboard" ? (
          <div>
            {/* Singiza Cards & Recent Categories */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-bold mb-4">Singiza</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-6 sm:p-12 bg-blue-500 text-white rounded-lg text-sm">Registered Items Today: 0</div>
                  <div className="p-6 sm:p-12 bg-orange-500 text-white rounded-lg text-sm">Total Amount Registered Today: 0</div>
                  <div className="p-6 sm:p-12 bg-green-500 text-white rounded-lg text-sm">Transferred Products Today: 0</div>
                  <div className="p-6 sm:p-12 bg-green-600 text-white rounded-lg text-sm">Total Amount Transferred Today: 0</div>
                </div>
                {/* Recent Products */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">Recent Products</h3>
                    <button className="text-blue-600 text-sm" onClick={() => setViewAllProducts(true)}>View All</button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {products.slice(0, 2).map((product, index) => (
                      <div key={index} className="flex items-center p-6 sm:p-10 bg-white shadow rounded-lg w-full sm:w-80">
                        <img src={product.image} alt="Product" className="w-10 h-10 rounded-lg" />
                        <div className="ml-2">
                          <p className="text-xs font-semibold">{product.name}</p>
                          <p className="text-xs text-gray-500">S/N: 123456789</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-bold mb-4">Recent Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category, index) => (
                    <div key={index} className="p-5 bg-blue-300 text-white rounded-lg text-sm flex flex-col items-center">
                      <img src={category.image} alt={category.name} className="w-12 h-12 object-contain mb-1" />
                      {category.name} (8)
                    </div>
                  ))}
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
