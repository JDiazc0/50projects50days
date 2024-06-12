import React from "react";
import "./RippleEffect.css";
import FloatingButton from "../../FloatingButton";

export default function RippleEffect() {
  const handleRipple = (event) => {
    const button = event.target;

    const x = event.clientX;
    const y = event.clientY;

    const buttonRect = button.getBoundingClientRect();
    const buttonTop = buttonRect.top;
    const buttonLeft = buttonRect.left;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  };

  return (
    <>
      <section id="20" className="section-RippleEffect">
        <FloatingButton
          day="20"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day20"
          position="left"
        />
        <button className="ripple" onClick={handleRipple}>
          Click me
        </button>
      </section>
    </>
  );
}
