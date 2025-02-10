import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SingizaDashboard from "./admin";
import AllProduct from "./allproduct";
import Contact from "./contact";
import Discover from "./discover";
import Essentials from "./essential";
import ShopEssential from "./essentialproduct";
import Favorite from "./favorite";
import Footer from "./footer";
import Gallery from "./gallery";
import Header from "./header";
import SingizaShop from "./landing-page"; // Landing page only
import ShopNow from "./shopnow";
import ShopnowProduct from "./shopnowproduct";
import Valentine from "./valantine";
import ShopValentine from "./valentineproduct";
import HeroSection from "./home"; // Hero Section for shop

function App() {
  return (
    <BrowserRouter>
      <ConditionalHeader />
      <Routes>
        {/* Landing Page (No Scroll, Single Page) */}
        <Route path="/" element={<SingizaShop />} />

        {/* Full Shop Page with HeroSection + Other Components */}
        <Route path="/shop" element={<HomePage />} />

        {/* Other Shop Routes */}
        <Route path="/shop-valentine" element={<PageWrapper><ShopValentine /></PageWrapper>} />
        <Route path="/shop-essential" element={<PageWrapper><ShopEssential /></PageWrapper>} />
        <Route path="/shop-now" element={<PageWrapper><ShopnowProduct /></PageWrapper>} />
        <Route path="/all-product" element={<PageWrapper><AllProduct /></PageWrapper>} />
        <Route path="/admin-page" element={<AdminWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

// ✅ Home Page with HeroSection + Other Components
const HomePage = () => (
  <div className="bg-gray-200 min-h-screen">
    <HeroSection />
    <Valentine />
    <Discover />
    <Essentials />
    <Favorite />
    <ShopNow />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

// ✅ Wrapper for other pages
const PageWrapper = ({ children }) => (
  <div className="bg-gray-200 min-h-screen">
    {children}
    <Contact />
    <Footer />
  </div>
);

// ✅ Admin Wrapper
const AdminWrapper = () => (
  <div className="bg-gray-200 min-h-screen">
    <SingizaDashboard />
  </div>
);

// ✅ Conditional Header
const ConditionalHeader = () => {
  const location = useLocation();
  return location.pathname !== "/" && location.pathname !== "/admin-page" && location.pathname !== "/shop" ? <Header /> : null;
};

export default App;
