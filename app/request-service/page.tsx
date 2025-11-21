"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import "./request-service.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { sendEmail } from "@/app/utils/resend";
import { motion } from "framer-motion";

export default function RequestServicePage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState<string[]>([]);

  const services = [
    {
      id: "admission",
      title: "University Admission",
      description: "Complete assistance from school selection to admission confirmation",
      icon: SchoolIcon,
      price: "from $120",
    },
    {
      id: "visa",
      title: "Visa Processing",
      description: "Support with documentation, application, and interview preparation",
      icon: FlightTakeoffIcon,
      price: "from $180",
    },
    {
      id: "settlement",
      title: "Settlement Package",
      description: "Guidance on housing, residence permit, and local setup",
      icon: HomeIcon,
      price: "from $100",
    },
    {
      id: "bundle",
      title: "Full Study Abroad Bundle",
      description: "Covers admission, visa, and settlement support",
      icon: AssignmentIcon,
      price: "from $350",
      highlight: true,
    },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedService((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataObj = new FormData(e.currentTarget);
      const data: Record<string, string> = {
        selectedServices: selectedService.join(", "),
      };
      for (const [key, value] of formDataObj.entries()) {
        if (value instanceof File) continue;
        data[key] = String(value);
      }

      await sendEmail({
        ...data,
        subject: "Service Request - School Abroad",
        type: "service-request",
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit request. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="request-service-page">
      {/* Hero Section */}
      <section className="request-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="request-hero__content"
          >
            <h5 className="request-hero__subtitle">Request Service</h5>
            <h1 className="request-hero__title">
              Get Started with Your <span className="highlight">Study Abroad Journey</span>
            </h1>
            <p className="request-hero__description">
              Choose the services you need, and our expert team will guide you through
              every step of your journey to studying abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="services-selection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Select Your Services</h2>
            <p className="section-description">
              Pick one, combine multiple, or choose our complete bundle
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isSelected = selectedService.includes(service.id);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`service-card ${isSelected ? "selected" : ""} ${
                    service.highlight ? "highlight" : ""
                  }`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="service-card__header">
                    <div className="service-card__icon">
                      <Icon />
                    </div>
                    {service.highlight && (
                      <span className="service-card__badge">Most Popular</span>
                    )}
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <div className="service-card__footer">
                    <span className="service-card__price">{service.price}</span>
                    <div className="service-card__checkbox">
                      <CheckCircleIcon
                        className={isSelected ? "checked" : "unchecked"}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="request-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Tell Us About Yourself</h2>
              <p>Fill in your details and we'll get back to you within 24 hours</p>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
              >
                <CheckCircleIcon className="success-icon" />
                <h3>Request Submitted Successfully!</h3>
                <p>
                  Thank you for your interest. Our team will contact you within 24 hours
                  to discuss your requirements and next steps.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="request-form">
                <div className="form-grid">
                  <div className="form-group">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="country">Current Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      required
                      placeholder="Nigeria"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="destination">Preferred Study Destination *</Label>
                    <select
                      id="destination"
                      name="destination"
                      required
                      className="form-select"
                    >
                      <option value="">Select destination</option>
                      <option value="UK">United Kingdom</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <Label htmlFor="program">Program Level *</Label>
                    <select
                      id="program"
                      name="program"
                      required
                      className="form-select"
                    >
                      <option value="">Select program level</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Graduate">Graduate (Master's)</option>
                      <option value="PhD">PhD</option>
                      <option value="Diploma">Diploma/Certificate</option>
                      <option value="Language">Language Course</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals, timeline, or any specific requirements..."
                  />
                </div>

                {selectedService.length > 0 && (
                  <div className="selected-services">
                    <Label>Selected Services:</Label>
                    <div className="selected-services__list">
                      {selectedService.map((id) => {
                        const service = services.find((s) => s.id === id);
                        return service ? (
                          <motion.span
                            key={id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="selected-service-tag"
                          >
                            {service.title}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedService((prev) =>
                                  prev.filter((serviceId) => serviceId !== id)
                                );
                              }}
                              className="remove-service-btn"
                              aria-label={`Remove ${service.title}`}
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <line x1="3" y1="3" x2="11" y2="11" />
                                <line x1="11" y1="3" x2="3" y2="11" />
                              </svg>
                            </button>
                          </motion.span>
                        ) : null;
                      })}
                    </div>
                    <p className="selected-services__hint">
                      Click the × to remove a service, or scroll up to modify your selection
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="submit-button"
                  disabled={loading || selectedService.length === 0}
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </Button>

                <p className="form-note">
                  * Required fields. By submitting this form, you agree to our terms of
                  service and privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose School Abroad?</h2>
          <div className="benefits-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="benefit-card"
            >
              <CheckCircleIcon className="benefit-icon" />
              <h3>Expert Guidance</h3>
              <p>Experienced counselors to help you make the right decisions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="benefit-card"
            >
              <CheckCircleIcon className="benefit-icon" />
              <h3>Fast Response</h3>
              <p>We respond to all inquiries within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="benefit-card"
            >
              <CheckCircleIcon className="benefit-icon" />
              <h3>Comprehensive Support</h3>
              <p>End-to-end assistance from application to settlement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="benefit-card"
            >
              <CheckCircleIcon className="benefit-icon" />
              <h3>Transparent Pricing</h3>
              <p>Clear pricing with no hidden fees</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

