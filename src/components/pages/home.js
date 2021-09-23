import React from "react";
import "../app.css";
import HeroSection from "../hero-section";
import Cards from "../cards";
import Footer from "../footer";

function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
