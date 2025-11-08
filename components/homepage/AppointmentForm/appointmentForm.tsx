"use client";

import { useState, FormEvent } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { sendEmail } from "@/app/utils/resend";
import "./appointment-form.scss";

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      await sendEmail(data);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="appointment">
      <div className="container">
        {/* How It Works */}
        <div className="appointment__steps">
          <h4 className="appointment__subtitle">HOW IT WORKS</h4>
          <div className="appointment__steps-grid">
            <div className="step">
              <div className="step__icon">
                <InsertDriveFileIcon fontSize="large" />
              </div>
              <span className="step__number">01</span>
              <h3 className="step__title">Fill Required Form</h3>
            </div>
            <div className="step">
              <div className="step__icon">
                <MarkEmailReadIcon fontSize="large" />
              </div>
              <span className="step__number">02</span>
              <h3 className="step__title">Receive Confirmation Email</h3>
            </div>
            <div className="step">
              <div className="step__icon">
                <GroupsIcon fontSize="large" />
              </div>
              <span className="step__number">03</span>
              <h3 className="step__title">Meet 1-on-1 With Our Experts</h3>
            </div>
          </div>
        </div>

        {/* Contact + Form */}
        <div className="appointment__content">
          <div className="appointment__info">
            <h3>School Abroad</h3>
            <ul className="appointment__details">
              <li>
                <AccessTimeIcon /> 30 Minutes Free Counselling
              </li>
              <li>
                <VideocamIcon /> Web conferencing details upon confirmation
              </li>
              <li>
                <EmailIcon /> info@schoolabroad.com
              </li>
              <li>
                <LocalPhoneIcon /> +234 708 1416 069 | +33 769 020 091
              </li>
              <li>
                <LocationOnIcon /> Europe: Pierre Vermeir, Antony, Paris
              </li>
              <li>
                <LocationOnIcon /> Africa: 1A Junction Road, Kaduna, Nigeria
              </li>
            </ul>
            <div className="appointment__agent">
              <PersonIcon className="agent-icon" />
              <p>We’ll respond within 24 hours</p>
            </div>
          </div>

          <div className="appointment__form">
            <h3>Book Your Appointment</h3>
            {success ? (
              <div className="success-message">
                ✅ Thank you! We’ll get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input type="text" name="fullName" placeholder="Full Name" required />
                  <input type="tel" name="phone" placeholder="Phone" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="text" name="city" placeholder="City" required />
                  <select name="studyAbroad" required>
                    <option value="">Choose Study Destination</option>
                    <option>United Kingdom</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </select>
                  <select name="course" required>
                    <option value="">Select Service</option>
                    <option>School Admission</option>
                    <option>IELTS</option>
                    <option>TOEFL</option>
                    <option>DELF</option>
                    <option>TEF</option>
                    <option>SAT</option>
                  </select>
                </div>
                <textarea name="message" rows={4} placeholder="Write your message..."></textarea>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}