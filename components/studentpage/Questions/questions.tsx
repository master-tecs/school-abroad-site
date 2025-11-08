"use client";

import React from "react";
import "./questions.scss";

export default function Questions() {
  return (
    <section className="questions student-section">
      <div className="container">
        <h2>Still Have Questions?</h2>
        <p>
          Visit our <a href="/faq">FAQ Page</a> or chat instantly with our AI Assistant for answers about applications, countries, and requirements.
        </p>

        <div className="questions-cards">
          <div className="card">
            <h4>How do I apply for a university abroad?</h4>
            <p>
              We provide step-by-step guidance from school selection to submitting your application and tracking its status.
            </p>
          </div>
          <div className="card">
            <h4>Can you help with visa processing?</h4>
            <p>
              Yes! Our team reviews your documents, guides you through the submission process, and helps prepare you for interviews.
            </p>
          </div>
          <div className="card">
            <h4>Do you offer post-arrival support?</h4>
            <p>
              Absolutely! We assist with accommodation, residence permits, health insurance, and integration into your new city.
            </p>
          </div>
        </div>

        <a href="/chat" className="cta-btn primary">
          Chat With Us Now
        </a>
      </div>
    </section>
  );
}