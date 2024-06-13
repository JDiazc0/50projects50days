import React, { useState, useRef } from "react";
import "./DragAndDrop.css";
import FloatingButton from "../../FloatingButton";

export default function DragAndDrop() {
  const fillRef = useRef(null);

  const dragStart = (e) => {
    e.target.className += " hold";
    setTimeout(() => (e.target.className = "invisible"), 0);
  };

  const dragEnd = (e) => {
    e.target.className = "fill";
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
    e.target.className += " hovered";
  };

  const dragLeave = (e) => {
    e.target.className = "empty";
  };

  const dragDrop = (e) => {
    e.target.className = "empty";
    e.target.append(fillRef.current);
  };

  return (
    <section id="21" className="section-DragAndDrop">
      <FloatingButton
        day="21"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day21"
        position="left"
      />
      <div
        className="empty"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}>
        <div
          className="fill"
          draggable="true"
          onDragStart={dragStart}
          onDragEnd={dragEnd}
          ref={fillRef}></div>
      </div>
      {Array(4)
        .fill(0)
        .map((_, indx) => (
          <div
            key={indx}
            className="empty"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}></div>
        ))}
    </section>
  );
}
