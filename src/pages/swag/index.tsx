import "./styles.css";

import { ProductsNav } from "./productsNav";
import { ProductSection } from "./productSection";
import { getProductsByCategory } from "../../utils/getProductsByCategory";
import { getFeaturedItems } from "../../utils/getFeaturedItems";

const featuredItems = getFeaturedItems();
const Patches = getProductsByCategory("Patches");
const Hats = getProductsByCategory("Hats");
const Stickers = getProductsByCategory("Stickers");

export const SwagPage = () => {
  return (
    <div className="page-wrapper">
      <div className="content-section">
        <div className="grid-wrapper">
          <ProductsNav />
        </div>

        <ProductSection title="FEATURED ITEMS" products={featuredItems} />
        <ProductSection title="PATCHES" products={Patches} />
        <ProductSection title="HATS" products={Hats} />
        <ProductSection title="STICKERS" products={Stickers} />
      </div>
    </div>
  );
};
