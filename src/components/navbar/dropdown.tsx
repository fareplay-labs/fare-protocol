import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinksData } from "../../data/linksData";
import { AnimatePresence, motion } from "framer-motion";

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const lastLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll with useEffect when dropdown is open
  useEffect(() => {
    const triggerButton = triggerButtonRef.current;
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      // Restore focus to trigger button when closing
      triggerButton?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      // Restore focus to trigger button if unmounting while closed
      if (!open) triggerButton?.focus();
    };
  }, [open]);

  // Trap focus inside dropdown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      const focusableEls = menuRef.current?.querySelectorAll("a[href]");
      if (!focusableEls || focusableEls.length === 0) return;
      const first = focusableEls[0] as HTMLElement;
      const last = focusableEls[focusableEls.length - 1] as HTMLElement;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const variants = {
    open: {
      opacity: 1,
      scaleY: 1,
      transformOrigin: "top",
      transition: { duration: 0.2 },
    },
    closed: { opacity: 0, scaleY: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <button
        className="dropdown__button"
        ref={triggerButtonRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Navigation menu"
      >
        &#9776;
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="dropdown-menu"
            ref={menuRef}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            aria-modal="true"
            role="menu"
          >
            {LinksData.map((link, idx) => (
              <Link
                key={link.id}
                to={link.to}
                className="dropdown-link"
                tabIndex={0}
                ref={
                  idx === 0
                    ? firstLinkRef
                    : idx === LinksData.length - 1
                      ? lastLinkRef
                      : undefined
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
