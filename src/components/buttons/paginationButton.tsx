interface PaginationButtonProps {
  onClick: () => void;
  disabled?: boolean;
  imgSrc: string;
  altText: string;
}

export const PaginationButton = ({
  onClick,
  disabled = false,
  imgSrc,
  altText,
}: PaginationButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <img src={imgSrc} alt={altText} width={24}/>
    </button>
  );
};
