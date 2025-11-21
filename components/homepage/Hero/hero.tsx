"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./hero.scss";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if script is already loaded to prevent duplicate declarations
    const existingScript = document.querySelector(
      'script[src="https://www-cdn.icef.com/scripts/iasbadgeid.js"]'
    );

    // Check if badgeContainer already exists (from previous script load)
    if (
      existingScript ||
      (typeof window !== "undefined" && "badgeContainer" in window)
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www-cdn.icef.com/scripts/iasbadgeid.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.id = "icef-badge-script"; // Add ID for easier identification
    document.body.appendChild(script);

    // Cleanup function to remove script if component unmounts (optional)
    return () => {
      // Note: We don't remove the script on unmount as it may be needed globally
      // The check above prevents re-adding it
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section className="hero">
      <motion.div
        className="hero__video"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {isLoaded && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="./assets/images/hero-poster.jpg"
            disablePictureInPicture
            controls={false}
          >
            <source src="./assets/images/hero.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h5 className="hero__subtitle" variants={itemVariants}>
          Welcome To <span>School Abroad</span>
        </motion.h5>

        <motion.h2 className="hero__title" variants={itemVariants}>
          Our <span className="highlight">mission is to</span> broaden horizons
          and Study abroad with clarity, confidence, and mentorship.
        </motion.h2>

        <motion.div
          className="hero__buttons"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="/student"
            className="btn btn--primary"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            I&apos;m a student
          </motion.a>
          <motion.a
            href="/partners"
            className="btn btn--outline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            I&apos;m a partner / Recruiter
          </motion.a>
          <motion.a
            href="/institutions"
            className="btn btn--outline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            I&apos;m an Institution
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
