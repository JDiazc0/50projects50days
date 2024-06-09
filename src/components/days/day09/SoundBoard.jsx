import React, { useState } from "react";

import FloatingButton from "../../FloatingButton";
import "./SoundBoard.css";

import bingchilling from "./sounds/bingChilling.mp3";
import dejavu from "./sounds/dejaVu.mp3";
import emotionalDamage from "./sounds/EmotionalDamage.mp3";
import errorMeme from "./sounds/errorMeme.mp3";
import fartMeme from "./sounds/fartMeme.mp3";
import frenchMeme from "./sounds/frenchMeme.mp3";

export default function SoundBoard() {
  const [currentAudio, setCurrentAudio] = useState(null);

  const sounds = [
    { name: "Bing Chilling", sound: bingchilling },
    { name: "Deja Vu", sound: dejavu },
    { name: "Emotional Damage", sound: emotionalDamage },
    { name: "Error", sound: errorMeme },
    { name: "French", sound: frenchMeme },
    { name: "Fart", sound: fartMeme },
  ];

  const playSound = (sound) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(sound);
    audio.play();

    setCurrentAudio(audio);
  };

  return (
    <>
      <section id="9" className="section-SoundBoard">
        <FloatingButton
          day="9"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day9"
          position="left"
        />
        <div className="button-sounds">
          {sounds.map((sound, i) => (
            <div key={i}>
              <button
                className="btn-day9"
                onClick={() => playSound(sound.sound)}>
                {sound.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
