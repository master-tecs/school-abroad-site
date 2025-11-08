'use client';

import Image from 'next/image';
import './about.scss';

export default function About() {
  return (
    <section className="student-section">
      <div className="student-section__bg" />

      <div className="container">
        <div className="student-section__grid">
          {/* Left Column - Images */}
          <div className="student-section__images">
            <div className="student-section__img-wrapper main">
              <Image
                src="/assets/images/students/student-1.png"
                alt="Student abroad"
                width={480}
                height={480}
                priority
              />
            </div>

            <div className="student-section__img-wrapper secondary">
              <Image
                src="/assets/images/students/student-2.jpg"
                alt="Student experience"
                width={380}
                height={380}
                priority
              />
            </div>

            <div className="student-section__circle">
              <div className="inner-circle"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="student-section__content">
            <h6 className="tagline">Who Are We?</h6>
            <h2 className="title">About School Abroad</h2>

            <div className="text">
              <p>
                <strong>School Abroad</strong> (formerly <b>School Outside</b>) is a dedicated
                educational travel and global student recruitment agency committed to empowering
                students with transformative academic experiences.
              </p>
              <p>
                We bridge the gap between aspiring learners and renowned educational institutions
                worldwide, fostering opportunities that go beyond borders.
              </p>
              <p>
                From choosing the right school to navigating visa and application processes, our
                team provides personalized guidance every step of the way, ensuring a seamless
                journey toward academic success and global discovery.
              </p>
            </div>

            <a href="/about" className="primary-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}