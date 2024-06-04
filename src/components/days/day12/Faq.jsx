import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "../../FloatingButton";

const faqData = [
  { title: "Why shouldn't we trust atoms?", text: "They make up everything" },
  {
    title: "What do you call someone with no body and no nose?",
    text: "Nobody knows.",
  },
  {
    title: "What's the object-oriented way to become wealthy?",
    text: "Inheritance",
  },
  { title: "What is: 1 + 1?", text: "Depends on who are you asking." },
  { title: "Follow me on instagram", text: "@dica_dev" },
];

export default function Faq() {
  const [active, setActive] = useState(new Array(faqData.length).fill(false));

  const handleToggle = (index) => {
    setActive((prevActive) => {
      const newActive = [...prevActive];
      newActive[index] = !newActive[index];
      return newActive;
    });
  };

  return (
    <section id="12" className="section-Faq">
      <FloatingButton
        day="12"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day12"
        position="left"
      />
      <h3 className="h3-day12">Frequently Asked Questions</h3>
      <div className="faq-container-day12">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-day12 ${active[index] ? "active-day12" : ""}`}>
            <h5 className="faq-title-day12" onClick={() => handleToggle(index)}>
              {faq.title}
            </h5>
            <p className="faq-text-day12">{faq.text}</p>
            <button
              className="faq-toggle-day12"
              onClick={() => handleToggle(index)}>
              {active[index] ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
