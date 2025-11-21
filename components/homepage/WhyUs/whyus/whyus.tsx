"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import "./whyus.scss";

export default function WhyUs() {
  const [isMuted, setIsMuted] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleMute = () => setIsMuted(!isMuted);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const pointVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="whyus" ref={ref}>
      <div className="container">
        <motion.div
          className="whyus__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            className="whyus__content"
            variants={contentVariants}
          >
            <motion.h6
              className="whyus__tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Why Us
            </motion.h6>
            <motion.h2
              className="whyus__title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Why Choose School Abroad?
            </motion.h2>

            <motion.div
              className="whyus__points"
              variants={containerVariants}
            >
              <motion.div className="whyus__point" variants={pointVariants}>
                <h5>Expert Guidance</h5>
                <p>
                  Our experienced counsellors provide personalized guidance to help
                  you choose the right course and university. Every student is
                  unique, and we ensure your path reflects that.
                </p>
              </motion.div>

              <motion.div className="whyus__point" variants={pointVariants}>
                <h5>Comprehensive Support</h5>
                <p>
                  From application to visa processing, we guide you every step of
                  the way — ensuring perfect documentation and a smooth journey.
                </p>
              </motion.div>

              <motion.div className="whyus__point" variants={pointVariants}>
                <h5>University Partnerships</h5>
                <p>
                  Our global network with top universities gives you exclusive
                  access, priority applications, and valuable academic
                  opportunities.
                </p>
              </motion.div>
            </motion.div>

            <motion.a
              href="/about-us"
              className="whyus__btn"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Read More
            </motion.a>
          </motion.div>

          {/* RIGHT: VIDEO */}
          <motion.div className="whyus__video" variants={videoVariants}>
            <motion.div
              className="video__wrapper"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="video"
              >
                <source src="/assets/images/students/us.mp4" type="video/mp4" />
              </video>

              <motion.button
                className="video__mute"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? <VolumeOff /> : <VolumeUp />}
              </motion.button>

              <div className="video__overlay" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}