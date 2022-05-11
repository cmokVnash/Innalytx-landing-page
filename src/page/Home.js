import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Service/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
