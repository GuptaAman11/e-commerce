import HomepageCards from "./components/Home/HomePageCards";
import Navbar from "./components/Home/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/Signup";
import ProductAddingForm from "./components/ProductAddingForm/ProductAddingForm";
import Cart from "./components/AddToCart/Cart";
import GetCart from "./components/AddToCart/GetCart";
import BuyNowPage from "./components/BuyNow/BuyNowPage";
import ImageSlider from "./components/Home/ImageSlider";
import ProductView from "./components/ProductView/ProductView";
import AddressChange from "./components/Payment/AddressChange";
function App() {
  return (
    <div>
      <Router>
        <div>
        <Navbar  />

        </div>
     
        <Routes>
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomepageCards />} />
          <Route path="/product" element={<ProductAddingForm />} />
          <Route path="/HomepageCards" element={<HomepageCards />} />
          <Route path="/AddProduct" element={<ProductAddingForm />} />
          {/* <Route path="/cart/:productId" element={<Cart />} /> */}
          {/* <Route path="/add" element={<AddressChange />} /> */}

          <Route path="/productview/:productId" element={<ProductView />} />

          <Route path="/getcart" element={<GetCart />} />
          <Route path="productview/:productID/buynow/:productId" element={<AddressChange />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
