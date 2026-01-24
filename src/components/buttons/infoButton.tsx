import InfoIcon from "../../assets/svgs/info.svg";

export const InfoButton = ({ onInfoClick }: { onInfoClick: () => void }) => {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      onClick={onInfoClick}
      aria-label="Show more info"
    >
      <img src={InfoIcon} alt="Info" width={16} height={14} />
    </button>
  );
};
