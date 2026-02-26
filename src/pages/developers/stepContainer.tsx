import rightArrow from "../../assets/svgs/caret-right.svg";
import BlueProtoIcon from "../../assets/svgs/protocol-blue.svg";

interface StepContainerProps {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const StepContainer = ({
  title,
  children,
  onClick,
}: StepContainerProps) => {
  return (
    <div
      className={
        title.indexOf("Backend") !== -1
          ? "developers-section-box dots"
          : "developers-section-box"
      }
    >
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
      {title.indexOf("NPM") !== -1 && (
        <img
          src={BlueProtoIcon}
          alt="Protocol Blue Icon"
          className="developers-section-image"
          width={400}
        />
      )}
      <button
        className="next-button"
        type="button"
        onClick={onClick}
        aria-label="Next"
      >
        <img src={rightArrow} alt="Next" width={24} />
      </button>
    </div>
  );
};
