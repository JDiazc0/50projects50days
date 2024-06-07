import React, { useEffect, useState, useCallback } from "react";
import "./IncrementingCounter.css";
import FloatingButton from "../../FloatingButton";

export default function IncrementingCounter() {
  const [counts, setCounts] = useState([0, 0, 0]); // Inicializa los contadores en 0

  const counters = React.useMemo(
    () => [
      { target: 12000, label: "Twitter Followers" },
      { target: 5000, label: "YouTube Subscribers" },
      { target: 7500, label: "Facebook Fans" },
    ],
    []
  );

  const updateCounter = useCallback(
    (index) => {
      const target = counters[index].target;
      const increment = target / 200;

      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        if (newCounts[index] < target) {
          newCounts[index] = Math.min(
            target,
            Math.ceil(prevCounts[index] + increment)
          );
        }
        return newCounts;
      });
    },
    [counters]
  );

  useEffect(() => {
    const intervals = counters.map((_, index) =>
      setInterval(() => {
        updateCounter(index);
      }, 1)
    );

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [counters, updateCounter]);

  return (
    <section id="15" className="section-IncrementingCounter">
      <FloatingButton
        day="15"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day15"
        position="left"
      />
      {counters.map((counter, index) => (
        <div key={index} className="counter-container-day15">
          <div className="counter-day15">{counts[index]}</div>
          <span>{counter.label}</span>
        </div>
      ))}
    </section>
  );
}
