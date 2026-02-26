interface FaqDataCellProps {
  question: string;
  answer: string;
}

export const FaqDataCell = ({ question, answer }: FaqDataCellProps) => {
  return (
    <div style={{ width: "100%" }}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};
