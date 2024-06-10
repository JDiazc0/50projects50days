import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./BackgroundSlider.css";

export default function BackgroundSlider() {
  const backgrounds = useMemo(
    () => [
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
      "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
      "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    ],
    []
  );

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
  };

  useEffect(() => {
    document.getElementById(
      "18"
    ).style.backgroundImage = `url(${backgrounds[activeSlide]})`;
  }, [activeSlide, backgrounds]);

  const handlePrevSlide = () => {
    console.log(backgrounds[0]);
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + backgrounds.length) % backgrounds.length
    );
  };

  return (
    <section id="18" className="section-BackgroundSlider">
      <div className="slider-container">
        {backgrounds.map((background, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${background})` }}></div>
        ))}
      </div>
      <button className="arrow left-arrow" onClick={handlePrevSlide}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="arrow right-arrow" onClick={handleNextSlide}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section>
  );
}
