"use client";

import { useState } from "react";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import "./whyus.scss";

export default function WhyUs() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <section className="whyus">
      <div className="container">
        <div className="whyus__grid">
          {/* LEFT: TEXT CONTENT */}
          <div className="whyus__content">
            <h6 className="whyus__tagline">Why Us</h6>
            <h2 className="whyus__title">Why Choose School Abroad?</h2>

            <div className="whyus__points">
              <div className="whyus__point">
                <h5>Expert Guidance</h5>
                <p>
                  Our experienced counsellors provide personalized guidance to help
                  you choose the right course and university. Every student is
                  unique, and we ensure your path reflects that.
                </p>
              </div>

              <div className="whyus__point">
                <h5>Comprehensive Support</h5>
                <p>
                  From application to visa processing, we guide you every step of
                  the way — ensuring perfect documentation and a smooth journey.
                </p>
              </div>

              <div className="whyus__point">
                <h5>University Partnerships</h5>
                <p>
                  Our global network with top universities gives you exclusive
                  access, priority applications, and valuable academic
                  opportunities.
                </p>
              </div>
            </div>

            <a href="/about" className="whyus__btn">
              Read More
            </a>
          </div>

          {/* RIGHT: VIDEO */}
          <div className="whyus__video">
            <div className="video__wrapper">
              <video
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="video"
              >
                <source src="/assets/images/students/us.mp4" type="video/mp4" />
              </video>

              <button
                className="video__mute"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeOff /> : <VolumeUp />}
              </button>

              <div className="video__overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}