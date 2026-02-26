import { useState } from "react";
import { Modal } from "../modal";
import { ContactForm } from "../contactForm";

export const ContactFormButton = ({ email }: { email: string }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h2>
        Have more questions?{" "}
        <button
          className="contact-button"
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        >
          Contact us.
        </button>
      </h2>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ContactForm email={email} />
        </Modal>
      )}
    </>
  );
};
