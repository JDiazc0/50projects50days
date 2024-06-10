import React, { useState, useEffect, useCallback } from "react";
import "./DrinkWater.css";
import FloatingButton from "../../FloatingButton";

export default function DrinkWater() {
  const totalCups = 8;
  const cupVolume = 250;
  const goalLiters = 2;

  const [glassDrinked, setGlassDrinked] = useState(
    new Array(totalCups).fill(false)
  );
  const [percentageGoal, setPercentageGoal] = useState(0);
  const [litersRemained, setLitersRemained] = useState(goalLiters);

  const handleCupClick = (idx) => {
    const newGlassDrinked = glassDrinked.map((isDranked, i) =>
      i === idx ? !isDranked : isDranked
    );
    setGlassDrinked(newGlassDrinked);
  };

  const updateBigCup = useCallback(() => {
    const fullCups = glassDrinked.filter(Boolean).length;
    const totalPercentage = (fullCups / totalCups) * 100;
    const remainedLiters = goalLiters - (cupVolume * fullCups) / 1000;

    setPercentageGoal(totalPercentage);
    setLitersRemained(remainedLiters);
  }, [glassDrinked, totalCups, goalLiters, cupVolume]);

  useEffect(() => {
    updateBigCup();
  }, [glassDrinked, updateBigCup]);

  return (
    <section id="16" className="section-DrinkWater">
      <FloatingButton
        day="16"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day16"
        position="left"
      />
      <h3 className="h3-day16">Drink Water</h3>
      <small className="small-day16">Goal: 2 Liters</small>
      <div className="cup-day16">
        <div
          className="remained-day16"
          style={{
            visibility: litersRemained === 0 ? "hidden" : "visible",
            height: litersRemained === 0 ? 0 : "auto",
          }}>
          <span>{litersRemained}L</span>
          <small>Remained</small>
        </div>
        <div
          className="percentage-day16"
          style={{
            visibility: percentageGoal === 0 ? "hidden" : "visible",
            height:
              percentageGoal === 0 ? 0 : `${(percentageGoal / 100) * 330}px`,
          }}>
          {percentageGoal > 0 && `${percentageGoal}%`}
        </div>
      </div>
      <p className="text-day16">
        Select how many glasses of water that you have drank
      </p>
      <div className="cups-day16">
        {glassDrinked.map((isDranked, index) => (
          <div
            key={index}
            className={`cup-day16 cup-small-day16 ${isDranked ? "full" : ""}`}
            onClick={() => handleCupClick(index)}>
            250 ml
          </div>
        ))}
      </div>
    </section>
  );
}
