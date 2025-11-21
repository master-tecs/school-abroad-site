"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./about.scss";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="student-section" ref={ref}>
      <div className="student-section__bg" />

      <div className="container">
        <motion.div
          className="student-section__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Images */}
          <motion.div
            className="student-section__images"
            variants={imageVariants}
          >
            <motion.div
              className="student-section__img-wrapper main"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/images/students/student-1.png"
                alt="Student abroad"
                width={480}
                height={480}
                priority
              />
            </motion.div>

            <motion.div
              className="student-section__img-wrapper secondary"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/images/students/student-2.jpg"
                alt="Student experience"
                width={380}
                height={380}
                priority
              />
            </motion.div>

            <motion.div
              className="student-section__circle"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="inner-circle"></div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="student-section__content"
            variants={contentVariants}
          >
            <motion.h6
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Who Are We?
            </motion.h6>
            <motion.h2
              className="title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              About School Abroad
            </motion.h2>

            <motion.div
              className="text"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p>
                <strong>School Abroad</strong> (formerly <b>School Outside</b>)
                is a dedicated educational travel and global student recruitment
                agency committed to empowering students with transformative
                academic experiences.
              </p>
              <p>
                We bridge the gap between aspiring learners and renowned
                educational institutions worldwide, fostering opportunities that
                go beyond borders.
              </p>
              <p>
                From choosing the right school to navigating visa and
                application processes, our team provides personalized guidance
                every step of the way, ensuring a seamless journey toward
                academic success and global discovery.
              </p>
            </motion.div>

            <motion.a
              href="/about-us"
              className="primary-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
