import { motion } from "framer-motion";
import type { MouseEvent, ReactNode, RefObject } from "react";

interface PaperSectionItem {
  content: ReactNode | ((onInfoClick: (e?: MouseEvent) => void) => ReactNode);
}

interface PaperSectionsProps {
  pages: PaperSectionItem[];
  containerRef: RefObject<HTMLDivElement | null>;
  sectionRefs: RefObject<(HTMLDivElement | null)[]>;
  onInfoClick: (e: MouseEvent | undefined, idx: number) => void;
}

export const PaperSections = ({
  pages,
  containerRef,
  sectionRefs,
  onInfoClick,
}: PaperSectionsProps) => {
  return (
    <div ref={containerRef} className="paper-content-wrapper">
      {pages.map((page, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (sectionRefs.current) {
              sectionRefs.current[idx] = el;
            }
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
              ? page.content((e?: MouseEvent) => onInfoClick(e, idx))
              : page.content}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
