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
  return (
    <div className="page-wrapper">
      <h1>FAQ</h1>
      {FaqData.map((data) => (
        <FaqDataCell key={data.id} question={data.question} answer={data.answer} />
      ))}

      <h2>Have more questions? Contact us.</h2>
      <ContactForm />
    </div>
  );
};
