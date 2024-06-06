import React from "react";

import "./AnimatedNav.css";
import { useState } from "react";
import FloatingButton from "../../FloatingButton";

export default function AnimatedNav() {
  const [active, setActive] = useState(false);

  const handleActiveNav = () => {
    setActive(!active);
  };

  return (
    <>
      <section id="14" className="section-AnimatedNav">
        <FloatingButton
          day="14"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day14"
          position="left"
        />
        <div></div>
        <nav className={`nav-day14 ${active ? "active-day14" : ""}`}>
          <ul className="ul-14">
            <li className="li-14">
              <a href="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day14">
                Home
              </a>
            </li>
            <li className="li-14">
              <a href="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day14">
                Works
              </a>
            </li>
            <li className="li-14">
              <a href="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day14">
                About
              </a>
            </li>
            <li className="li-14">
              <a href="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day14">
                Contact
              </a>
            </li>
          </ul>
          <button className="toggle-day14" onClick={handleActiveNav}>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </button>
        </nav>
      </section>
    </>
  );
}
