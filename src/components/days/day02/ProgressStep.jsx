import React, { useState } from "react";

import FloatingButton from "../../FloatingButton";
import "./ProgressStep.css";

export default function ProgressStep() {
  const [activeStep, setActiveStep] = useState(1);

  const next = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prev = () => {
    setActiveStep((prev) => Math.min(prev - 1));
  };

  const steps = [1, 2, 3, 4, 5];
  return (
    <>
      <section id="2" className="section-ProgressStep">
        <FloatingButton
          day="2"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day2"
          position="left"
        />
        <div className="container-day2">
          <div className="progress-container">
            <div
              className="progress"
              id="progress"
              style={{
                width: ((activeStep - 1) / (steps.length - 1)) * 100 + "%",
              }}
            />
            {steps.map((step, index) => (
              <div
                key={step}
                className={`circle ${index < activeStep ? "active" : ""}`}>
                {step}
              </div>
            ))}
          </div>
          <button
            className="btn-step prev"
            disabled={activeStep === 1}
            onClick={prev}>
            Prev
          </button>
          <button
            className="btn-step next"
            disabled={activeStep === steps.length}
            onClick={next}>
            Next
          </button>
        </div>
      </section>
    </>
  );
}
