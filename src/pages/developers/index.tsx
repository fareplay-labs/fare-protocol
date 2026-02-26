import { DevData } from "../../data/devData";
import { StepContainer } from "./stepContainer";
import "./styles.css";
// import { ComingSoonPage } from "../comingSoon";

export const DevelopersPage = () => {
  return (
    <div className="page-wrapper">
      <div className="content-section">
        <div className="developers-section-list">
          {DevData.map((section) => (
            <StepContainer key={section.id} title={section.title}>
              {section.content}
            </StepContainer>
          ))}
        </div>
      </div>
    </div>
    // <ComingSoonPage />
  );
};
