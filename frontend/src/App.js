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
      <Navbar />

      <Router>
        <Routes>
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomepageCards />} />
          <Route path="/" element={<ProductAddingForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
