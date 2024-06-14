import React, { useState, useRef, useEffect, useCallback } from "react";
import "./DrawingApp.css";
import FloatingButton from "../../FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faEraser } from "@fortawesome/free-solid-svg-icons";

export default function DrawingApp() {
  const [size, setSize] = useState(10);
  const [color, setColor] = useState("black");
  const [isPressed, setIsPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const canvasRef = useRef();
  const ctx = useRef();

  const drawCircle = useCallback(
    (x, y) => {
      ctx.current.beginPath();
      ctx.current.arc(x, y, size, 0, Math.PI * 2);
      ctx.current.fillStyle = color;
      ctx.current.fill();
    },
    [color, size]
  );

  const drawLine = useCallback(
    (x1, y1, x2, y2) => {
      ctx.current.beginPath();
      ctx.current.moveTo(x1, y1);
      ctx.current.lineTo(x2, y2);
      ctx.current.strokeStyle = color;
      ctx.current.lineWidth = size * 2;
      ctx.current.stroke();
    },
    [color, size]
  );

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const startDrawing = (event) => {
        setIsPressed(true);
        setPosition({ x: event.offsetX, y: event.offsetY });
      };

      const finishDrawing = () => {
        setIsPressed(false);
        setPosition({ x: 0, y: 0 });
      };

      const draw = (event) => {
        if (!isPressed) return;
        const x2 = event.offsetX;
        const y2 = event.offsetY;

        drawCircle(x2, y2);
        drawLine(position.x, position.y, x2, y2);

        setPosition({ x: x2, y: y2 });
      };

      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mouseup", finishDrawing);
      canvas.addEventListener("mousemove", draw);

      return () => {
        canvas.removeEventListener("mousedown", startDrawing);
        canvas.removeEventListener("mouseup", finishDrawing);
        canvas.removeEventListener("mousemove", draw);
      };
    }
  }, [isPressed, position, drawCircle, drawLine]);

  const increase = () => {
    setSize(size + 5);
  };

  const decrease = () => {
    setSize(size - 5);
  };

  return (
    <>
      <section id="22" className="section-DrawingApp">
        <FloatingButton
          day="22"
          url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day22"
          position="left"
        />
        <canvas
          ref={canvasRef}
          className="canvas"
          width={1000}
          height={500}></canvas>
        <div className="toolbox">
          <button
            className={`decrease ${size <= 5 ? "disable" : ""}`}
            onClick={decrease}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="size">{size}</span>
          <button
            className={`increase ${size >= 50 ? "disable" : ""}`}
            onClick={increase}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <input
            type="color"
            className="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            className="clear"
            onClick={() =>
              ctx.current.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
              )
            }>
            <FontAwesomeIcon icon={faEraser} />
          </button>
        </div>
      </section>
    </>
  );
}
