"use client";

import { FC } from "react";
import "./services.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HelpIcon from "@mui/icons-material/Help";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import FlightIcon from "@mui/icons-material/Flight";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

interface Service {
  title: string;
  description: string;
  Icon: typeof AccessTimeIcon;
}

const services: Service[] = [
  {
    title: "Psychometric Testing",
    description:
      "Our Psychometric Testing Service Helps You Understand Your Strengths and Career Preferences.",
    Icon: AccessTimeIcon,
  },
  {
    title: "Educational Consultation",
    description:
      "Personalized counseling to help students select the most suitable program and institution.",
    Icon: CastForEducationIcon,
  },
  {
    title: "Application & Admission Assistance",
    description:
      "Guiding students through application forms, documentation, and prerequisites.",
    Icon: HelpIcon,
  },
  {
    title: "Visa Guidance & Processing",
    description:
      "End-to-end support to ensure visa requirements are correctly met, minimizing rejections and delays.",
    Icon: RunningWithErrorsIcon,
  },
  {
    title: "Flight & Travel Arrangements",
    description:
      "Assistance with flight bookings, travel insurance, airport pick-up services, and accommodation.",
    Icon: FlightIcon,
  },
  {
    title: "Exchange Programs & Study Tours",
    description:
      "Coordinating short-term study tours, cultural exchange programs, and school camps.",
    Icon: SchoolIcon,
  },
  {
    title: "Continuous Support",
    description:
      "Ongoing support for students even after they arrive at their destination, ensuring a smooth transition.",
    Icon: InfoIcon,
  },
  {
    title: "Online Classes for French and IELTS",
    description:
      "High-quality online courses designed to help you master French exams and prepare for IELTS.",
    Icon: FontDownloadIcon,
  },
  {
    title: "Career Counseling",
    description:
      "Receive personalized guidance from our experienced counsellors to align your career goals with your strengths.",
    Icon: WorkHistoryIcon,
  },
];

const Services: FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="services-title text-center">
          Our <span className="highlight">Services</span>
        </h2>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-card-icon">
                <service.Icon />
              </div>
              <h4 className="service-card-title">{service.title}</h4>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;