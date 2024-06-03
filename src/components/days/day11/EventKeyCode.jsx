import React, { useEffect } from "react";

import "./EventKeyCode.css";
import { useState } from "react";
import FloatingButton from "../../FloatingButton";

export default function EventKeyCode() {
  const [active, setActive] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventKey = (event) => {
      setActive(true);
      setEvent(event);
    };

    window.addEventListener("keydown", eventKey);
    return () => window.addEventListener("keydown", eventKey);
  });
  return (
    <>
      <section id="11" className="section-EventKeyCode">
        <FloatingButton
          day="11"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day11"
          position="left"
        />

        {active === false ? (
          "Press any key to get keyCode"
        ) : (
          <div className="container-day11">
            <div className="key-11">
              {event.key === " " ? "Space" : event.key}
              <small className="small-day11">event.key</small>
            </div>
            <div className="key-11">
              {event.keyCode}
              <small className="small-day11">event.keyCode</small>
            </div>
            <div className="key-11">
              {event.code}
              <small className="small-day11">event.code</small>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
