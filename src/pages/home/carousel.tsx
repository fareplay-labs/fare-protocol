import { SponsorsGroup } from "./SponsorsGroups";
import { useState, useEffect, useRef } from "react";
import PaginationDotIcon from "../../assets/svgs/pagination-dot.svg";

export const SponsorsCarousel = () => {
  const groupCount = 3;
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % groupCount);
        setFade(true);
      }, 500); // fade out duration
    }, 6000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    setFade(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex(i);
      setFade(true);
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
