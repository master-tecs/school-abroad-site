"use client";

import React from "react";
import "./howItWorks.scss";

export default function HowItWorks() {
  const steps = [
    {
      title: "Select Your Plan or Service",
      description: "Choose either a direct service or our membership program based on your needs.",
    },
    {
      title: "Submit Your Details",
      description: "Securely provide your information through our online form to get started.",
    },
    {
      title: "Get Assigned an Advisor",
      description: "Within 24 hours, a dedicated consultant or AI guide will reach out to you.",
    },
    {
      title: "Start Your Process",
      description: "Begin your study abroad journey with confidence and support every step of the way.",
    },
  ];

  return (
    <section className="how-it-works student-section">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="/apply" className="cta-btn">
          Start My Application
        </a>
      </div>
    </section>
  );
}