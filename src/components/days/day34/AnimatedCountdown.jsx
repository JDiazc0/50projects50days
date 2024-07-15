import React, { useState, useEffect, useRef } from "react";
import "./AnimatedCountdown.css";
import FloatingButton from "../../FloatingButton";

export default function AnimatedCountdown() {
  const [isCounting, setIsCounting] = useState(true);
  const numsRef = useRef([]);
  const counterRef = useRef(null);
  const finalMessageRef = useRef(null);

  useEffect(() => {
    if (isCounting) {
      runAnimation();
    }
  }, [isCounting]);

  const resetDOM = () => {
    counterRef.current.classList.remove("hide");
    finalMessageRef.current.classList.remove("show");
    numsRef.current.forEach((num, idx) => {
      num.classList.value = "";
      if (idx === 0) {
        num.classList.add("in");
      }
    });
  };

  const runAnimation = () => {
    numsRef.current.forEach((num, idx) => {
      const nextToLast = numsRef.current.length - 1;
      const handleAnimationEnd = (e) => {
        if (e.animationName === "goIn" && idx !== nextToLast) {
          num.classList.remove("in");
          num.classList.add("out");
        } else if (e.animationName === "goOut" && numsRef.current[idx + 1]) {
          numsRef.current[idx + 1].classList.add("in");
        } else {
          counterRef.current.classList.add("hide");
          finalMessageRef.current.classList.add("show");
        }
      };
      num.addEventListener("animationend", handleAnimationEnd);
    });
  };

  const handleReplay = () => {
    resetDOM();
    setIsCounting(true);
  };

  return (
    <section id="34" className="section-AnimatedCountdown">
      <FloatingButton
        day="34"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day34"
        position="left"
      />
      <div className="counter-day34" ref={counterRef}>
        <div className="nums">
          {[3, 2, 1, 0].map((num, idx) => (
            <span
              key={idx}
              className={idx === 0 ? "in" : ""}
              ref={(el) => (numsRef.current[idx] = el)}>
              {num}
            </span>
          ))}
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className="final" ref={finalMessageRef}>
        <h1>GO</h1>
        <button id="replay" className="btn-replay" onClick={handleReplay}>
          Replay
        </button>
      </div>
    </section>
  );
}
