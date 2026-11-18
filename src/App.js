import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkSlider from "./components/WorkSlider";
import Pricing from "./components/Pricing";
import PricingPage from "./components/PricingPage";
import WhyChooseUs from "./components/WhyChooseUs";
import Results from "./components/Results";
import VisualBreak from "./components/VisualBreak";
import AboutUs from "./components/AboutUs"; 
import Footer from "./components/Footer";
import Contact from "./components/Contact"; 
import Terms from "./components/Terms";

// Jumps to the top whenever the page changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// The Home page
function Home() {
  return (
    <>
      <Hero />
      {/* If you want the WorkSlider to also show on the home page below the hero, keep it here.
          If you ONLY want it on the /services page, delete <WorkSlider /> from here. */}
      <WorkSlider /> 
      <Pricing />
      <WhyChooseUs />
      <Results />
      <VisualBreak />
    </>
  );
}

// 👈 1. Create a specific Services page that renders the WorkSlider
function Services() {
  return (
    <div style={{ paddingTop: "100px" }}> 
      {/* Adding paddingTop ensures the sticky navbar doesn't cover the slider */}
      <WorkSlider />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutUs />} />
        
        {/* 👈 2. Point the /work route to the new Services component */}
        <Route path="/work" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;