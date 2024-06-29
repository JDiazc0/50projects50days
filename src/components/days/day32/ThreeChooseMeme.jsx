import React, { useState } from "react";
import "./ThreeChooseMeme.css";
import FloatingButton from "../../FloatingButton";

export default function ThreeChooseMeme() {
  const [trustYourFriends, setTrustYourFriends] = useState(false);
  const [haveGirlfriend, setHaveGirlfriend] = useState(false);
  const [readBerserk, setReadBerserk] = useState(false);

  const handleToggle = (type) => {
    switch (type) {
      case "trustYourFriends":
        if (!trustYourFriends && haveGirlfriend && readBerserk) {
          setReadBerserk(false);
        }
        setTrustYourFriends(!trustYourFriends);
        break;
      case "haveGirlfriend":
        if (!haveGirlfriend && trustYourFriends && readBerserk) {
          setTrustYourFriends(false);
        }
        setHaveGirlfriend(!haveGirlfriend);
        break;
      case "readBerserk":
        if (!readBerserk && trustYourFriends && haveGirlfriend) {
          setHaveGirlfriend(false);
        }
        setReadBerserk(!readBerserk);
        break;
      default:
        break;
    }
  };

  return (
    <section id="32" className="section-ThreeChooseMeme">
      <FloatingButton
        day="32"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day32"
        position="left"
      />
      <h3 className="h3-day32">Having a good life:</h3>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="trustYourFriends"
          className="toggle"
          checked={trustYourFriends}
          onChange={() => handleToggle("trustYourFriends")}
        />
        <label htmlFor="trustYourFriends" className="label">
          <div className="ball"></div>
        </label>
        <span>Trust your friends</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="haveGirlfriend"
          className="toggle"
          checked={haveGirlfriend}
          onChange={() => handleToggle("haveGirlfriend")}
        />
        <label htmlFor="haveGirlfriend" className="label">
          <div className="ball"></div>
        </label>
        <span>Have a girlfriend</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="readBerserk"
          className="toggle"
          checked={readBerserk}
          onChange={() => handleToggle("readBerserk")}
        />
        <label htmlFor="readBerserk" className="label">
          <div className="ball"></div>
        </label>
        <span>Read Berserk</span>
      </div>
    </section>
  );
}
