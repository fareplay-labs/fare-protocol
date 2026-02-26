import { WhitePaperData } from "../../data/whitePaperData";
import { useState, type ReactNode, useRef, useEffect } from "react";
import RightArrow from "../../assets/svgs/caret-right.svg";
import LeftArrow from "../../assets/svgs/caret-left.svg";
import { motion } from "framer-motion";
import { type MouseEvent } from "react";
import { Modal } from "../../components/modal";
import { PaginationButton } from "../../components/buttons/paginationButton";
import ScrollLinked from "../../components/scrollbar";

export const PaperCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll to update activeIndex, but ignore when scrolling programmatically
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeout = useRef<number | null>(null);

  const getClosestSectionIndex = () => {
    const container = containerRef.current;
    if (!container) return 0;

    const scrollCenter = container.scrollTop + container.clientHeight / 2;
    let minDiff = Infinity;
    let closestIndex = 0;

    sectionRefs.current.forEach((section, idx) => {
      if (!section) return;
      const sectionCenter = section.offsetTop + section.clientHeight / 2;
      const diff = Math.abs(sectionCenter - scrollCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    return closestIndex;
  };

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

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;
      setActiveIndex(getClosestSectionIndex());
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
  }, []);

  if (WhitePaperData.length === 0) {
    return <div className="paper-card">No papers available.</div>;
  }

  const handleInfoClick = (e: MouseEvent | undefined, idx: number) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
      e.stopPropagation();
    }
    if (idx < 0 || idx >= WhitePaperData.length) return;
    setModalContent(WhitePaperData[idx].popupContent);
    setShowModal(true);
  };

  // Scroll to a section by index
  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < WhitePaperData.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <div className="paper-card">
      <ScrollLinked containerRef={containerRef}>
        <div className="paper-header-wrapper">
          <PaginationButton
            onClick={handlePrev}
            disabled={activeIndex === 0}
            imgSrc={LeftArrow}
            altText="Previous"
          />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={activeIndex}
            className="paper-header"
          >
            {WhitePaperData[activeIndex].title}
          </motion.h3>
          <PaginationButton
            onClick={handleNext}
            disabled={activeIndex === WhitePaperData.length - 1}
            imgSrc={RightArrow}
            altText="Next"
          />
        </div>

        {/* Scrollable Sections */}
        <div ref={containerRef} className="paper-content-wrapper">
          {WhitePaperData.map((page, idx) => (
            <div
              key={idx}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
              className="paper-content"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{ width: "100%" }}
              >
                {typeof page.content === "function"
                  ? page.content((e?: MouseEvent) => handleInfoClick(e, idx))
                  : page.content}
              </motion.div>
            </div>
          ))}
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
        )}
      </ScrollLinked>
    </div>
  );
};
