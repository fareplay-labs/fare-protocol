import "./styles.css";
import FarePatch from "../../assets/pngs/fare-patch.png";
import CasinoSticker from "../../assets/pngs/casino-sticker.png";
import FareBeanie from "../../assets/pngs/fare-beanie.png";

const featuredItems = [
  { title: "Fare Patches", imageSrc: FarePatch },
  { title: "Beanies", imageSrc: FareBeanie },
  { title: "Stickers", imageSrc: CasinoSticker },

];

const FeaturedCard = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) => (
  <div className="card">
    <h3>{title}</h3>
    <img src={imageSrc} alt={title} width={200} />
  </div>
);

export const SwagPage = () => {
  return (
    <div className="page-wrapper">
      <h1>Swag</h1>

      <div className="grid-wrapper">
        <div className="subNav-header">
          <a className="subNav-item">Patches</a>
          <a className="subNav-item">T-Shirts</a>
          <a className="subNav-item">Hoodies</a>
          <a className="subNav-item">Stickers</a>
          <a className="subNav-item">Mugs</a>
        </div>
      </div>

      {/* trending section */}
      <div className="cards-wrapper">
        <h2>FEATURED ITEMS</h2>
        <div className="cards-container">
          {featuredItems.map((item, idx) => (
            <FeaturedCard
              key={item.title + idx}
              title={item.title}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
