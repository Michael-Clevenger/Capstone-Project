import React from "react";
import "./app.css";
import "./hero-section.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div
        styles={{ backgroundImage: `url("https://i.imgur.com/uJF2tz3.gif")` }}
      />
      <p>
        My son is the best thing in my life, and I wanted to do a project that
        reminded me of why I'm doing all this.
      </p>
    </div>
  );
}

export default HeroSection;
