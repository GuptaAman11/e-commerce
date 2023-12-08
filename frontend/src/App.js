import HomepageCards from "./components/Home/HomePageCards";
import Navbar from "./components/Home/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/Signup";
import ProductAddingForm from "./components/ProductAddingForm/ProductAddingForm";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
          <Route path="/" element={<HomepageCards />} />
          <Route path="/product" element={<ProductAddingForm />} />
=======
          <Route path="/HomepageCards" element={<HomepageCards />} />
          <Route path="/AddProduct" element={<ProductAddingForm />} />
>>>>>>> d504f3e01883d78968d550ae81c87a5693ac9825
        </Routes>
      </Router>
    </div>
  );
}

export default App;
