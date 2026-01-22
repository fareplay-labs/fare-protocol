import "./styles.css";
import DiscordIcon from "../../assets/svgs/Discord.svg";
import TwitterIcon from "../../assets/svgs/Twitter.svg";

export const HomePage = () => {
  return (
    <div className="page-wrapper">
      <h1>Home Page</h1>
      <p>DEPLOY PERMISSIONLESS + TRUSTLESS ON-CHAIN CASINOS</p>
      <p>
        <span className="teal-text">FARE TOKEN</span>
      </p>
      <p>
        FARE is a token that users will be able to gamble with via the FAREVault
        smart contract. When a user wagers FARE and loses, their wagered FARE is
        burned. When a user wagers FARE and wins, their FARE winnings are
        minted. The FAREVault smart contract ensures that there is a negative
        expected value for users (commonly referred to as "house edge" in
        casinos).
      </p>
      <p>
        <span className="red-text">BURN</span> &gt;{" "}
        <span className="green-text">MINT</span>
      </p>
      <p>
        Because players lose more than they win, there is more burning than
        minting. This means FARE will be a probabilistically deflationary token,
        and as such, FARE holders are the "house." Developers can deploy their
        own FARE casinos on top of the FAREVault smart contract permissionlessly
        and without a bankroll. Read the <a href="/whitepaper">whitepaper</a> to
        learn more.
      </p>
      <p>Experience the first application on testnet, Fareplay:</p>
      <div>
        <button className="btn--launch">launch</button>
        <div>
          <button aria-label="Join our Discord community">
            <img src={DiscordIcon} alt="Discord Logo" width={40} />
          </button>
          <button aria-label="Follow us on Twitter">
            <img src={TwitterIcon} alt="Twitter Logo" width={40} />
          </button>
        </div>
      </div>
      <div> carousel section</div>
    </div>
  );
};
