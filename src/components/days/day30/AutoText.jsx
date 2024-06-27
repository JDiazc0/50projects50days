import React, { useState, useEffect } from "react";
import "./AutoText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "../../FloatingButton";

export default function AutoText() {
  const phrase = "Follow Me on Instagram @dica_dev";
  const [speed, setSpeed] = useState(1);
  const [idx, setIdx] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIdx((prevIdx) => (prevIdx < phrase.length ? prevIdx + 1 : 1));
    }, 300 / speed);

    return () => clearTimeout(interval);
  }, [idx, speed, phrase.length]);

  const increase = () => {
    setSpeed((prevSpeed) => (prevSpeed < 10 ? prevSpeed + 1 : prevSpeed));
  };

  const decrease = () => {
    setSpeed((prevSpeed) => (prevSpeed > 1 ? prevSpeed - 1 : prevSpeed));
  };

  return (
    <>
      <section id="30" className="section-AutoText">
        <FloatingButton
          day="30"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day30"
          position="left"
        />
        <h3 className="h3-day30">{phrase.slice(0, idx)}</h3>
        <div className="buttons-speed">
          <p>Speed</p>
          <button
            className={`decrease ${speed <= 1 ? "disable" : ""}`}
            onClick={decrease}
            disabled={speed <= 1}>
            <FontAwesomeIcon icon={faMinus} className="icon-day30" />
          </button>
          <span className="speed-text">{speed}</span>
          <button
            className={`increase ${speed >= 10 ? "disable" : ""}`}
            onClick={increase}
            disabled={speed >= 10}>
            <FontAwesomeIcon icon={faPlus} className="icon-day30" />
          </button>
        </div>
      </section>
    </>
  );
}
