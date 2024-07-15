import React, { useEffect, useRef } from "react";
import "./Hoverboard.css";
import FloatingButton from "../../FloatingButton";

export default function Hoverboard() {
  const containerRef = useRef(null);
  const SQUARES = 500;

  useEffect(() => {
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
    const container = containerRef.current;

    for (let i = 0; i < SQUARES; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => setColor(square));
      square.addEventListener("mouseout", () => removeColor(square));

      container.appendChild(square);
    }

    function setColor(element) {
      const color = getRandomColor();
      element.style.background = color;
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }

    function removeColor(element) {
      element.style.background = "#1d1d1d";
      element.style.boxShadow = "0 0 2px #000";
    }

    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Cleanup function to remove event listeners when the component is unmounted
    return () => {
      while (container.firstChild) {
        const square = container.firstChild;
        square.removeEventListener("mouseover", () => setColor(square));
        square.removeEventListener("mouseout", () => removeColor(square));
        container.removeChild(square);
      }
    };
  }, [SQUARES]);

  return (
    <section id="36" className="section-hoverBoard">
      <FloatingButton
        day="36"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day36"
        position="left"
      />
      <div className="container-day36" ref={containerRef}></div>
    </section>
  );
}
