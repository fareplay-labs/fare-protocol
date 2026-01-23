import { WhitePaperData } from "../../data/whitePaperData";
import { useState } from "react";


const PaperCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < WhitePaperData.length - 1 ? prev + 1 : prev));
    };

    const page = WhitePaperData[currentIndex];

    return (
      <div>
        <div className="paper-card">
          <h3 className="paper-header">{page.title}</h3>
          <div className="paper-content">{page.content}</div>
        </div>
        <div className="pagination-wrapper">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            Previous
          </button>
          <span style={{ margin: "0 1rem" }}>
            {currentIndex + 1} / {WhitePaperData.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentIndex === WhitePaperData.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    );
};

export const PaperCarousel = () => {
  return (
    <PaperCards />
  );
};
