"use client";

import Image from "next/image";
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
  return (
    <section className="countries">
      <div className="container">
        <h2 className="countries__title">
          Top <span className="highlight">Destinations</span>
        </h2>

        <div className="countries__grid">
          {countries.map((country) => (
            <div key={country.name} className="country-card">
              <div className="country-card__image-wrapper">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="country-card__image"
                />
                <div className="country-card__overlay" />
                <div className="country-card__flag">
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    width={40}
                    height={40}
                    className="country-card__flag-img"
                  />
                </div>
              </div>

              <h3 className="country-card__name">{country.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
