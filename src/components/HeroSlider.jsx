import React, { useState, useEffect } from 'react';
import '../styles/heroSlider.css';

import pinkCollage from '../assets/pink-collage.png';
import yellowCollage from '../assets/yellow-collage.png';

const slides = [
  {
    id: 1,
    image: pinkCollage,
    title: "Blush Collection",
    subtitle: "Zərif çəhrayı tonlarda ən yaxşı kosmetika məhsulları"
  },
  {
    id: 2,
    image: yellowCollage,
    title: "Bloom Collection",
    subtitle: "Sarı günəş şüası kimi parıldayan qulluq vasitələri"
  }
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <div className="hero-text">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};