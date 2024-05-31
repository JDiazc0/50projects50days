import React, { useEffect, useRef } from "react";

import "./FormWave.css";
import FloatingButton from "../../FloatingButton";

export default function FormWave() {
  const labelRef = useRef();

  useEffect(() => {
    const labels = labelRef.current.querySelectorAll("label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <>
      <section id="8" className="section-FormWave">
        <FloatingButton
          day="8"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day8"
          position="left"
        />
        <div className="background-day8">
          <div className="shape-day8"></div>
          <div className="shape-day8"></div>
        </div>
        <div className="container-day8">
          <h3>Please Login</h3>
          <form ref={labelRef} className="day8">
            <div className="form-control-day8">
              <input type="text" className="input-day8" required />
              <label className="label-day8">Email</label>
            </div>
            <div className="form-control-day8">
              <input type="password" className="input-day8" required />
              <label className="label-day8">Password</label>
            </div>
            <button className="form-button-day8">Login</button>
            <p className="text-day8">
              Don't have account? <b>Register</b>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
