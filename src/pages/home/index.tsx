import "./styles.css";
import DiscordIcon from "../../assets/svgs/Discord.svg";
import TwitterIcon from "../../assets/svgs/Twitter.svg";
import FareProtocolLogo from "../../assets/svgs/FareProtocol.svg";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <main className="page-wrapper">
      <section className="content-section">
        <img src={FareProtocolLogo} alt="Fare Protocol Logo" width={200} />
        <p className="sub-header">
          DEPLOY PERMISSIONLESS + TRUSTLESS ON-CHAIN CASINOS
        </p>

        <p>
          <Link
            to="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv"
            target="_blank"
            className="teal-text"
          >
            BUY FARE TOKEN
          </Link>
        </p>

        <p>
          FARE is a token that users will be able to gamble with via the
          FAREVault smart contract. When a user wagers FARE and loses, their
          wagered FARE is burned. When a user wagers FARE and wins, their FARE
          winnings are minted. The FAREVault smart contract ensures that there
          is a negative expected value for users (commonly referred to as "house
          edge" in casinos).
        </p>

        <p>
          <span className="red-text">BURN</span> &gt;{" "}
          <span className="green-text">MINT</span>
        </p>

        <p>
          Because players lose more than they win, there is more burning than
          minting. This means FARE will be a probabilistically deflationary
          token, and as such, FARE holders are the "house." Developers can
          deploy their own FARE casinos on top of the FAREVault smart contract
          permissionlessly and without a bankroll. Read the{" "}
          <a href="/whitepaper">whitepaper</a> to learn more.
        </p>

        <div className="link-buttons-wrapper">
          <p>Experience the first application on testnet, Fareplay:</p>

          <button className="btn--launch">launch</button>

          <div className="external-link-wrapper">
            <Link
              to="https://discord.com/invite/eUEwY3vS8R"
              target="_blank"
              aria-label="Join our Discord community"
              className="external-link"
            >
              <img src={DiscordIcon} alt="Discord Logo" width={40} />
            </Link>

            <Link
              to="https://x.com/fareplayio"
              aria-label="Follow us on Twitter"
              className="external-link"
              target="_blank"
            >
              <img src={TwitterIcon} alt="Twitter Logo" width={40} />
            </Link>
          </div>
        </div>

        <div> carousel section</div>
      </section>
    </main>
  );
};
