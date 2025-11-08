"use client";
import Image from "next/image";
import "./colleges.scss";

const universities = [
  { name: "Arizona University", logo: "/assets/images/colleges/Arizona-University-Logo.png" },
  { name: "Chicago University", logo: "/assets/images/colleges/Chicago-University-Logo.png" },
  { name: "Columbia University", logo: "/assets/images/colleges/Columbia-University-Logo.png" },
  { name: "Harvard University", logo: "/assets/images/colleges/Harvard-University-Logo.png" },
  { name: "Georgia University", logo: "/assets/images/colleges/Georgia-University-Logo.png" },
  { name: "Pittsburgh University", logo: "/assets/images/colleges/Pittsburgh-University-Logo.png" },
];

export default function Colleges() {
  return (
    <section className="colleges-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="colleges-title">
            We help you find the ideal institutions for{" "}
            <span className="highlight">student success</span>
          </h2>
          <p className="colleges-subtitle">
            Partnered with top global universities to help students achieve academic excellence.
          </p>
        </div>

        <div className="colleges-logos">
          {universities.map((university, index) => (
            <div key={index} className="college-card">
              <div className="college-logo">
                <Image
                  src={university.logo}
                  alt={university.name}
                  fill
                  className="logo-img"
                  sizes="(max-width: 768px) 80px, 120px"
                />
              </div>
              <p className="college-name">{university.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}