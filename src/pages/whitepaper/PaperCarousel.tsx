import { WhitePaperData } from "../../data/whitePaperData";
import { useState, type ReactNode, useRef, useEffect } from "react";
import RightArrow from "../../assets/svgs/caret-right.svg";
import LeftArrow from "../../assets/svgs/caret-left.svg";
import { motion } from "framer-motion";
import { type MouseEvent } from "react";
import { Modal } from "../../components/modal";
import { PaginationButton } from "../../components/buttons/paginationButton";

const PaperCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll to update activeIndex, but ignore when scrolling programmatically
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      let minDiff = Infinity;
      let newIndex = 0;
      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const diff = Math.abs(ref.getBoundingClientRect().top - containerTop);
          if (diff < minDiff) {
            minDiff = diff;
            newIndex = idx;
          }
        }
      });
      setActiveIndex(newIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // When activeIndex changes (by button), scroll to the section
  useEffect(() => {
    if (!containerRef.current) return;
    isProgrammaticScroll.current = true;
    
    const section = sectionRefs.current[activeIndex];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Allow scroll event to update after a short delay
    const timeout = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

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
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < WhitePaperData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="paper-card">

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
    </div>
  );
};

export const PaperCarousel = () => {
  return <PaperCards />;
};
