import React, { useState, useEffect } from "react";
import "./BlurryLoading.css";
import FloatingButton from "../../FloatingButton";

export default function BlurryLoading() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prevLoad) => {
        if (prevLoad >= 100) {
          clearInterval(interval);
          return prevLoad;
        }
        return prevLoad + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  const opacity = scale(load, 0, 100, 1, 0);
  const blur = scale(load, 0, 100, 30, 0);

  return (
    <>
      <section id="5" className="section-BlurryLoading">
        <FloatingButton
          day="5"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day5"
          position="left"
        />

        <section
          className="section-day5"
          style={{ filter: `blur(${blur}px)` }}></section>
        <div
          className="loading-text-day5"
          style={{ opacity: `${opacity}` }}>{`${load}%`}</div>
      </section>
    </>
  );
}
