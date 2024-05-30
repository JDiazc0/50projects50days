import React, { useState } from "react";

import "./SplitLandingPage.css";
import FloatingButton from "../../FloatingButton";

export default function SplitLandingPage() {
  const [cursorLeft, setCursorLeft] = useState(false);
  const [cursorRight, setCursorRight] = useState(false);

  const handleCursorInRight = () => {
    setCursorRight(true);
  };

  const handleCursorInLeft = () => {
    setCursorLeft(true);
  };

  const handleCursorOutRight = () => {
    setCursorRight(false);
  };

  const handleCursorOutLeft = () => {
    setCursorLeft(false);
  };

  return (
    <>
      <section id="7" className="section-LandingPage">
        <FloatingButton
          day="7"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day7"
          position="left"
        />
        <div
          className={`container-day7 ${
            cursorLeft === true
              ? "left-hover-day7"
              : cursorRight === true
              ? "right-hover-day7"
              : ""
          }`}>
          <div
            className="split-day7 left-day7"
            onMouseEnter={handleCursorInLeft}
            onMouseLeave={handleCursorOutLeft}>
            <h3 className="h3-day7">Burger</h3>
            <a
              href="https://github.com/bradtraversy/50projects50days?tab=readme-ov-file"
              className="btn-day7">
              Buy Now
            </a>
          </div>
          <div
            className="split-day7 right-day7"
            onMouseEnter={handleCursorInRight}
            onMouseLeave={handleCursorOutRight}>
            <h3 className="h3-day7">Pizza</h3>
            <a
              href="https://github.com/bradtraversy/50projects50days?tab=readme-ov-file"
              className="btn-day7">
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
