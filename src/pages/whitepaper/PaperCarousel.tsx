import { CloseButton } from "../../components/buttons/closeButton";
import { WhitePaperData } from "../../data/whitePaperData";
import { useState, type ReactNode } from "react";

const PaperCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const page = WhitePaperData[currentIndex];

  if (WhitePaperData.length === 0) {
    return <div className="paper-card">No papers available.</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < WhitePaperData.length - 1 ? prev + 1 : prev,
    );
  };

  const handleInfoClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setModalContent(page.popupContent);
    setShowModal(true);
  };

  return (
    <div>
      <div className="paper-card">
        <h3 className="paper-header">{page.title}</h3>
        <div className="paper-content">
          {typeof page.content === "function"
            ? page.content(() => handleInfoClick(new MouseEvent("click")))
            : page.content}
        </div>
      </div>
      <div className="pagination-wrapper">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <span style={{ margin: "0 1rem" }}>
          {WhitePaperData.map((_, idx) => (
            <button
              key={idx}
              style={{
                opacity: idx === currentIndex ? 1 : 0.6,
                fontWeight: idx === currentIndex ? "bold" : "normal",
              }}
              className="pagination-button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to page ${idx + 1}`}
              aria-current={idx === currentIndex ? "page" : undefined}
            >
              {idx + 1}
            </button>
          ))}
        </span>
        <button
          onClick={handleNext}
          disabled={currentIndex === WhitePaperData.length - 1}
        >
          Next
        </button>
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
