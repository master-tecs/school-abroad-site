"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headerVariants = {
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
    <section className="colleges-section" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-5"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="colleges-title">
            We help you find the ideal institutions for{" "}
            <span className="highlight">student success</span>
          </h2>
          <p className="colleges-subtitle">
            Partnered with top global universities to help students achieve academic excellence.
          </p>
        </motion.div>

        <motion.div
          className="colleges-logos"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {universities.map((university, index) => (
            <motion.div
              key={index}
              className="college-card"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="college-logo"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={university.logo}
                  alt={university.name}
                  fill
                  className="logo-img"
                  sizes="(max-width: 768px) 80px, 120px"
                />
              </motion.div>
              <p className="college-name">{university.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}