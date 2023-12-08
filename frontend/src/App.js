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
          <Route path="/HomepageCards" element={<HomepageCards />} />
          <Route path="/AddProduct" element={<ProductAddingForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
