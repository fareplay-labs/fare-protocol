import BlueProtoIcon from "../../assets/svgs/protocol-blue.svg";

interface StepContainerProps {
  title: string;
  children: React.ReactNode;
}

import { DevData } from "../../data/devData";
import "./styles.css";
import rightArrow from '../../assets/svgs/caret-right.svg'

const StepContainer = ({ title, children }: StepContainerProps) => {
  return (
    <div className={title.indexOf("Backend") !== -1 ? "developers-section-box dots" : "developers-section-box"}>
      <div className="developers-section-title">{title}</div>
      <div className="developers-section-content">{children}</div>
      {title.indexOf("IPFS") !== -1 && (
        <img
          src={BlueProtoIcon}
          alt="Protocol Blue Icon"
          className="developers-section-image"
          width={400}
        />
      )}
      {title.indexOf('NPM') !== -1 && (
         <img
          src={BlueProtoIcon}
          alt="Protocol Blue Icon"
          className="developers-section-image"
          width={400}
        />
      )}
      <button className='next-button'><img src={rightArrow} alt="Next" width={24}/></button>
    </div>
  );
};

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
  );
};
