import { useState } from "react";
import { FaqData } from "../../data/faqData";
import { ContactForm } from "./contactForm";

interface FaqDataCellProps {
  question: string;
  answer: string;
}

const FaqDataCell = ({ question, answer }: FaqDataCellProps) => {
  return (
    <div>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export const FaqPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="page-wrapper">
      <h1>FAQ</h1>
      {FaqData.map((data) => (
        <FaqDataCell
          key={data.id}
          question={data.question}
          answer={data.answer}
        />
      ))}

      <h2>
        Have more questions?{" "}
        <a
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => setShowModal(true)}
        >
          Contact us.
        </a>
      </h2>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};
