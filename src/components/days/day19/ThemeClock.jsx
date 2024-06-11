import React, { useState, useEffect } from "react";
import "./ThemeClock.css";
import FloatingButton from "../../FloatingButton";

export default function ThemeClock() {
  const [time, setTime] = useState(new Date());

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hoursForClock = hours % 12;

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <>
      <section id="19" className="section-ThemeClock">
        <FloatingButton
          day="19"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day19"
          position="left"
        />

        <div className="clock-container">
          <div className="clock">
            <div
              className="needle hour"
              style={{
                transform: `translate(-50%, -100%) rotate(${scale(
                  hoursForClock,
                  0,
                  12,
                  0,
                  360
                )}deg)`,
              }}></div>
            <div
              className="needle minute"
              style={{
                transform: `translate(-50%, -100%) rotate(${scale(
                  minutes,
                  0,
                  60,
                  0,
                  360
                )}deg)`,
              }}></div>
            <div
              className="needle second"
              style={{
                transform: `translate(-50%, -100%) rotate(${scale(
                  seconds,
                  0,
                  60,
                  0,
                  360
                )}deg)`,
              }}></div>
            <div className="center-point"></div>
          </div>
          <div className="time">
            {hoursForClock}:{minutes < 10 ? `0${minutes}` : minutes} {ampm}
          </div>
          <div className="date">
            {days[day]}, {months[month]} <span className="circle">{date}</span>
          </div>
        </div>
      </section>
    </>
  );
}
