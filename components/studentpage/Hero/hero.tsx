"use client";

import React from "react";
import "./hero.scss";

export default function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      // Get the top position of the section
      const topPos = pricingSection.getBoundingClientRect().top + window.scrollY;
      // Scroll to the section minus the offset for navbar
      window.scrollTo({
        top: topPos - 120, // adjust 120px as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>Start Your Study Abroad Journey</h1>
        <p>
          School Abroad helps students from Africa and Southeast Asia study in
          Europe, the UK, Canada, and the United States through a mix of
          AI-driven guidance and personalized human support.
        </p>
        <button className="cta-btn" onClick={scrollToPricing}>
          Start My Application
        </button>
      </div>
    </section>
  );
}