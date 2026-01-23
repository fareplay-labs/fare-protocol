import { SponsorsGroup } from "./SponsorsGroups";
import { useState, useEffect, useRef } from "react";
import PaginationDotIcon from "../../assets/svgs/pagination-dot.svg";

export const SponsorsCarousel = () => {
  const groupCount = 3;
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setFade(false);
      timeoutRef.current = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % groupCount);
        setFade(true);
      }, 500); // fade out duration
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [groupCount]);

  const handleDotClick = (i: number) => {
    setFade(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIndex(i);
      setFade(true);
      // Optionally resume auto-advance after interaction:
      intervalRef.current = window.setInterval(() => {
        setFade(false);
        timeoutRef.current = window.setTimeout(() => {
          setIndex((prev) => (prev + 1) % groupCount);
          setFade(true);
        }, 500);
      }, 6000);
    }, 500);
  };

  return (
    <div className="sponsor-container">
      <div
        style={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <SponsorsGroup groupIndex={index} active={true} />
      </div>
      <div>
        {[...Array(groupCount)].map((_, i) => (
          <button key={i} onClick={() => handleDotClick(i)}>
            <img
              src={PaginationDotIcon}
              alt={`Dot ${i + 1}`}
              width={16}
              style={{
                opacity: index === i ? 1 : 0.5,
                transition: "opacity 0.3s",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
