"use client";

import { useState, FormEvent } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function AgencyPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataObj = new FormData(e.currentTarget);

      // Extract form data, converting FormDataEntryValue to string
      const data: Record<string, string | string[]> = {};
      for (const [key, value] of formDataObj.entries()) {
        // Skip file inputs for now
        if (value instanceof File) {
          continue;
        }
        const stringValue = String(value);
        if (data[key]) {
          // If key already exists, convert to array
          const existing = data[key];
          data[key] = Array.isArray(existing)
            ? [...existing, stringValue]
            : [existing as string, stringValue];
        } else {
          data[key] = stringValue;
        }
      }

      // Handle checkboxes separately
      const targetRegions = formDataObj
        .getAll("targetRegion")
        .filter((v): v is string => typeof v === "string") as string[];

      data.targetRegions = targetRegions;

      await sendAgencyEmail(data);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  async function sendAgencyEmail(data: Record<string, string | string[]>) {
    const confirmationEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #eaeaea;
            border-radius: 8px;
            background-color: #f9f9f9;
          }
          h1 {
            color: #0071e3;
          }
          .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Thank You for Your Partnership Interest!</h1>
          <p>Dear ${data.contactPerson},</p>
          <p>We have received your recruiting agency partnership application and our team is currently reviewing it. We will contact you within 2–3 business days to discuss the next steps.</p>
          <p>Thank you for your interest in partnering with School Abroad.</p>
          <p>Best regards,<br><strong>The School Abroad Partnership Team</strong></p>
          <hr />
          <p class="footer">This is an automated email. Please do not reply to this address. For further assistance, contact <a href="mailto:partners@schoolabroad.org">partners@schoolabroad.org</a>.</p>
        </div>
      </body>
      </html>
    `;

    const response = await fetch("/api/agency-submission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, confirmationEmail }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit form");
    }
  }

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
              recruiting agencies and educational consultants across the world to
              connect qualified students with institutions in Europe, the UK,
              Canada, and the United States.
            </p>
            <p className="agency-hero__text">
              If you already help students apply abroad or plan to start, we make
              your work easier, faster, and more rewarding.
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
              We combine AI tools, verified systems, and transparent contracts to
              ensure smooth, secure, and profitable collaborations.
            </p>
          </div>

          <div className="benefits-list">
            <p className="benefits-intro">
              As a Recruiting Partner, You Can:
            </p>
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
              <p>
                Legal and transparent agreement protecting both sides
              </p>
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
              Fill out the form below and our partnership team will contact you
              within 2–3 business days to discuss the next steps.
            </p>
          </div>

          <div className="form-wrapper">
            {success ? (
              <div className="success-message">
                <CheckCircleIcon className="success-icon" />
                <h3>Thank You!</h3>
                <p>
                  We have received your partnership application. Our team will
                  contact you within 2–3 business days to discuss the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="agency-form">
                <div className="form-section">
                  <h3 className="form-section-title">Agency Details</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <Label htmlFor="agencyName">
                        Agency/Company Name{" "}
                        <span className="required">*</span>
                      </Label>
                      <Input
                        id="agencyName"
                        name="agencyName"
                        type="text"
                        required
                        placeholder="Enter agency or company name"
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="countryCity">
                        Country & City of Operation{" "}
                        <span className="required">*</span>
                      </Label>
                      <Input
                        id="countryCity"
                        name="countryCity"
                        type="text"
                        required
                        placeholder="e.g., Nigeria, Lagos"
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="yearsExperience">
                        Years of Experience in Student Recruitment{" "}
                        <span className="required">*</span>
                      </Label>
                      <select
                        id="yearsExperience"
                        name="yearsExperience"
                        required
                        className="select-native"
                      >
                        <option value="">Select years of experience</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1 - 3 years</option>
                        <option value="3-5">3 - 5 years</option>
                        <option value="5-10">5 - 10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <Label htmlFor="annualVolume">
                        Estimated Annual Student Volume{" "}
                        <span className="required">*</span>
                      </Label>
                      <select
                        id="annualVolume"
                        name="annualVolume"
                        required
                        className="select-native"
                      >
                        <option value="">Select volume range</option>
                        <option value="1-10">1 - 10 students</option>
                        <option value="11-25">11 - 25 students</option>
                        <option value="26-50">26 - 50 students</option>
                        <option value="51-100">51 - 100 students</option>
                        <option value="100+">100+ students</option>
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <Label htmlFor="website">
                        Website or Social Media (optional)
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://www.example.com or social media link"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Contact Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <Label htmlFor="contactPerson">
                        Contact Person <span className="required">*</span>
                      </Label>
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        required
                        placeholder="Enter contact person name"
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
                        placeholder="contact@example.com"
                      />
                    </div>

                    <div className="form-group full-width">
                      <Label htmlFor="phone">
                        Phone Number (with country code){" "}
                        <span className="required">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+234 708 1416 069"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Target Regions</h3>
                  <div className="form-group full-width">
                    <Label>
                      Target Student Region(s){" "}
                      <span className="required">*</span>
                    </Label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <Checkbox
                          id="region-africa"
                          name="targetRegion"
                          value="Africa"
                        />
                        <Label htmlFor="region-africa">Africa</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="region-asia"
                          name="targetRegion"
                          value="Southeast Asia"
                        />
                        <Label htmlFor="region-asia">Southeast Asia</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="region-europe"
                          name="targetRegion"
                          value="Europe"
                        />
                        <Label htmlFor="region-europe">Europe</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="region-middle-east"
                          name="targetRegion"
                          value="Middle East"
                        />
                        <Label htmlFor="region-middle-east">Middle East</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="region-latin-america"
                          name="targetRegion"
                          value="Latin America"
                        />
                        <Label htmlFor="region-latin-america">Latin America</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="region-other"
                          name="targetRegion"
                          value="Other"
                        />
                        <Label htmlFor="region-other">Other</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Additional Information</h3>
                  <div className="form-group full-width">
                    <Label htmlFor="message">Message/Notes</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share any additional information about your agency or partnership goals..."
                    />
                  </div>

                  <div className="form-group full-width">
                    <Label htmlFor="supportingDocs">
                      Upload Supporting Documents (optional)
                    </Label>
                    <Input
                      id="supportingDocs"
                      name="supportingDocs"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      multiple
                    />
                    <p className="file-hint">
                      Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
                    </p>
                  </div>
                </div>

                <div className="form-submit">
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            )}
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
              <li>
                Share accurate and verifiable student information
              </li>
              <li>
                Abide by the agreed service structure and payment terms
              </li>
              <li>
                Use our official communication and application channels
              </li>
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
