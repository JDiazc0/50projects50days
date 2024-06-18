import React, { useState, useEffect, useRef } from "react";
import "./Elevator.css";

import elevator from "./music/elevator.mp3";
import ding from "./music/ding.mp3";
import FloatingButton from "../../FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Elevator() {
  const [isScrolling, setIsScrolling] = useState(false);
  const elevatorAudioRef = useRef(null);

  const playSound = (sound, loop = false) => {
    const audio = new Audio(sound);
    audio.loop = loop;
    audio.play();
    return audio;
  };

  const scrollStep = (start, end, step, delay) => {
    if (start > end) {
      window.scrollTo(0, start - step);
      setTimeout(() => scrollStep(start - step, end, step, delay), delay);
    } else {
      window.scrollTo(0, end);
      setIsScrolling(false);
    }
  };

  const scrollToTop = () => {
    setIsScrolling(true);

    const start = window.scrollY;
    const end = 0;
    const step = 10;
    const delay = 15;

    scrollStep(start, end, step, delay);

    elevatorAudioRef.current = playSound(elevator, true);
  };

  useEffect(() => {
    if (!isScrolling && elevatorAudioRef.current) {
      elevatorAudioRef.current.pause();
      playSound(ding);
    }
  }, [isScrolling]);

  return (
    <section className="section-elevator">
      <FloatingButton
        day="Lib"
        url="https://tholman.com/elevator.js/"
        position="left"
      />
      <button className="elevator-btn" onClick={scrollToTop}>
        <FontAwesomeIcon className="icon-btn" icon={faCaretUp} />
        ¡Arriba!
      </button>
    </section>
  );
}
