"use client";

import React from "react";
import { CheckCircle } from "@mui/icons-material";
import "./preArrival.scss";

export default function PreArrival() {
  const services = [
    {
      title: "University Admission Support",
      description: "School selection, application filing, and admission tracking.",
    },
    {
      title: "Visa Processing Guidance",
      description: "Documentation review and submission assistance.",
    },
    {
      title: "Low-Tuition School Matching",
      description: "Find affordable universities that fit your goals and budget.",
    },
    {
      title: "Document Preparation",
      description: "Statement of purpose, motivation letters, and application editing.",
    },
  ];

  return (
    <section className="pre-arrival-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Pre-Arrival Services</h2>
          <p>We help you prepare everything before you travel.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <CheckCircle className="icon" />
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}