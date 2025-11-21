"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="appointment" ref={ref}>
      <div className="container">
        {/* How It Works */}
        <motion.div
          className="appointment__steps"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h4
            className="appointment__subtitle"
            variants={contentVariants}
          >
            HOW IT WORKS
          </motion.h4>
          <motion.div
            className="appointment__steps-grid"
            variants={containerVariants}
          >
            <motion.div
              className="step"
              variants={stepVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="step__icon"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <InsertDriveFileIcon fontSize="large" />
              </motion.div>
              <span className="step__number">01</span>
              <h3 className="step__title">Fill Required Form</h3>
            </motion.div>
            <motion.div
              className="step"
              variants={stepVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="step__icon"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <MarkEmailReadIcon fontSize="large" />
              </motion.div>
              <span className="step__number">02</span>
              <h3 className="step__title">Receive Confirmation Email</h3>
            </motion.div>
            <motion.div
              className="step"
              variants={stepVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="step__icon"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <GroupsIcon fontSize="large" />
              </motion.div>
              <span className="step__number">03</span>
              <h3 className="step__title">Meet 1-on-1 With Our Experts</h3>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact + Form */}
        <motion.div
          className="appointment__content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="appointment__info"
            variants={contentVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3>School Abroad</h3>
            <ul className="appointment__details">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <AccessTimeIcon /> 30 Minutes Free Counselling
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <VideocamIcon /> Web conferencing details upon confirmation
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <EmailIcon /> info@schoolabroad.com
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <LocalPhoneIcon /> +234 708 1416 069 | +33 769 020 091
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <LocationOnIcon /> Europe: Pierre Vermeir, Antony, Paris
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <LocationOnIcon /> Africa: 1A Junction Road, Kaduna, Nigeria
              </motion.li>
            </ul>
            <motion.div
              className="appointment__agent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <PersonIcon className="agent-icon" />
              <p>We'll respond within 24 hours</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="appointment__form"
            variants={contentVariants}
          >
            <h3>Learn More</h3>
            <p style={{ marginBottom: "1.5rem", color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Explore our comprehensive services:
            </p>
            <ul style={{ marginBottom: "1.5rem", color: "#666", fontSize: "0.9rem", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
              <li>Visa Services & Processing</li>
              <li>Online Exams: IELTS, TOEFL, DELF, TEF, SAT</li>
              <li>School Admission & Application Assistance</li>
              <li>Educational Consultation & Career Counseling</li>
              <li>French Language Classes (Online)</li>
              <li>Flight & Travel Arrangements</li>
              <li>Psychometric Testing</li>
            </ul>
            {success ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                ✅ Thank you! We'll get back to you within 24 hours.
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="form-grid">
                  <motion.input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.select
                    name="studyAbroad"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <option value="">Choose Study Destination</option>
                    <option>United Kingdom</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </motion.select>
                  <motion.select
                    name="course"
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <option value="">Select Service</option>
                    <option>Visa Service</option>
                    <option>School Admission</option>
                    <option>IELTS (Online Exam)</option>
                    <option>TOEFL (Online Exam)</option>
                    <option>DELF (Online Exam)</option>
                    <option>TEF (Online Exam)</option>
                    <option>SAT (Online Exam)</option>
                    <option>French Language Classes</option>
                    <option>Educational Consultation</option>
                    <option>Application & Admission Assistance</option>
                    <option>Flight & Travel Arrangements</option>
                    <option>Career Counseling</option>
                    <option>Psychometric Testing</option>
                  </motion.select>
                </div>
                <motion.textarea
                  name="message"
                  rows={4}
                  placeholder="Write your message..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}