"use client";

import React from "react";
import { CheckCircle } from "@mui/icons-material";
import "./postArrival.scss";

export default function PostArrival() {
  const services = [
    {
      title: "Residence Permit & Health Insurance Assistance",
      description: "Guidance for residence permit applications and health insurance setup.",
    },
    {
      title: "Accommodation & Settlement Support",
      description: "Help finding housing and settling into your new city.",
    },
    {
      title: "Access to Student Job & Internship Platforms",
      description: "Opportunities to find part-time work or internships locally.",
    },
    {
      title: "Local Integration Guidance",
      description: "Assistance with city registration, opening bank accounts, and local orientation.",
    },
  ];

  return (
    <section className="post-arrival-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Post-Arrival Services</h2>
          <p>After you arrive, we continue supporting your settlement process.</p>
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