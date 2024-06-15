import React from "react";
import "./KineticLoader.css";
import FloatingButton from "../../FloatingButton";

export default function KineticLoader() {
  return (
    <>
      <section id="23" className="section-KineticLoader">
        <FloatingButton
          day="23"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day23"
          position="left"
        />
        <div className="kinetic"></div>
      </section>
    </>
  );
}
