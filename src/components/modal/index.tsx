import { CloseButton } from "../buttons/closeButton";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>
  );
};
