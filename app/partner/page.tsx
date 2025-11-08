"use client";

import { useState, FormEvent } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function PartnerPage() {
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
      const studentLevels = formDataObj.getAll("studentLevel").filter(
        (v): v is string => typeof v === "string"
      ) as string[];
      const collaborationInterests = formDataObj
        .getAll("collaborationInterest")
        .filter((v): v is string => typeof v === "string") as string[];
      
      data.studentLevels = studentLevels;
      data.collaborationInterests = collaborationInterests;
      
      await sendPartnerEmail(data);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  async function sendPartnerEmail(data: Record<string, string | string[]>) {
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
          <p>Dear ${data.contactName},</p>
          <p>We have received your partnership request and our team is currently reviewing it. We will contact you within 3–5 business days to discuss collaboration details and next steps.</p>
          <p>Thank you for your interest in partnering with School Abroad.</p>
          <p>Best regards,<br><strong>The School Abroad Partnership Team</strong></p>
          <hr />
          <p class="footer">This is an automated email. Please do not reply to this address. For further assistance, contact <a href="mailto:institutions@schoolabroad.org">institutions@schoolabroad.org</a>.</p>
        </div>
      </body>
      </html>
    `;

    const response = await fetch("/api/partner-submission", {
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
              Fill out the form below and our partnership team will contact you
              within 3–5 business days.
            </p>
          </div>

          <div className="form-wrapper">
            {success ? (
              <div className="success-message">
                <CheckCircleIcon className="success-icon" />
                <h3>Thank You!</h3>
                <p>
                  We have received your partnership request. Our team will
                  contact you within 3–5 business days to discuss collaboration
                  details and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="partnership-form">
                <div className="form-section">
                  <h3 className="form-section-title">Institution Details</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <Label htmlFor="institutionName">
                        Institution Name <span className="required">*</span>
                      </Label>
                      <Input
                        id="institutionName"
                        name="institutionName"
                        type="text"
                        required
                        placeholder="Enter institution name"
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="institutionType">
                        Type of Institution <span className="required">*</span>
                      </Label>
                      <select
                        id="institutionType"
                        name="institutionType"
                        required
                        className="select-native"
                      >
                        <option value="">Select institution type</option>
                        <option value="university">University</option>
                        <option value="college">College</option>
                        <option value="language-school">Language School</option>
                        <option value="vocational-school">Vocational School</option>
                        <option value="foundation-program">
                          Foundation Program Provider
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <Label htmlFor="country">
                        Country <span className="required">*</span>
                      </Label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        required
                        placeholder="Enter country"
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="city">
                        City <span className="required">*</span>
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="form-group full-width">
                      <Label htmlFor="website">
                        Website <span className="required">*</span>
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        required
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Contact Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <Label htmlFor="contactName">
                        Contact Person Name <span className="required">*</span>
                      </Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        type="text"
                        required
                        placeholder="Enter contact person name"
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="contactEmail">
                        Contact Person Email{" "}
                        <span className="required">*</span>
                      </Label>
                      <Input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        required
                        placeholder="contact@example.com"
                      />
                    </div>

                    <div className="form-group full-width">
                      <Label htmlFor="contactPhone">
                        Contact Phone (with country code){" "}
                        <span className="required">*</span>
                      </Label>
                      <Input
                        id="contactPhone"
                        name="contactPhone"
                        type="tel"
                        required
                        placeholder="+33 7 69 02 00 91"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Program Information</h3>
                  <div className="form-group full-width">
                    <Label htmlFor="programs">
                      Programs/Courses Offered{" "}
                      <span className="required">*</span>
                    </Label>
                    <Textarea
                      id="programs"
                      name="programs"
                      rows={4}
                      required
                      placeholder="Describe the programs and courses your institution offers..."
                    />
                  </div>

                  <div className="form-group full-width">
                    <Label>
                      Student Level of Interest{" "}
                      <span className="required">*</span>
                    </Label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <Checkbox
                          id="undergraduate"
                          name="studentLevel"
                          value="Undergraduate"
                        />
                        <Label htmlFor="undergraduate">Undergraduate</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="graduate"
                          name="studentLevel"
                          value="Graduate"
                        />
                        <Label htmlFor="graduate">Graduate</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="diploma"
                          name="studentLevel"
                          value="Diploma"
                        />
                        <Label htmlFor="diploma">Diploma</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="certificate"
                          name="studentLevel"
                          value="Certificate"
                        />
                        <Label htmlFor="certificate">Certificate</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="language"
                          name="studentLevel"
                          value="Language Programs"
                        />
                        <Label htmlFor="language">Language Programs</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="foundation"
                          name="studentLevel"
                          value="Foundation Programs"
                        />
                        <Label htmlFor="foundation">Foundation Programs</Label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <Label>
                      Collaboration Interest{" "}
                      <span className="required">*</span>
                    </Label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <Checkbox
                          id="recruitment"
                          name="collaborationInterest"
                          value="Student Recruitment"
                        />
                        <Label htmlFor="recruitment">Student Recruitment</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="marketing"
                          name="collaborationInterest"
                          value="Joint Marketing"
                        />
                        <Label htmlFor="marketing">Joint Marketing</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="agent-access"
                          name="collaborationInterest"
                          value="Agent Access"
                        />
                        <Label htmlFor="agent-access">Agent Access</Label>
                      </div>
                      <div className="checkbox-item">
                        <Checkbox
                          id="other-collab"
                          name="collaborationInterest"
                          value="Other"
                        />
                        <Label htmlFor="other-collab">Other</Label>
                      </div>
                    </div>
                  </div>

                    <div className="form-group">
                      <Label htmlFor="annualCapacity">
                        Estimated Annual International Student Capacity{" "}
                        <span className="required">*</span>
                      </Label>
                      <select
                        id="annualCapacity"
                        name="annualCapacity"
                        required
                        className="select-native"
                      >
                        <option value="">Select capacity range</option>
                        <option value="1-50">1 - 50 students</option>
                        <option value="51-100">51 - 100 students</option>
                        <option value="101-250">101 - 250 students</option>
                        <option value="251-500">251 - 500 students</option>
                        <option value="501-1000">501 - 1,000 students</option>
                        <option value="1000+">1,000+ students</option>
                      </select>
                    </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Additional Information</h3>
                  <div className="form-group full-width">
                    <Label htmlFor="additionalInfo">
                      Additional Information/Message
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={5}
                      placeholder="Share any additional information about your institution or partnership goals..."
                    />
                  </div>

                  <div className="form-group full-width">
                    <Label htmlFor="institutionFile">
                      Upload Institutional Profile or Brochure (optional)
                    </Label>
                    <Input
                      id="institutionFile"
                      name="institutionFile"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <p className="file-hint">
                      Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                </div>

                <div className="form-submit">
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Partnership Request"}
                  </Button>
                </div>
              </form>
            )}
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
