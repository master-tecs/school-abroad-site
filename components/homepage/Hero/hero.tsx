"use client";

import { useEffect, useState } from "react";
import "./hero.scss";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www-cdn.icef.com/scripts/iasbadgeid.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="hero">
      <div className="hero__video">
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
      </div>

      <div className="hero__content">
        <h5 className="hero__subtitle">
          Welcome To <span>School Abroad</span>
        </h5>

        <h2 className="hero__title">
          Our <span className="highlight">mission is to</span> broaden horizons
          and Study abroad with clarity, confidence, and mentorship.
        </h2>

        <div className="hero__buttons">
          <a href="/student" className="btn btn--primary">
            I&apos;m a student
          </a>
          <a href="/partners" className="btn btn--outline">
            I&apos;m a partner / Recruiter
          </a>
          <a href="/institutions" className="btn btn--outline">
            I&apos;m an Institution
          </a>
        </div>
      </div>
    </section>
  );
}