export const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        background: "transparent",
        border: "none",
        fontSize: 20,
        cursor: "pointer",
      }}
      onClick={onClose}
      aria-label="Close dialog"
    >
      ×
    </button>
  );
};