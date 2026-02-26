import BackgroundImg from "../../assets/svgs/BG_Transparent.svg";
import { ContactFormButton } from "../../components/buttons/contactFormButton";

export const ComingSoonPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100svh",
        width: "100svw",
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Coming Soon!</h1>
      <p style={{ fontSize: "1.5rem", color: "#666" }}>
        We're working hard to bring you new features. Stay tuned!
      </p>
      <ContactFormButton email="zynkah@far3.io" />
    </div>
  );
};
