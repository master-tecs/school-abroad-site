"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./Countries.scss";

type Country = {
  name: string;
  image: string;
  flag: string;
};

const countries: Country[] = [
  {
    name: "Australia",
    image: "/assets/images/countries/australia.jpg",
    flag: "/assets/images/countries/australia-flag.svg",
  },
  {
    name: "UK",
    image: "/assets/images/countries/uk.jpg",
    flag: "/assets/images/countries/uk-flag.svg",
  },
  {
    name: "Canada",
    image: "/assets/images/countries/canada.jpg",
    flag: "/assets/images/countries/canada-flag.jpg",
  },
  {
    name: "Germany",
    image: "/assets/images/countries/germany.jpg",
    flag: "/assets/images/countries/germany-flag.webp",
  },
];

export default function Countries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
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
    <section className="countries" ref={ref}>
      <div className="container">
        <motion.h2
          className="countries__title"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Top <span className="highlight">Destinations</span>
        </motion.h2>

        <motion.div
          className="countries__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {countries.map((country, index) => (
            <motion.div key={country.name} variants={cardVariants}>
              <Link href="/student#destinations" className="country-card">
                <motion.div
                  className="country-card__image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="country-card__image"
                  />
                  <div className="country-card__overlay" />
                  <motion.div
                    className="country-card__flag"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      width={40}
                      height={40}
                      className="country-card__flag-img"
                    />
                  </motion.div>
                </motion.div>

                <h3 className="country-card__name">{country.name}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
