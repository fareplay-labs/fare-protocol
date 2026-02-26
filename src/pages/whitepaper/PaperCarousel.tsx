import { WhitePaperData } from "../../data/whitePaperData";
import { type MouseEvent } from "react";
import { Modal } from "../../components/modal";
import ScrollLinked from "../../components/scrollbar";
import { usePaperModal } from "./hooks/usePaperModal";
import { usePaperScrollSync } from "./hooks/usePaperScrollSync";
import { PaperHeader } from "./components/PaperHeader";
import { PaperSections } from "./components/PaperSections";

export const PaperCarousel = () => {
  const { showModal, modalContent, openModal, closeModal } = usePaperModal();
  const { containerRef, sectionRefs, activeIndex, handlePrev, handleNext } =
    usePaperScrollSync({ totalItems: WhitePaperData.length });

  if (WhitePaperData.length === 0) {
    return <div className="paper-card">No papers available.</div>;
  }

  const handleInfoClick = (e: MouseEvent | undefined, idx: number) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
      e.stopPropagation();
    }
    if (idx < 0 || idx >= WhitePaperData.length) return;
    openModal(WhitePaperData[idx].popupContent);
  };

  return (
    <div className="paper-card">
      <ScrollLinked containerRef={containerRef}>
        <PaperHeader
          title={WhitePaperData[activeIndex].title}
          activeIndex={activeIndex}
          totalItems={WhitePaperData.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        <PaperSections
          pages={WhitePaperData}
          containerRef={containerRef}
          sectionRefs={sectionRefs}
          onInfoClick={handleInfoClick}
        />

        {showModal && <Modal onClose={closeModal}>{modalContent}</Modal>}
      </ScrollLinked>
    </div>
  );
};
