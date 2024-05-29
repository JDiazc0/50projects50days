import React, { useState, useEffect } from "react";
import "./ScrollAnimation.css";
import FloatingButton from "../../FloatingButton";

export default function ScrollAnimation() {
  const [visible, setVisible] = useState(new Array(12).fill(false));

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      const boxes = document.querySelectorAll(".box-day6");

      boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          setVisible((prevVisible) => {
            const newVisible = [...prevVisible];
            newVisible[index] = true;
            return newVisible;
          });
        } else {
          setVisible((prevVisible) => {
            const newVisible = [...prevVisible];
            newVisible[index] = false;
            return newVisible;
          });
        }
      });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes();

    return () => window.removeEventListener("scroll", checkBoxes);
  }, []);

  return (
    <>
      <section id="6" className="section-ScrollAnimation">
        <FloatingButton
          day="6"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day6"
          position="left"
        />
        <h3 className="h3-day6">Scroll Animation</h3>
        {visible.map((isVisible, index) => (
          <div
            key={index}
            className={`box-day6 ${isVisible ? "show-day6" : ""}`}>
            <h5 className="h5-day6">Content</h5>
          </div>
        ))}
      </section>
    </>
  );
}
