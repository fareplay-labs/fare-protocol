import "./styles.css";
import { PaperCarousel } from "./PaperCarousel";

export const WhitepaperPage = () => {
  return (
    <div className="page-wrapper">
      <div className="content-section">
        <h1 style={{ textAlign: "center" }}>
          The Architecture and Design of FARE Protocol
        </h1>
        <p className="sub-header">
          Jay McCarthy{" "}
          <a href="mailto:jay@fareprotocol.io" className="teal-text">
            jay@fareprotocol.io
          </a>{" "}
          FARE
        </p>

        <PaperCarousel />
      </div>
    </div>
  );
};
