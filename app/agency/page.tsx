"use client";

import "./agency.scss";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportIcon from "@mui/icons-material/Support";
import { Button } from "@/components/ui/button";

export default function AgencyPage() {
  return (
    <div className="agency-page">
      {/* Hero Section */}
      <section className="agency-hero">
        <div className="container">
          <div className="agency-hero__content">
            <h5 className="agency-hero__subtitle">I Am a Recruiting Agency</h5>
            <h1 className="agency-hero__title">
              Partner With <span className="highlight">School Abroad</span>
            </h1>
            <p className="agency-hero__description">
              Let&apos;s Build Stronger Student Recruitment Partnerships
            </p>
            <p className="agency-hero__text">
              School Abroad, powered by School Outside, partners with trusted
              recruiting agencies and educational consultants across the world
              to connect qualified students with institutions in Europe, the UK,
              Canada, and the United States.
            </p>
            <p className="agency-hero__text">
              If you already help students apply abroad or plan to start, we
              make your work easier, faster, and more rewarding.
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
              We combine AI tools, verified systems, and transparent contracts
              to ensure smooth, secure, and profitable collaborations.
            </p>
          </div>

          <div className="benefits-list">
            <p className="benefits-intro">As a Recruiting Partner, You Can:</p>
            <ul className="benefits-list-items">
              <li>
                <CheckCircleIcon className="check-icon" />
                <span>
                  Submit student applications through our trusted process
                </span>
              </li>
              <li>
                <CheckCircleIcon className="check-icon" />
                <span>
                  Access verified schools with affordable tuition options
                </span>
              </li>
              <li>
                <CheckCircleIcon className="check-icon" />
                <span>
                  Receive commission-based earnings per successful student
                  placement
                </span>
              </li>
              <li>
                <CheckCircleIcon className="check-icon" />
                <span>
                  Benefit from ongoing AI and human support for case tracking
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Commission Model Section */}
      <section className="commission-model">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Transparency</h6>
            <h2 className="section-title">Partnership Commission Model</h2>
            <p className="section-description">
              We believe in transparency at every stage.
            </p>
          </div>

          <div className="commission-table-wrapper">
            <table className="commission-table">
              <thead>
                <tr>
                  <th>Payment Phase</th>
                  <th>Percentage</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Upfront Payment</strong>
                  </td>
                  <td className="percentage-cell">75%</td>
                  <td>Paid when student begins the process</td>
                </tr>
                <tr>
                  <td>
                    <strong>Completion Payment</strong>
                  </td>
                  <td className="percentage-cell">25%</td>
                  <td>Paid after visa issuance or enrollment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="commission-note">
            <p>
              💡 All partnerships operate under a legal contract to ensure
              fairness, compliance, and clear expectations.
            </p>
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
              <h3>Fill the Recruiting Agency Form</h3>
              <p>
                Share your company details, regions covered, and student types
                you work with.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <CheckCircleIcon />
              </div>
              <h3>Verification & Review</h3>
              <p>
                Our team reviews your submission and may contact you for
                additional details.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <AccountBalanceIcon />
              </div>
              <h3>Contract Signing</h3>
              <p>
                Once approved, we send you a partnership contract to formalize
                our collaboration.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon">
                <GroupsIcon />
              </div>
              <h3>Start Referring Students</h3>
              <p>
                You&apos;ll get access to partnership resources, guidelines, and
                support to begin referrals immediately.
              </p>
            </div>
          </div>

          <div className="section-cta">
            <Button size="lg" asChild>
              <a href="#agency-form">Apply as a Recruiting Agency</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="partnership-benefits">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Benefits</h6>
            <h2 className="section-title">Partnership Benefits</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <AccountBalanceIcon />
              </div>
              <h3>Legal Agreement</h3>
              <p>Legal and transparent agreement protecting both sides</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <AnalyticsIcon />
              </div>
              <h3>AI-Assisted Tracking</h3>
              <p>AI-assisted student application tracking</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <SupportIcon />
              </div>
              <h3>Dedicated Support</h3>
              <p>Dedicated partnership support manager</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <PaymentIcon />
              </div>
              <h3>Fast Payouts</h3>
              <p>Fast response time and reliable commission payouts</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <VerifiedUserIcon />
              </div>
              <h3>Exclusive Access</h3>
              <p>
                Exclusive access to verified institutions seeking African and
                Asian students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="who-can-apply">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Eligibility</h6>
            <h2 className="section-title">Who Can Apply</h2>
          </div>

          <div className="applicants-grid">
            <div className="applicant-card">
              <BusinessIcon className="applicant-icon" />
              <h3>Recruiting Agencies</h3>
            </div>

            <div className="applicant-card">
              <GroupsIcon className="applicant-icon" />
              <h3>Education Consultants</h3>
            </div>

            <div className="applicant-card">
              <VerifiedUserIcon className="applicant-icon" />
              <h3>Individual Student Advisors</h3>
            </div>

            <div className="applicant-card">
              <AssignmentIcon className="applicant-icon" />
              <h3>Regional Admission Partners</h3>
            </div>
          </div>

          <p className="applicants-footer">
            Whether you&apos;re a large company or an independent recruiter, you
            can apply to become an approved partner.
          </p>
        </div>
      </section>

      {/* Agency Form Section */}
      <section id="agency-form" className="agency-form-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Get Started</h6>
            <h2 className="section-title">Agency Partnership Form</h2>
            <p className="section-description">
              Click the button below to fill out our partnership application
              form. Our partnership team will contact you within 2–3 business
              days to discuss the next steps.
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSea4-lxAXu_hKnDhphDpf031Oe4N1jtsvfGDoqA5BjtCOTvuQ/viewform"
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

      {/* Partner Responsibilities Section */}
      <section className="partner-responsibilities">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Responsibilities</h6>
            <h2 className="section-title">Partner Responsibilities</h2>
          </div>

          <div className="responsibilities-content">
            <p>
              By joining the School Abroad partnership program, you agree to:
            </p>
            <ul className="responsibilities-list">
              <li>Maintain transparency with all clients</li>
              <li>Share accurate and verifiable student information</li>
              <li>Abide by the agreed service structure and payment terms</li>
              <li>Use our official communication and application channels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="agency-contact">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Contact</h6>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
              If you&apos;d like to discuss before applying, reach out to our
              Partnership Team
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <EmailIcon className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:partners@schoolabroad.org">
                  partners@schoolabroad.org
                </a>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:partners@schoolabroad.org">
                Email the Partnership Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
