import React, { useState, useEffect, useRef } from "react";
import "./DoubleVerticalSlider.css";
import FloatingButton from "../../FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function DoubleVerticalSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideRightRef = useRef(null);
  const slideLeftRef = useRef(null);

  const slidesLength = 4;

  useEffect(() => {
    if (slideLeftRef.current) {
      slideLeftRef.current.style.top = `-${(slidesLength - 1) * 100}vh`;
    }
  }, [slidesLength]);

  const changeSlide = (direction) => {
    if (direction === "up") {
      setActiveSlideIndex((prevIndex) =>
        prevIndex + 1 > slidesLength - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "down") {
      setActiveSlideIndex((prevIndex) =>
        prevIndex - 1 < 0 ? slidesLength - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (slideRightRef.current && slideLeftRef.current) {
      slideRightRef.current.style.transform = `translateY(-${
        activeSlideIndex *
        document.querySelector(".slider-container").clientHeight
      }px)`;
      slideLeftRef.current.style.transform = `translateY(${
        activeSlideIndex *
        document.querySelector(".slider-container").clientHeight
      }px)`;
    }
  }, [activeSlideIndex]);

  return (
    <section id="26" className="section-DoubleVerticalSlider">
      <FloatingButton
        day="26"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day26"
        position="left"
      />
      <div className="slider-container">
        <div className="left-slide" ref={slideLeftRef}>
          <div style={{ backgroundColor: "#FD3555" }}>
            <h1>Nature flower</h1>
            <p>all in pink</p>
          </div>
          <div style={{ backgroundColor: "#2A86BA" }}>
            <h1>Bluuue Sky</h1>
            <p>with it's mountains</p>
          </div>
          <div style={{ backgroundColor: "#252E33" }}>
            <h1>Lonely castle</h1>
            <p>in the wilderness</p>
          </div>
          <div style={{ backgroundColor: "#FFB866" }}>
            <h1>Flying eagle</h1>
            <p>in the sunset</p>
          </div>
        </div>
        <div className="right-slide" ref={slideRightRef}>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')",
            }}></div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')",
            }}></div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')",
            }}></div>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')",
            }}></div>
        </div>
        <div className="action-buttons">
          <button className="down-button" onClick={() => changeSlide("down")}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <button className="up-button" onClick={() => changeSlide("up")}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </section>
  );
}
