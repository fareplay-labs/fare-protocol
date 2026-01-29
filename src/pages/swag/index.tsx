import "./styles.css";
import FarePatch from "../../assets/pngs/fare-patch.png";
import CasinoSticker from "../../assets/pngs/casino-sticker.png";
import FareBeanie from "../../assets/pngs/fare-beanie.png";

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
        <div className="cards-container">
          <div className="card">
            <h3>Fare Patches</h3>
            <img src={FarePatch} alt="Fare Patch"  width={200} />
          </div>
          <div className="card">
            <h3>Beanies</h3>
            <img src={FareBeanie} alt="Fare Beanie"  width={200} />
          </div>
          <div className="card">
            <h3>Stickers</h3>
            <img src={CasinoSticker} alt="Casino Sticker" width={200} />
          </div>
        </div>
      </div>
    </div>
  );
};
