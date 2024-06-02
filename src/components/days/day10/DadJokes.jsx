import React, { useEffect, useState } from "react";

import "./DadJokes.css";
import FloatingButton from "../../FloatingButton";

export default function DadJokes() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleNewJoke = () => {
    fetchJoke();
  };

  return (
    <>
      <section id="10" className="section-DadJokes">
        <FloatingButton
          day="10"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day10"
          position="left"
        />
        <div className="container-day10">
          <h3 className="h3-day10">Don't Laught Challenge</h3>
          <div className="joke-day10">{joke}</div>
          <button className="btn-joke-day10" onClick={handleNewJoke}>
            Get Another Joke
          </button>
        </div>
      </section>
    </>
  );
}
