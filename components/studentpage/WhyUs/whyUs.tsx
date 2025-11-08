"use client";

import React, { useState } from "react";
import "./whyUs.scss";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function WhyUs() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => setIsMuted(!isMuted);

  const features = [
    {
      title: "Expert Guidance",
      description:
        "Our experienced counselors provide personalized guidance to help you choose the right course and university.",
    },
    {
      title: "Comprehensive Support",
      description:
        "From application to visa processing, we assist you at every step to ensure your success.",
    },
    {
      title: "University Partnerships",
      description:
        "We have strong partnerships with top universities worldwide, giving you exclusive opportunities.",
    },
  ];

  return (
    <section className="why-us student-section">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-left">
            <h6 className="tagline">WHY US</h6>
            <h2>Why Choose School Abroad?</h2>

            <div className="features">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-number">{idx + 1}</div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/about" className="cta-btn">
              Read More
            </a>
          </div>

          {/* Right Column */}
          <div className="col-right">
            <div className="video-wrapper">
              <video autoPlay loop muted={isMuted}>
                <source src="/assets/images/students/us.mp4" type="video/mp4" />
              </video>
              <div className="mute-btn" onClick={toggleMute}>
                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}