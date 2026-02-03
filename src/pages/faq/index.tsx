import { useState } from "react";
import { FaqData } from "../../data/faqData";
import { ContactForm } from "./contactForm";
import { CloseButton } from "../../components/buttons/closeButton";

interface FaqDataCellProps {
  question: string;
  answer: string;
}

const FaqDataCell = ({ question, answer }: FaqDataCellProps) => {
  return (
    <div style={{ width: "100%" }}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export const FaqPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="page-wrapper">
      <div className="content-section">
        {FaqData.map((data) => (
          <FaqDataCell
            key={data.id}
            question={data.question}
            answer={data.answer}
          />
        ))}

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
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <CloseButton onClose={() => setShowModal(false)} />
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
