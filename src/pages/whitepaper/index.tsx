import "./styles.css";
import { PaperCarousel } from "./PaperCarousel";
import { useState } from "react";
import { ContactForm } from "../../components/contactForm";
import { Modal } from "../../components/modal";

export const WhitepaperPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="page-wrapper">
      <section className="content-section">
        <h1 style={{ textAlign: "center" }}>
          The Architecture and Design of FARE Protocol
        </h1>
        <p className="sub-header">
          Jay McCarthy<button onClick={() => setShowModal(true)} className="teal-text uppercase">jay@fareprotocol.io</button>FARE
        </p>

        <PaperCarousel />
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ContactForm email="jay@fareprotocol.io" />
          </Modal>
        )}
      </section>
    </main>
  );
};
