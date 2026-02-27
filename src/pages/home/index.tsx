import "./styles.css";
import DiscordIcon from "../../assets/svgs/Discord.svg";
import TwitterIcon from "../../assets/svgs/Twitter.svg";
import FareProtocolLogo from "../../assets/svgs/FareProtocol.svg";
import { Link } from "react-router-dom";
import { SponsorsCarousel } from "./carousel";

export const HomePage = () => {
  return (
    <main className="page-wrapper">
      <section className="content-section">
        <img src={FareProtocolLogo} alt="Fare Protocol Logo" width={200} />
        <p className="sub-header">
          DEPLOY PERMISSIONLESS + TRUSTLESS ON-CHAIN CASINOS
        </p>

        <div>
          <a
            href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv"
            target="_blank"
            rel="noopener noreferrer"
            className="teal-text"
          >
            BUY FARE TOKEN
          </a>
        </div>

        <p>
          FARE is a token that users will be able to gamble with via the
          FAREVault smart contract. When a user wagers FARE and loses, their
          wagered FARE is burned. When a user wagers FARE and wins, their FARE
          winnings are minted. The FAREVault smart contract ensures that there
          is a negative expected value for users (commonly referred to as "house
          edge" in casinos).
        </p>

        <div>
          <span className="red-text">BURN</span> &gt;{" "}
          <span className="green-text">MINT</span>
        </div>

        <p>
          Because players lose more than they win, there is more burning than
          minting. This means FARE will be a probabilistically deflationary
          token, and as such, FARE holders are the "house." Developers can
          deploy their own FARE casinos on top of the FAREVault smart contract
          permissionlessly and without a bankroll. Read the{" "}
          <Link to="/whitepaper" className="teal-text">
            whitepaper
          </Link>{" "}
          to learn more.
        </p>

        <div className="link-buttons-wrapper">
          <p>Experience the first application on testnet, Fareplay:</p>

          {/* todo: add link to proper site here */}
          <a
            href="https://ipfs.io/ipfs/bafybeiadjezydomrcl2t7r7w3au4copy3yenu6ferdonbhrz6q6dndj25m/#/fareVault?poolAccount=BqQ9fhDxit7r9gcVPmsCgudxTXeEcZS4yjNyRuqExbkx"
            target="_blank"
            rel="noopener noreferrer"
            className="button__bordered"
          >
            launch
          </a>
          <div className="external-link-wrapper">
            <a
              href="https://discord.com/invite/eUEwY3vS8R"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord community"
              className="external-link"
            >
              <img src={DiscordIcon} alt="Discord Logo" width={40} />
            </a>

            <a
              href="https://x.com/fareplayio"
              aria-label="Follow us on Twitter"
              rel="noopener noreferrer"
              className="external-link"
              target="_blank"
            >
              <img src={TwitterIcon} alt="Twitter Logo" width={40} />
            </a>
          </div>
        </div>

        <SponsorsCarousel />
      </section>
    </main>
  );
};
