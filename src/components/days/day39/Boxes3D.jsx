import React, { useState } from "react";
import "./Boxes3D.css";
import FloatingButton from "../../FloatingButton";

export default function Boxes3D() {
  const [isBig, setIsBig] = useState(true);

  const createBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        boxes.push(
          <div
            key={`${i}-${j}`}
            className="box-day39"
            style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}
          />
        );
      }
    }
    return boxes;
  };

  return (
    <section id="39" className="section-Boxes3D">
      <FloatingButton
        day="39"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day39"
        position="left"
      />
      <button className="magic-btn" onClick={() => setIsBig(!isBig)}>
        Magic 🎩
      </button>
      <div className={`boxes-day39 ${isBig ? "big" : ""}`}>{createBoxes()}</div>
    </section>
  );
}
