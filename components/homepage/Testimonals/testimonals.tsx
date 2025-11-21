"use client";
import Image from "next/image";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./testimonials.scss";

interface Testimonial {
  name: string;
  program: string;
  comment: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Akosua B… Ghana",
    program: "Computer Science in Canada",
    comment:
      "Choosing School Abroad for my Canada study journey was the best decision I made! Their expertise in handling my admission and visa process was outstanding...",
    rating: 5,
    avatar: "/assets/images/students/Akosua.jpeg",
  },
  {
    name: "Dina Adeleke",
    program: "Arts and Design in Canada",
    comment:
      "School Abroad made my dream of studying in Canada a reality! From initial application to passport request, their team was efficient and supportive...",
    rating: 5,
    avatar: "/assets/images/students/Dina.jpeg",
  },
  // Add more testimonials as needed
];

const Testimonials: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="testimonials-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="sub-title">Our Testimonials</span>
          <h2 className="section-title">
            Student <span className="highlight">Success</span> Stories
          </h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="testimonial-avatar-wrapper"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-avatar">
                  <Image src={t.avatar} alt={t.name} width={100} height={100} />
                </div>
                <motion.span
                  className="quote-icon"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <FormatQuoteIcon fontSize="large" />
                </motion.span>
              </motion.div>
              <div className="testimonial-info">
                <h5 className="testimonial-name">{t.name}</h5>
                <p className="testimonial-program">{t.program}</p>
                <ul className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + idx * 0.2 + i * 0.1 }}
                    >
                      <Star
                        className={`star ${i < t.rating ? "filled" : ""}`}
                        size={16}
                      />
                    </motion.li>
                  ))}
                </ul>
                <p className="testimonial-comment">{t.comment}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
