import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HanNavbar from "./components/HanNavbar";
import Home from "./page/Home";
import PastProjects from "./page/PastProjects";
import Services from "./page/Services";
import ConnectUs from "./page/ConnectUs";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <HanNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastProjects" element={<PastProjects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/connectUs" element={<ConnectUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
