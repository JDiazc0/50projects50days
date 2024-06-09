import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./RotatingNav.css";
import FloatingButton from "../../FloatingButton";

export default function RotatingNav() {
  const [navState, setNavState] = useState(false);

  const changeNavState = () => {
    setNavState(!navState);
  };
  return (
    <>
      <section id="3" className="section-RotatingNav">
        <FloatingButton
          day="3"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day3"
          position="right"
        />
        <div
          className={`container-day3 ${navState === true ? "show-nav" : ""}`}>
          <div className="circle-container-day3">
            <div className="circle-day3">
              <button
                className="btn-day3"
                id="close-day3"
                onClick={changeNavState}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button
                className="btn-day3"
                id="open-day3"
                onClick={changeNavState}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
          <div className="content-day3">
            <h3>50 Projects in 50 Days</h3>
            <small>Day 3, Rotating Nav</small>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus suscipit eveniet eos expedita delectus tempora esse odio
              eaque at fugit reprehenderit quia, similique saepe sit ducimus
              quae neque autem quibusdam. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Cum distinctio animi mollitia
              tempora omnis aliquam incidunt officia, provident sunt atque,
              esse, nulla fuga commodi rem totam laborum! Earum, deserunt
              soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptates dolore aliquid distinctio beatae corrupti
              provident praesentium amet, ipsa ipsum, laudantium sapiente unde
              mollitia nemo voluptas repudiandae incidunt sequi inventore.
            </p>
          </div>
        </div>
        <nav className="nav-day3">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </section>
    </>
  );
}
