import "./styles.css";

import { ProductsNav } from "./productsNav";
import { ProductSection } from "./productSection";
import { getProductsByCategory } from "../../utils/getProductsByCategory";
import { getFeaturedItems } from "../../utils/getFeaturedItems";
import { useState } from "react";

const featuredItems = getFeaturedItems();
const Patches = getProductsByCategory("Patches").map((p) => ({
  ...p,
  category: "patches",
}));
const Hats = getProductsByCategory("Hats").map((p) => ({
  ...p,
  category: "hats",
}));
const Stickers = getProductsByCategory("Stickers").map((p) => ({
  ...p,
  category: "stickers",
}));

export const SwagPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const shouldShowSection = (category: string) => {
    return !activeCategory || activeCategory === category;
  };
  return (
    <div className="page-wrapper">
      <div className="content-section">
        <div className="grid-wrapper">
          <ProductsNav
            onCategoryClick={setActiveCategory}
            activeCategory={activeCategory}
          />
        </div>

        {shouldShowSection("featured") && (
          <ProductSection title="FEATURED ITEMS" products={featuredItems} />
        )}
        {shouldShowSection("patches") && (
          <ProductSection title="PATCHES" products={Patches} />
        )}
        {shouldShowSection("hats") && (
          <ProductSection title="HATS" products={Hats} />
        )}
        {shouldShowSection("stickers") && (
          <ProductSection title="STICKERS" products={Stickers} />
        )}
      </div>
    </div>
  );
};
