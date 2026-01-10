export const HomePage = () => {
  return (
    <div className="page-wrapper">
      <h1>Home Page</h1>
      <p>DEPLOY PERMISSIONLESS + TRUSTLESS ON-CHAIN CASINOS</p>
      <p>
        <span>FARE TOKEN</span>
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
        <span>BURN</span> &gt; <span>MINT</span>
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
      <button>LAUNCH</button>
      <button>
        <img src="/path/to/image" alt="Fareplay Logo" />
      </button>
      <button>
        <img src="/path/to/image" alt="Fareplay Logo" />
      </button>
      <div> carousel section</div>
    </div>
  );
};
