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

  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeout = useRef<number | null>(null);

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

    return closestIndex;
  }, [activationThreshold]);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const section = sectionRefs.current[index];
    if (!container || !section) return;

    isProgrammaticScroll.current = true;
    setActiveIndex(index);
    container.scrollTo({ top: section.offsetTop, behavior: "smooth" });

    if (programmaticScrollTimeout.current) {
      window.clearTimeout(programmaticScrollTimeout.current);
    }
    programmaticScrollTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 450);
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
      if (isProgrammaticScroll.current) return;
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
      if (programmaticScrollTimeout.current) {
        window.clearTimeout(programmaticScrollTimeout.current);
      }
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
