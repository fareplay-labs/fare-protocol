import { useCallback, useEffect, useRef, useState } from "react";

interface UsePaperScrollSyncOptions {
  totalItems: number;
  activationThreshold?: number;
}

export const usePaperScrollSync = ({
  totalItems,
  activationThreshold = 0.35,
}: UsePaperScrollSyncOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getClosestSectionIndex = useCallback(() => {
    const container = containerRef.current;
    if (!container) return 0;

    const activationLine =
      container.scrollTop + container.clientHeight * activationThreshold;
    let closestIndex = 0;

    sectionRefs.current.forEach((section, idx) => {
      if (!section) return;
      if (section.offsetTop <= activationLine) {
        closestIndex = idx;
      }
    });

    return Math.min(closestIndex, Math.max(totalItems - 1, 0));
  }, [activationThreshold, totalItems]);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const section = sectionRefs.current[index];
    if (!container || !section) return;

    setActiveIndex(index);
    const targetTop =
      container.scrollTop +
      (section.getBoundingClientRect().top -
        container.getBoundingClientRect().top);

    container.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < totalItems - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const newIndex = getClosestSectionIndex();
      setActiveIndex((prevIndex) =>
        prevIndex === newIndex ? prevIndex : newIndex,
      );
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [getClosestSectionIndex]);

  return {
    containerRef,
    sectionRefs,
    activeIndex,
    handlePrev,
    handleNext,
  };
};
