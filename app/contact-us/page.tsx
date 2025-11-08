"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import "./contact-us.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { sendEmail } from "@/app/utils/resend";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataObj = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      for (const [key, value] of formDataObj.entries()) {
        if (value instanceof File) continue;
        data[key] = String(value);
      }

      await sendEmail(data);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <h5 className="contact-hero__subtitle">Get in Touch</h5>
            <h1 className="contact-hero__title">
              Contact <span className="highlight">School Abroad</span>
            </h1>
            <p className="contact-hero__description">
              We&apos;re here to help you on your journey to studying abroad.
              Reach out to us through any of the channels below, and we&apos;ll get
              back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-card__icon">
                <EmailIcon />
              </div>
              <h3>Email Us</h3>
              <p>Send us an email anytime</p>
              <a href="mailto:info@schoolabroad.org" className="contact-link">
                info@schoolabroad.org
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <PhoneIcon />
              </div>
              <h3>Call Us</h3>
              <p>Available Monday - Friday, 9 AM - 5 PM (CET)</p>
              <div className="phone-numbers">
                <a href="tel:+33769020091" className="contact-link">
                  +33 769 020 091
                </a>
                <a href="tel:+2347081416069" className="contact-link">
                  +234 708 1416 069
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <AccessTimeIcon />
              </div>
              <h3>Office Hours</h3>
              <p>We&apos;re here to assist you</p>
              <div className="office-hours">
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM (CET)</p>
                <p className="hours-note">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Send a Message</h6>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
              Fill out the form below, and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="form-wrapper">
            {success ? (
              <div className="success-message">
                <CheckCircleIcon className="success-icon" />
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. We&apos;ll get back to
                  you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <Label htmlFor="fullName">
                      Full Name <span className="required">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="phone">
                      Phone Number <span className="required">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+33 7 69 02 00 91"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div className="form-group full-width">
                    <Label htmlFor="subject">
                      Subject <span className="required">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What is your inquiry about?"
                    />
                  </div>

                  <div className="form-group full-width">
                    <Label htmlFor="message">
                      Message <span className="required">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                <div className="form-submit">
                  <Button type="submit" size="lg" disabled={loading}>
                    <SendIcon className="btn-icon" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="office-locations">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Our Offices</h6>
            <h2 className="section-title">Visit Our Offices</h2>
            <p className="section-description">
              We have offices in Europe and Africa to serve you better.
            </p>
          </div>

          <div className="locations-grid">
            <div className="location-card">
              <div className="location-image-wrapper">
                <Image
                  src="/assets/images/countries/germany.jpg"
                  alt="Europe Office"
                  width={400}
                  height={300}
                  className="location-image"
                />
                <div className="location-overlay"></div>
              </div>
              <div className="location-content">
                <div className="location-icon">
                  <LocationOnIcon />
                </div>
                <h3>Europe Office</h3>
                <p className="location-address">
                  Pierre Vermeir, Antony
                  <br />
                  Paris, France
                </p>
                <div className="location-contact">
                  <a href="tel:+33769020091" className="location-link">
                    <PhoneIcon /> +33 769 020 091
                  </a>
                </div>
              </div>
            </div>

            <div className="location-card">
              <div className="location-image-wrapper">
                <Image
                  src="/assets/images/slides/school.jpg"
                  alt="Africa Office"
                  width={400}
                  height={300}
                  className="location-image"
                />
                <div className="location-overlay"></div>
              </div>
              <div className="location-content">
                <div className="location-icon">
                  <LocationOnIcon />
                </div>
                <h3>Africa Office</h3>
                <p className="location-address">
                  1A Junction Road
                  <br />
                  Kaduna, Nigeria
                </p>
                <div className="location-contact">
                  <a href="tel:+2347081416069" className="location-link">
                    <PhoneIcon /> +234 708 1416 069
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Connect</h6>
            <h2 className="section-title">Follow Us</h2>
            <p className="section-description">
              Stay connected with us on social media for updates, tips, and
              student success stories.
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://m.facebook.com/schooloutsideng/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <FacebookIcon className="social-icon" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/schooloutside_ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <InstagramIcon className="social-icon" />
              <span>Instagram</span>
            </a>

            <a
              href="https://linkedin.com/company/schooloutside"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <LinkedInIcon className="social-icon" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.youtube.com/@schooloutside"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <YouTubeIcon className="social-icon" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="quick-contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Immediate Assistance?</h2>
            <p>
              For urgent inquiries, please call us directly or send an email.
              We&apos;re here to help!
            </p>
            <div className="cta-buttons">
              <Button size="lg" asChild>
                <a href="tel:+33769020091">
                  <PhoneIcon /> Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@schoolabroad.org">
                  <EmailIcon /> Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
