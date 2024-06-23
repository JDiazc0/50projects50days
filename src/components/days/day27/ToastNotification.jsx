import React, { useState } from "react";
import "./ToastNotification.css";
import FloatingButton from "../../FloatingButton";

export default function ToastNotification() {
  const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
  ];
  const types = ["info", "success", "error"];
  const [notifications, setNotifications] = useState([]);

  const createNotification = (message = null, type = null) => {
    const newNotification = {
      id: Date.now(),
      message: message ? message : getRandomMessage(),
      type: type ? type : getRandomType(),
    };

    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);

    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notif) => notif.id !== newNotification.id)
      );
    }, 3000);
  };

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const getRandomType = () => {
    return types[Math.floor(Math.random() * types.length)];
  };

  return (
    <section id="27" className="section-ToastNotification">
      <FloatingButton
        day="27"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day27"
        position="left"
      />
      <div id="toasts">
        {notifications.map((notif) => (
          <div key={notif.id} className={`toast ${notif.type}`}>
            {notif.message}
          </div>
        ))}
      </div>
      <button className="btn-day27" onClick={() => createNotification()}>
        Show Notification
      </button>
    </section>
  );
}
