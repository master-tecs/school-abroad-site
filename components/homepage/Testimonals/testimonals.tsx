"use client";
import Image from "next/image";
import { FC } from "react";
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
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title">Our Testimonials</span>
          <h2 className="section-title">
            Student <span className="highlight">Success</span> Stories
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-avatar-wrapper">
                <div className="testimonial-avatar">
                  <Image src={t.avatar} alt={t.name} width={100} height={100} />
                </div>
                <span className="quote-icon">
                  <FormatQuoteIcon fontSize="large" />
                </span>
              </div>
              <div className="testimonial-info">
                <h5 className="testimonial-name">{t.name}</h5>
                <p className="testimonial-program">{t.program}</p>
                <ul className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Star
                        className={`star ${i < t.rating ? "filled" : ""}`}
                        size={16}
                      />
                    </li>
                  ))}
                </ul>
                <p className="testimonial-comment">{t.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
