import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./ImageCarousel.css";

export default function ImageCarousel() {
  const [idx, setIdx] = useState(0);
  const imgsRef = useRef(null);
  const intervalRef = useRef(null);

  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
    ],
    []
  );

  const run = useCallback(() => {
    setIdx((prevIdx) => (prevIdx + 1) % images.length);
  }, [images]);

  useEffect(() => {
    intervalRef.current = setInterval(run, 2000);

    return () => clearInterval(intervalRef.current);
  }, [idx, run]);

  const changeImage = (newIdx) => {
    if (newIdx >= images.length) {
      setIdx(0);
    } else if (newIdx < 0) {
      setIdx(images.length - 1);
    } else {
      setIdx(newIdx);
    }
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(run, 2000);
  };

  const handleNext = () => {
    changeImage(idx + 1);
    resetInterval();
  };

  const handlePrev = () => {
    changeImage(idx - 1);
    resetInterval();
  };

  return (
    <section id="35" className="section-ImageCarousel">
      <div className="carousel">
        <div
          className="image-container"
          ref={imgsRef}
          style={{ transform: `translateX(${-idx * 500}px)` }}>
          {images.map((src, index) => (
            <img
              className="img-day35"
              key={index}
              src={src}
              alt={`pic-${index}`}
            />
          ))}
        </div>

        <div className="buttons-container-day35">
          <button id="left" className="btn" onClick={handlePrev}>
            Prev
          </button>
          <button id="right" className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
