interface StepContainerProps {
  title: string;
  children: React.ReactNode;
}

import "./styles.css";

const StepContainer = ({ title, children }: StepContainerProps) => {
  return (
    <div className="developers-section-box">
      <div className="developers-section-title">{title}</div>
      <div className="developers-section-content">{children}</div>
    </div>
  );
};

const sectionData = [
  {
    id: 1,
    title: "IPFS",
    content: "Information about IPFS integration for developers.",
  },
  {
    id: 2,
    title: "Custom Domain",
    content: "Guidelines on setting up a custom domain.",
  },
  {
    id: 3,
    title: "Custom UI",
    content: "Instructions for creating a custom user interface.",
  },
  {
    id: 4,
    title: "Custom Backend",
    content: "Details on building a custom backend.",
  },
  {
    id: 5,
    title: "Privy NPM",
    content: "How to use the Privy NPM package in your projects.",
  },
];

export const DevelopersPage = () => {
  return (
    <div className="page-wrapper">
      <div className="content-section">
        <div className="developers-section-list">
          {sectionData.map((section) => (
            <StepContainer key={section.id} title={section.title}>
              {section.content}
            </StepContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
