import { motion } from "framer-motion";
import RightArrow from "../../../assets/svgs/caret-right.svg";
import LeftArrow from "../../../assets/svgs/caret-left.svg";
import { PaginationButton } from "../../../components/buttons/paginationButton";

interface PaperHeaderProps {
  title: string;
  activeIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
}

export const PaperHeader = ({
  title,
  activeIndex,
  totalItems,
  onPrev,
  onNext,
}: PaperHeaderProps) => {
  return (
    <div className="paper-header-wrapper">
      <PaginationButton
        onClick={onPrev}
        disabled={activeIndex === 0}
        imgSrc={LeftArrow}
        altText="Previous"
      />
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        key={activeIndex}
        className="paper-header"
      >
        {title}
      </motion.h3>
      <PaginationButton
        onClick={onNext}
        disabled={activeIndex === totalItems - 1}
        imgSrc={RightArrow}
        altText="Next"
      />
    </div>
  );
};
