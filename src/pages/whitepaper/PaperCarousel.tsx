import { CloseButton } from "../../components/buttons/closeButton";
import { WhitePaperData } from "../../data/whitePaperData";
import { useState, type ReactNode, useRef, useEffect } from "react";
import RightArrow from "../../assets/svgs/caret-right.svg";
import LeftArrow from "../../assets/svgs/caret-left.svg";
import { motion } from "framer-motion";
import { type MouseEvent } from "react";

const PaperCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [bottomInView, setBottomInView] = useState(false);

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

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setBottomInView(entry.isIntersecting);
  //     },
  //     {
  //       root: null,
  //       threshold: 1.0,
  //       rootMargin: "0px 0px -100% 0px", // Trigger when the bottom of the container is fully in view
  //     },
  //   );
  //   observer.observe(container);
  //   return () => { observer.disconnect(); };
  // }, []);

  // When activeIndex changes (by button), scroll to the section
  useEffect(() => {
    if (
      !containerRef.current
      // || !bottomInView
    )
      return;
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
  }, [
    activeIndex,
    // bottomInView
  ]);

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
      {/* Pagination Arrows */}
      <div className="pagination-wrapper">
        <button onClick={handlePrev} disabled={activeIndex === 0}>
          <img src={LeftArrow} alt="Previous" width={24} />
        </button>

        {/* Sticky Title */}
        <div className="paper-header">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={activeIndex}
          >
            {WhitePaperData[activeIndex].title}
          </motion.h3>
        </div>

        <button
          onClick={handleNext}
          disabled={activeIndex === WhitePaperData.length - 1}
        >
          <img src={RightArrow} alt="Next" width={24} />
        </button>
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
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CloseButton onClose={() => setShowModal(false)} />
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export const PaperCarousel = () => {
  return <PaperCards />;
};
