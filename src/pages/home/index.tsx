import "./styles.css";
// import DiscordIcon from "../../assets/svgs/Discord.svg";
// import TwitterIcon from "../../assets/svgs/Twitter.svg";
import FareProtocolLogo from "../../assets/svgs/FareProtocol.svg";
import { Link } from "react-router-dom";
// import { SponsorsCarousel } from "./carousel";
import EthQRCode from "../../assets/svgs/eth_qr_code.svg";
import SolanaQRCode from "../../assets/svgs/solana_qr_code.svg";
import BitcoinQRCode from "../../assets/svgs/bitcoin_qr_code.svg";
import CopyIcon from "../../assets/svgs/copy.svg";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState<string | null>(
    null,
  );

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopySuccessMessage("Address copied to clipboard.");
  };

  useEffect(() => {
    if (!copySuccessMessage) return;

    const timeoutId = window.setTimeout(() => {
      setCopySuccessMessage(null);
    }, 1800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [copySuccessMessage]);

  return (
    <main className="page-wrapper" aria-labelledby="home-title">
      <section
        className="content-section home-content"
        aria-describedby="home-summary"
      >
        <header className="home-hero">
          <img src={FareProtocolLogo} alt="Fare Protocol Logo" width={200} />
          <h1 id="home-title" className="sub-header">
            DEPLOY PERMISSIONLESS + TRUSTLESS ON-CHAIN PROBABILITES CONTRACTS
          </h1>
        </header>

        <div className="home-token-link">
          <a
            href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv"
            target="_blank"
            rel="noopener noreferrer"
            className="teal-text"
          >
            BUY FARE TOKEN ON JUPITER
          </a>

          <a
            href="https://app.uniswap.org/explore/tokens/arbitrum/0xfa4e888d9fbbcf4afa7bf057ecfe59ed04619e62?inputCurrency=NATIVE"
            target="_blank"
            rel="noopener noreferrer"
            className="teal-text"
          >
            BUY FARE ON UNISWAP
          </a>
        </div>

        <p className="text-warning" aria-label="Warning about scams">
          Don&apos;t get scammed!! Make sure to use the correct Contract
          Address. Copy the contract address below to add a custom token to your
          wallet.
        </p>

        {copySuccessMessage ? (
          <div className="green-text" role="status" aria-live="polite">
            {copySuccessMessage}
          </div>
        ) : null}

        <div
          className="copy-address"
          aria-label="Contract addresses with copy to clipboard functionality"
        >
          <p>Contract Addresses:</p>
          <p>
            SoLana (6 Decimals):{" "}
            <span style={{ textDecoration: "underline" }}>
              FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv
            </span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard("FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv")
              }
              title="Click to copy"
              aria-label="Copy Solana contract address"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                marginLeft: "4px",
                cursor: "pointer",
                verticalAlign: "middle",
              }}
            >
              <img src={CopyIcon} alt="copy icon" width={16} />
            </button>
          </p>
          <p>
            Arbitrum (18 Decimals):{" "}
            <span style={{ textDecoration: "underline" }}>
              0xFA4E888d9fBBcF4AfA7BF057ECfe59Ed04619e62
            </span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard("0xFA4E888d9fBBcF4AfA7BF057ECfe59Ed04619e62")
              }
              title="Click to copy"
              aria-label="Copy Arbitrum contract address"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                marginLeft: "4px",
                cursor: "pointer",
                verticalAlign: "middle",
              }}
            >
              <img src={CopyIcon} alt="copy icon" width={16} />
            </button>
          </p>
        </div>

        <p id="home-summary" className="home-copy">
          FARE is a token that facilitates decentralized random trials that
          produce and consume resources, primarily the FARE token, via the
          FAREVault smart contract. When a user submits a trial, FARE is burned
          or minted according to the probability architecture of the underlying
          FARE Pool. The FAREVault smart contract ensures that there is a
          negative expected value (EV) for all Pools and therefore for all
          users.
        </p>

        <p className="home-emphasis" aria-label="Burn is greater than mint">
          <span className="red-text">BURN</span> &gt;{" "}
          <span className="green-text">MINT</span>
        </p>

        <p className="home-copy">
          Because of the negative EV, there is more burning than minting. This
          means FARE will be a probabilistically deflationary token, and as
          such, FARE holders benefit from increased adoption of FARE Pools.
        </p>

        <p className="home-copy">
          Envisaged use cases include applications in insurance, probabilistic
          yield pools, non-custody casino games, forecasting, finance and
          investing, AI and machine learning, polling, and many more. Developers
          can deploy their own Probability Pools on top of the FAREVault smart
          contract permissionlessly; this means anyone can develop novel use
          cases for a probability contract not yet considered. Read the{" "}
          <Link to="/whitepaper" className="teal-text">
            whitepaper
          </Link>{" "}
          to learn more.
        </p>

        <p className="home-copy">
          The FARE Foundation is committed to promoting further adoption of the
          FARE Protocol by developing more use cases. If you wish to contribute
          or collaborate on our work please join our developer Discord!
        </p>

        <section
          className="link-buttons-wrapper"
          aria-labelledby="fareplay-heading"
        >
          <h2 id="fareplay-heading" className="cta-heading">
            Please consider donating crypto to help fund our project! We accept
            donations through the methods below.
          </h2>

          <img src={EthQRCode} alt="ethereum address QR code" width={200} />
          <p>ETHREUM(EVM): 0xfA8d2B861D6876318aB90E9084d92208Be9aD241</p>
          <img src={SolanaQRCode} alt="solana address QR code" width={200} />
          <p>SOLANA: 8GFqTSy3ErqB1wwo5WWvSy8NU1eEhdqDdwcnKCBjyAYY</p>
          <img src={BitcoinQRCode} alt="bitcoin address QR code" width={200} />
          <p>BITCOIN: bc1qu9j8fczsuhph69c7q52wsjpll3kupu09gmrwxl</p>
          {/* <a
            href="https://app.fareplay.io/ipfs/bafybeibfjz3si44ux2ehpfeu2mrogehb4sekgtp7uc4h7hkjwiwmz6wbli/#/fareVault?poolAccount=BqQ9fhDxit7r9gcVPmsCgudxTXeEcZS4yjNyRuqExbkx"
            target="_blank"
            rel="noopener noreferrer"
            className="button__bordered"
          >
            launch
          </a>

          <nav className="external-link-wrapper" aria-label="FARE social links">
            <ul className="external-link-list">
              <li>
                <a
                  href="https://discord.com/invite/eUEwY3vS8R"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Discord community"
                  className="external-link"
                >
                  <img src={DiscordIcon} alt="Discord" width={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/fareplayio"
                  aria-label="Follow us on Twitter"
                  rel="noopener noreferrer"
                  className="external-link"
                  target="_blank"
                >
                  <img src={TwitterIcon} alt="Twitter" width={40} />
                </a>
              </li>
            </ul>
          </nav> */}
        </section>

        {/* <SponsorsCarousel /> */}
      </section>
    </main>
  );
};
