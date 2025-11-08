"use client";

import Image from "next/image";
import "./about-us.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessIcon from "@mui/icons-material/Business";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleIcon from "@mui/icons-material/People";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <h5 className="about-hero__subtitle">About Us</h5>
            <h1 className="about-hero__title">
              Empowering Global <span className="highlight">Education Access</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Introduction</h6>
            <h2 className="section-title">Who We Are</h2>
          </div>

          <div className="content-grid">
            <div className="content-text">
              <p className="intro-text">
                School Abroad is a global student migration platform powered by
                School Outside, designed to help students from across the world
                to access study opportunities in Europe, the UK, Canada, and the
                United States.
              </p>
              <p>
                We combine AI technology with human expertise to simplify the
                entire study abroad journey from choosing the right institution
                to settling in a new country.
              </p>
              <div className="mission-box">
                <h3>Our mission is simple:</h3>
                <p>
                  To make studying abroad accessible, affordable, and transparent
                  for every student who dreams of an international education.
                </p>
              </div>
            </div>

            <div className="content-image">
              <div className="image-wrapper">
                <Image
                  src="/assets/images/students/student-1.png"
                  alt="Students studying abroad"
                  width={600}
                  height={600}
                  priority
                  className="main-image"
                />
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Services</h6>
            <h2 className="section-title">What We Do</h2>
            <p className="section-description">
              We provide a full-service approach that covers both pre-arrival and
              post-arrival needs:
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card pre-arrival">
              <div className="service-icon">
                <SchoolIcon />
              </div>
              <h3>Pre-Arrival Support</h3>
              <ul className="service-list">
                <li>
                  <CheckCircleIcon className="check-icon" />
                  University selection and admission application
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Visa documentation and interview preparation
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Low-tuition program matching
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Dedicated advisor guidance
                </li>
              </ul>
            </div>

            <div className="service-card post-arrival">
              <div className="service-icon">
                <GroupsIcon />
              </div>
              <h3>Post-Arrival Support</h3>
              <ul className="service-list">
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Residence permit and health insurance assistance
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Settlement and housing support
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Access to verified student job and internship platforms
                </li>
              </ul>
            </div>
          </div>

          <p className="services-footer">
            Whether you need full assistance or just one service, School Abroad
            adapts to your needs with clear, flexible pricing.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Methodology</h6>
            <h2 className="section-title">Our Approach</h2>
            <p className="section-description">
              We believe that technology + real student experience is the key to
              successful migration.
            </p>
            <p className="section-subtext">
              That&apos;s why our system is built on three pillars:
            </p>
          </div>

          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon">
                <AnalyticsIcon />
              </div>
              <h3>AI-Powered Guidance</h3>
              <p>
                Instant answers, document tips, and smart student matching.
              </p>
            </div>

            <div className="approach-card">
              <div className="approach-icon">
                <SupportAgentIcon />
              </div>
              <h3>Human Expertise</h3>
              <p>
                Experienced advisors who understand real migration challenges.
              </p>
            </div>

            <div className="approach-card">
              <div className="approach-icon">
                <PeopleIcon />
              </div>
              <h3>Community Knowledge</h3>
              <p>
                Insights from students who have already navigated the process
                successfully.
              </p>
            </div>
          </div>

          <p className="approach-footer">
            This approach ensures that every student receives accurate
            information, personal support, and faster progress toward their goals.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="who-we-serve">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Audience</h6>
            <h2 className="section-title">Who We Serve</h2>
          </div>

          <div className="serve-grid">
            <div className="serve-card">
              <div className="serve-icon">
                <SchoolIcon />
              </div>
              <h3>Students</h3>
              <p>
                Students seeking admission, visa help, or post-arrival support
              </p>
            </div>

            <div className="serve-card">
              <div className="serve-icon">
                <GroupsIcon />
              </div>
              <h3>Parents</h3>
              <p>
                Parents planning secure academic pathways for their children
              </p>
            </div>

            <div className="serve-card">
              <div className="serve-icon">
                <BusinessIcon />
              </div>
              <h3>Recruiting Agencies</h3>
              <p>
                Recruiting agencies who guide students and need reliable
                back-end support
              </p>
            </div>

            <div className="serve-card">
              <div className="serve-icon">
                <SchoolIcon />
              </div>
              <h3>Educational Institutions</h3>
              <p>
                Educational institutions that want to partner and receive
                qualified students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Model Section */}
      <section className="membership-model">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Pricing</h6>
            <h2 className="section-title">Our Membership Model</h2>
            <p className="section-description">
              For students who prefer ongoing guidance, School Abroad offers a
              two-tier membership:
            </p>
          </div>

          <div className="membership-table-wrapper">
            <table className="membership-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Price (USD/month)</th>
                  <th>Includes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Platinum</strong>
                  </td>
                  <td className="price-cell">$25</td>
                  <td>
                    Webinars, Q&A sessions, migration updates
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Diamond</strong>
                  </td>
                  <td className="price-cell">$45</td>
                  <td>
                    Personalized counseling, case analysis, and one-on-one
                    expert support
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="membership-note">
            Students can also purchase direct services (admissions, visa, or
            settlement) without becoming members.
          </p>

          <div className="section-cta">
            <Button size="lg" asChild>
              <a href="/pricing">Join Membership</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Partnerships Section */}
      <section className="our-partnerships">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Partnerships</h6>
            <h2 className="section-title">Our Partnerships</h2>
          </div>

          <div className="partnerships-content">
            <div className="partnerships-image">
              <Image
                src="/assets/images/slides/partners.jpg"
                alt="Partnership collaboration"
                width={500}
                height={400}
                className="partnership-image"
              />
            </div>

            <div className="partnerships-text">
              <p>
                We collaborate with:
              </p>
              <ul className="partnerships-list">
                <li>
                  <CheckCircleIcon className="check-icon" />
                  <span>
                    <strong>Recruiting Agencies</strong> who bring student
                    applications under formal contracts
                  </span>
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  <span>
                    <strong>Universities, Colleges, and Language Schools</strong>{" "}
                    seeking students from emerging markets
                  </span>
                </li>
              </ul>
              <p className="partnerships-note">
                These partnerships are managed through a form-based outreach
                system, ensuring transparent communication, legal compliance, and
                fair commission structures.
              </p>

              <div className="partnerships-cta">
                <Button size="lg" variant="outline" asChild>
                  <a href="/partner">Partner With Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="our-vision">
        <div className="container">
          <div className="vision-content">
            <div className="vision-icon-wrapper">
              <VisibilityIcon className="vision-icon" />
            </div>
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-text">
              To become the leading AI-driven student migration platform
              connecting Africa and Southeast Asia to the world&apos;s best
              education opportunities — built on trust, transparency, and
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <div className="container">
          <div className="section-header">
            <h6 className="section-tag">Values</h6>
            <h2 className="section-title">Our Values</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <TrendingUpIcon />
              </div>
              <h3>Transparency</h3>
              <p>Clear pricing, honest guidance</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <EmojiEventsIcon />
              </div>
              <h3>Integrity</h3>
              <p>Ethical, student-first approach</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <LightbulbIcon />
              </div>
              <h3>Innovation</h3>
              <p>Smart technology meets real human care</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <GroupsIcon />
              </div>
              <h3>Empowerment</h3>
              <p>
                Helping students make informed, confident decisions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
