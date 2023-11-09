import React, { useState, useEffect, useRef, createContext } from "react";
// import Navbar from './components/constants/Navbar'
import HeroSection from "./components/sections/hero/HeroSection";
import Clients from "./components/constants/Clients";
import Program from "./components/sections/program/Program";
import GetStarted from "./components/sections/getStarted/GetStarted";
import Menu from "./components/sections/menu/Menu";
import Testimonial from "./components/sections/testimonial/Testimonial";
import Footer from "./components/constants/Footer";

export const AppContext = createContext();

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = componentRef.current.getBoundingClientRect();
      const offset = window.innerHeight - rect.height * 0.25;
      setIsVisible(rect.top < offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider value={{isVisible, componentRef }}>
      <HeroSection />

      <Clients />

      <Program />

      <GetStarted />

      <Menu />

      <Testimonial />

      <Footer />
    </AppContext.Provider>
  );
};

export default App;
