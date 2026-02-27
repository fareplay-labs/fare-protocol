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
  const programmaticScrollRef = useRef(false);
  const targetScrollTopRef = useRef<number | null>(null);
  const clearProgrammaticScrollTimeoutRef = useRef<number | null>(null);

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

    const targetTop =
      container.scrollTop +
      (section.getBoundingClientRect().top -
        container.getBoundingClientRect().top);

    programmaticScrollRef.current = true;
    targetScrollTopRef.current = targetTop;
    setActiveIndex(index);

    container.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    if (clearProgrammaticScrollTimeoutRef.current) {
      window.clearTimeout(clearProgrammaticScrollTimeoutRef.current);
    }

    const distance = Math.abs(container.scrollTop - targetTop);
    const estimatedDuration = Math.min(700, Math.max(250, distance * 0.5));
    clearProgrammaticScrollTimeoutRef.current = window.setTimeout(() => {
      programmaticScrollRef.current = false;
      targetScrollTopRef.current = null;
    }, estimatedDuration + 100);
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
      if (programmaticScrollRef.current) {
        const container = containerRef.current;
        const targetTop = targetScrollTopRef.current;
        if (container && targetTop !== null) {
          const isAtTarget = Math.abs(container.scrollTop - targetTop) <= 3;
          if (isAtTarget) {
            programmaticScrollRef.current = false;
            targetScrollTopRef.current = null;
          }
        }
        return;
      }

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
      if (clearProgrammaticScrollTimeoutRef.current) {
        window.clearTimeout(clearProgrammaticScrollTimeoutRef.current);
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
