interface ProductsNavProps {
  onCategoryClick: (category: string | null) => void;
  activeCategory: string | null;
}

export const ProductsNav = ({
  onCategoryClick,
  activeCategory,
}: ProductsNavProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    category: string,
  ) => {
    e.preventDefault();
    onCategoryClick(activeCategory === category ? null : category);
  };

  return (
    <div className="subNav-header">
      <a
        className={`subNav-item ${activeCategory === "patches" ? "active" : ""}`}
        href="#patches"
        onClick={(e) => handleClick(e, "patches")}
      >
        Patches
      </a>
      <a
        className={`subNav-item ${activeCategory === "clothing" ? "active" : ""}`}
        href="#clothing"
        onClick={(e) => handleClick(e, "clothing")}
      >
        Clothing
      </a>
      <a
        className={`subNav-item ${activeCategory === "hats" ? "active" : ""}`}
        href="#hats"
        onClick={(e) => handleClick(e, "hats")}
      >
        Hats
      </a>
      <a
        className={`subNav-item ${activeCategory === "stickers" ? "active" : ""}`}
        href="#stickers"
        onClick={(e) => handleClick(e, "stickers")}
      >
        Stickers
      </a>
      <a
        className={`subNav-item ${activeCategory === "mugs" ? "active" : ""}`}
        href="#mugs"
        onClick={(e) => handleClick(e, "mugs")}
      >
        Mugs
      </a>
    </div>
  );
};
