import React, { useState } from "react";

import "./RandomChoicePicker.css";
import FloatingButton from "../../FloatingButton";

export default function RandomChoicePicker() {
  const [choiceList, setChoiceList] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [randomIndex, setRandomIndex] = useState(null);

  const handleChoiceCreator = (event) => {
    const value = event.target.value;

    setCurrentText(value);
    const choices = value
      .split(",")
      .map((choice) => choice.trim())
      .filter((choice) => choice !== "");
    setChoiceList(choices);
    setRandomIndex(null);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      startRandomSelection();
    } else {
      return;
    }
  };

  const startRandomSelection = () => {
    if (choiceList.length === 0) return;
    let selectedIdx = null;
    const intervalId = setInterval(() => {
      selectedIdx = Math.floor(Math.random() * choiceList.length);
      setRandomIndex(selectedIdx);
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      setRandomIndex(selectedIdx);
      setCurrentText("");
    }, 3000);
  };

  return (
    <>
      <section id="13" className="section-RandomChoicePicker">
        <FloatingButton
          day="13"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day13"
          position="left"
        />
        <div className="container-day13">
          <h3 className="h3-day13">
            Enter all of the choices divided by a comma (',') <br />
            <strong> Press enter when you're done </strong>
          </h3>
          <textarea
            placeholder="Enter choices here..."
            id="textarea-day13"
            className="textarea-day13"
            onChange={handleChoiceCreator}
            onKeyPress={handleEnterPress}
            value={currentText}></textarea>
        </div>
        <div className="container-tags-day13">
          {choiceList.map((choice, index) => (
            <div
              className={`tags-day13 ${
                index === randomIndex ? "highlight-13" : ""
              }`}
              key={index}>
              {choice}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
