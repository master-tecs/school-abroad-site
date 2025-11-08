"use client";

import React from "react";
import "./pricing.scss";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "University Admission",
      description: "Complete assistance from school selection to admission confirmation.",
      price: "from $120",
    },
    {
      title: "Visa Processing",
      description: "Support with documentation, application, and interview preparation.",
      price: "from $180",
    },
    {
      title: "Settlement Package",
      description: "Guidance on housing, residence permit, and local setup.",
      price: "from $100",
    },
    {
      title: "Full Study Abroad Bundle",
      description: "Covers admission, visa, and settlement support.",
      price: "from $350",
      highlight: true,
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Our Service Pricing</h2>
          <p>
            Pick the services you need, or bundle them together for a complete,
            hassle-free experience.
          </p>
        </div>

        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            >
              <h3>{plan.title}</h3>
              <p className="description">{plan.description}</p>
              <p className="price">{plan.price}</p>
              <a href="/request-service" className="cta-btn">
                Request Service
              </a>
            </div>
          ))}
        </div>

        <p className="note">
          💡 You can choose one, combine two, or take the full bundle depending
          on your situation.
        </p>
      </div>
    </section>
  );
}