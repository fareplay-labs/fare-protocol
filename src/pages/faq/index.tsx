import { FaqData } from "../../data/faqData";

interface faqDataCellProps {
  id: number;
  question: string;
  answer: string;
}

const faqDataCell = ({ id, question, answer }: faqDataCellProps) => {
  return (
    <div key={id}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export const FaqPage = () => {
  return (
    <div className="page-wrapper">
      <h1>FAQ</h1>
      {FaqData.map((data) => faqDataCell(data))}
    </div>
  );
};
