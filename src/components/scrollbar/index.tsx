import { motion, useScroll } from "motion/react";
import type { ReactNode, RefObject } from "react";

export default function ScrollLinked({
  children,
  containerRef,
}: {
  children: ReactNode;
  containerRef?: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll(
    containerRef ? { container: containerRef } : undefined,
  );

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "var(--fare-blue)",
        }}
      />
      {children}
    </>
  );
}
