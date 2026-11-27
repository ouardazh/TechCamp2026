import "./App.css";
import Header from "./layouts/Header";
import Hero from "./pages/Home/components/Hero";
import Footer from "./layouts/Footer";
import Tracks from "./pages/Home/components/Tracks";
import Coaches from "./pages/Home/components/Coaches";
import Faq from "./pages/Home/components/Faq";
import RegistrationForm from "./pages/Registration/Registration";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="font-sans">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
