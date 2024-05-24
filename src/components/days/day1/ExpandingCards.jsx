import React, { useState } from "react";

import guts from "./img/guts.jpg";
import kira from "./img/kira.jpg";
import johan from "./img/johan_liebert.jpg";
import tenma from "./img/tenma.png";
import thorfinn from "./img/thorfinn.jpg";

import "./ExpandingCards.css";
import FloatingButton from "../../FloatingButton";

export default function ExpandingCards() {
  const [activePanel, setActivePanel] = useState(0);

  const handlePanelClick = (panelIndex) => {
    setActivePanel(panelIndex);
  };

  const images = [guts, kira, tenma, thorfinn, johan];
  const names = ["Guts", "Kira", "Tenma", "Thorfinn", "Johan"];

  return (
    <>
      <section id="1" className="section-Expanding">
        <FloatingButton
          day="1"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day1"
          position="left"
        />
        <div className="container">
          {images.map((image, index) => (
            <div
              key={names[index]}
              className={`panel ${activePanel === index ? "active" : ""}`}
              onClick={() => handlePanelClick(index)}
              style={{ backgroundImage: `url(${image})` }}>
              <h2>{names[index]}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
