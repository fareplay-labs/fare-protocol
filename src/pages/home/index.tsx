import "./styles.css";
import FareProtocolLogo from "../../assets/svgs/FareProtocol.svg";
import { Link } from "react-router-dom";
import CopyIcon from "../../assets/svgs/copy.svg";
import { useEffect, useState } from "react";
import {
  CONTRACT_ADDRESSES,
  DONATION_METHODS,
  HOME_LINKS,
} from "../../data/homeData";
import { copyText } from "../../utils/clipboard";

const COPY_SUCCESS_MESSAGE = "Address copied to clipboard.";
const COPY_ERROR_MESSAGE = "Unable to copy address. Please copy it manually.";
const FEEDBACK_TIMEOUT_MS = 1800;

export const HomePage = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState<string | null>(
    null,
  );
  const [copyErrorMessage, setCopyErrorMessage] = useState<string | null>(null);

  const onCopy = async (value: string) => {
    setCopySuccessMessage(null);
    setCopyErrorMessage(null);

    const didCopy = await copyText(value);
    if (didCopy) {
      setCopySuccessMessage(COPY_SUCCESS_MESSAGE);
    } else {
      setCopyErrorMessage(COPY_ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    if (!copySuccessMessage && !copyErrorMessage) return;

    const timeoutId = window.setTimeout(() => {
      setCopySuccessMessage(null);
      setCopyErrorMessage(null);
    }, FEEDBACK_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [copySuccessMessage, copyErrorMessage]);

  return (
    <main className="page-wrapper" aria-labelledby="home-title">
      <section
        className="content-section home-content"
        aria-describedby="home-summary"
      >
        <header className="home-hero">
          <img src={FareProtocolLogo} alt="Fare Protocol Logo" width={200} />
          <h1 id="home-title" className="sub-header">
            DEPLOY PERMISSIONLESS + TRUSTLESS ON-CHAIN PROBABILITIES CONTRACTS
          </h1>
        </header>

        <div className="home-token-wrapper">
          <p className="teal-text">BUY FARE TOKEN ON:</p>
          <div className="home-token-link">
            {HOME_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.image} alt={link.label} width={40} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-warning" aria-label="Warning about scams">
          Don&apos;t get scammed!! Make sure to use the correct Contract
          Address. Copy the contract address below to add a custom token to your
          wallet.
        </p>

        {copySuccessMessage || copyErrorMessage ? (
          <div
            className={`copy-feedback ${
              copyErrorMessage
                ? "copy-feedback--error"
                : "copy-feedback--success"
            }`}
            role={copyErrorMessage ? "alert" : "status"}
            aria-live={copyErrorMessage ? "assertive" : "polite"}
          >
            {copySuccessMessage ? (
              <p className="green-text">{copySuccessMessage}</p>
            ) : null}
            {copyErrorMessage ? (
              <p className="text-warning">{copyErrorMessage}</p>
            ) : null}
          </div>
        ) : null}

        <div
          className="copy-address"
          aria-label="Contract addresses with copy to clipboard functionality"
        >
          <p>Contract Addresses:</p>
          <ul className="contract-list">
            {CONTRACT_ADDRESSES.map((address) => (
              <li key={address.chain} className="contract-item">
                <span>
                  {address.chain} ({address.decimals} Decimals):{" "}
                  <a
                    href={address.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contract-value"
                  >
                    {address.value}
                  </a>
                </span>
                <button
                  type="button"
                  onClick={() => onCopy(address.value)}
                  title={`Copy ${address.chain} address`}
                  aria-label={`Copy ${address.chain} contract address`}
                  className="copy-button"
                >
                  <img src={CopyIcon} alt="" aria-hidden="true" width={16} />
                </button>
              </li>
            ))}
          </ul>
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
          yield pools, non-custody wagering games, forecasting, finance and
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
          {DONATION_METHODS.map((method) => (
            <div key={method.network} className="donation-item">
              <img
                src={method.qrSrc}
                alt={method.qrAlt}
                className="donation-qr"
              />
              <p className="donation-address-row">
                <span>
                  {method.network}: {method.address}
                </span>
                <button
                  type="button"
                  onClick={() => onCopy(method.address)}
                  title={`Copy ${method.network} donation address`}
                  aria-label={`Copy ${method.network} donation address`}
                  className="copy-button"
                >
                  <img src={CopyIcon} alt="" aria-hidden="true" width={16} />
                </button>
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};
