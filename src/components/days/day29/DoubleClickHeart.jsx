import React, { useState } from "react";
import "./DoubleClickHeart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "../../FloatingButton";

export default function DoubleClickHeart() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [clickTime, setClickTime] = useState(0);
  const [hearts, setHearts] = useState([]);

  const doubleClick = (event) => {
    const currentTime = new Date().getTime();
    if (clickTime === 0) {
      setClickTime(currentTime);
    } else {
      if (currentTime - clickTime < 800) {
        createHeart(event);
        setClickTime(0);
      } else {
        setClickTime(currentTime);
      }
    }
  };

  const createHeart = (event) => {
    const loveMe = event.target;

    const x = event.clientX;
    const y = event.clientY;

    const pointMap = loveMe.getBoundingClientRect();
    const pointTop = pointMap.top;
    const pointLeft = pointMap.left;

    const xInside = x - pointLeft;
    const yInside = y - pointTop;

    const heart = {
      id: Date.now(),
      xInside,
      yInside,
    };

    setHearts((prevHearts) => [...prevHearts, heart]);
    setLikeCounter((prev) => prev + 1);

    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
    }, 1000);
  };

  return (
    <>
      <section id="29" className="section-DoubleClickHeart">
        <FloatingButton
          day="29"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day29"
          position="left"
        />
        <h3 className="h3-day29">
          Double click on the image to{" "}
          <FontAwesomeIcon icon={faHeart} className="icon-day29" />{" "}
        </h3>
        <small className="small-day29">You liked {likeCounter} times</small>
        <div className="love-me" onClick={doubleClick}>
          {hearts.map((heart) => (
            <FontAwesomeIcon
              key={heart.id}
              icon={faHeart}
              className="like-animation"
              style={{
                position: "absolute",
                top: `${heart.yInside}px`,
                left: `${heart.xInside}px`,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
