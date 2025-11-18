"use client";

import "./partner.scss";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button } from "@/components/ui/button";

export default function PartnerPage() {

  return (
    <div className="partner-page">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="container">
          <div className="partner-hero__content">
            <h5 className="partner-hero__subtitle">I Am an Institution</h5>
            <h1 className="partner-hero__title">
              Partner With <span className="highlight">School Abroad</span>
            </h1>
            <p className="partner-hero__description">
              Connect With Qualified International Students
            </p>
            <p className="partner-hero__text">
              School Abroad, part of School Outside, partners with universities,
              colleges, vocational schools, and language institutes that want to
              expand their reach to students from Africa and Southeast Asia.
            </p>
            <p className="partner-hero__text">
              We make collaboration easy through our form-based outreach system,
              ensuring that institutions can officially express their interest
              and start a transparent, structured partnership process.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="why-partner">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Why Partner</h6>
            <h2 className="section-title">Why Partner With School Abroad</h2>
            <p className="section-description">
              We bridge the gap between motivated international students and
              reputable global institutions.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <GroupsIcon />
              </div>
              <h3>Access to Verified Students</h3>
              <p>Gain access to verified and well-prepared student applicants</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <BusinessIcon />
              </div>
              <h3>Market Exposure</h3>
              <p>
                Exposure in fast-growing student markets (Africa & Southeast
                Asia)
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <AnalyticsIcon />
              </div>
              <h3>AI-Driven Matching</h3>
              <p>
                AI-driven matching system to connect you with suitable candidates
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <VerifiedUserIcon />
              </div>
              <h3>Streamlined Recruitment</h3>
              <p>
                Streamlined recruitment through verified agencies and student
                counselors
              </p>
            </div>
          </div>

          <div className="section-cta">
            <Button size="lg" asChild>
              <a href="#partnership-form">Partner With Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="what-you-gain">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Benefits</h6>
            <h2 className="section-title">What You Gain</h2>
          </div>

          <div className="benefits-table-wrapper">
            <table className="benefits-table">
              <thead>
                <tr>
                  <th>Benefit</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Targeted Recruitment</strong>
                  </td>
                  <td>
                    Gain visibility among pre-screened students from
                    high-demand regions.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Data-Driven Insights</strong>
                  </td>
                  <td>
                    Access AI analytics on applicant demographics and interests.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Verified Agents</strong>
                  </td>
                  <td>
                    Work only with vetted recruiting partners through School
                    Abroad.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Simplified Partnership Process</strong>
                  </td>
                  <td>
                    Digital agreements and transparent procedures.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Process</h6>
            <h2 className="section-title">How the Partnership Works</h2>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <DescriptionIcon />
              </div>
              <h3>Submit the Form</h3>
              <p>
                Provide your school details and collaboration interests through
                our Institution Partnership Form.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <CheckCircleIcon />
              </div>
              <h3>Review & Evaluation</h3>
              <p>
                Our partnership team reviews your submission and schedules a
                short call.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <DescriptionIcon />
              </div>
              <h3>Contract & Onboarding</h3>
              <p>
                Once accepted, you receive a formal partnership agreement to
                sign.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon">
                <GroupsIcon />
              </div>
              <h3>Begin Collaboration</h3>
              <p>
                We start referring qualified students directly to your
                admissions team.
              </p>
            </div>
          </div>

          <div className="section-cta">
            <Button size="lg" asChild>
              <a href="#partnership-form">Start Partnership Process</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="partnership-types">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Partnership Types</h6>
            <h2 className="section-title">Partnership Types</h2>
            <p className="section-description">
              We collaborate with a wide range of institutions including:
            </p>
          </div>

          <div className="types-grid">
            <div className="type-card">
              <SchoolIcon className="type-icon" />
              <h3>Universities</h3>
              <p>Public & Private</p>
            </div>

            <div className="type-card">
              <SchoolIcon className="type-icon" />
              <h3>Language Schools</h3>
              <p>Language & Cultural Programs</p>
            </div>

            <div className="type-card">
              <SchoolIcon className="type-icon" />
              <h3>Vocational Schools</h3>
              <p>Technical & Vocational Training</p>
            </div>

            <div className="type-card">
              <SchoolIcon className="type-icon" />
              <h3>Foundation Programs</h3>
              <p>Pathway Program Providers</p>
            </div>
          </div>

          <p className="types-footer">
            Whether you&apos;re looking for a few qualified candidates or want to
            grow your international presence, we tailor the partnership to your
            goals.
          </p>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section id="partnership-form" className="partnership-form-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Get Started</h6>
            <h2 className="section-title">Institution Partnership Form</h2>
            <p className="section-description">
              Click the button below to fill out our partnership application form.
              Our partnership team will contact you within 3–5 business days to
              discuss collaboration details and next steps.
            </p>
          </div>

          <div className="form-wrapper">
            <div className="form-cta">
              <CheckCircleIcon className="form-cta-icon" />
              <h3>Ready to Partner With Us?</h3>
              <p>
                Complete our partnership application form to get started. The
                process is quick and straightforward.
              </p>
              <Button size="lg" asChild className="form-cta-button">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScGgqCsECeL4zgz4ob2_NRU9s96FkjeVCrZ6WLKN7Rvoeyo2w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill Out Partnership Form
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Policy Section */}
      <section className="partnership-policy">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Policy</h6>
            <h2 className="section-title">Partnership Policy</h2>
          </div>

          <div className="policy-content">
            <p>
              By partnering with School Abroad, you agree to:
            </p>
            <ul className="policy-list">
              <li>Provide accurate institutional information</li>
              <li>Maintain transparent admission policies</li>
              <li>
                Honor agreed referral terms and commissions (if applicable)
              </li>
              <li>
                Communicate through official School Outside partnership
                channels
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="partner-contact">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Contact</h6>
            <h2 className="section-title">Contact Our Partnership Desk</h2>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <EmailIcon className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:institutions@schoolabroad.org">
                  institutions@schoolabroad.org
                </a>
              </div>
            </div>

            <div className="contact-item">
              <PhoneIcon className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+33769020091">+33 (0)769 020 091</a>
                <p className="contact-note">(Place Holder)</p>
              </div>
            </div>

            <div className="contact-item">
              <AccessTimeIcon className="contact-icon" />
              <div>
                <h4>Office Hours</h4>
                <p>Monday – Friday, 9 AM to 5 PM (CET)</p>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:institutions@schoolabroad.org">
                Email the Partnership Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
