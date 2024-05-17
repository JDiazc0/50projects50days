import React from "react";

import "../utils/styles/FloatingButton.css";

export default function FloatingButton(props) {
  const { day, url, position } = props;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`floating-button ${position}`}>
        {day}
      </a>
    </>
  );
}
