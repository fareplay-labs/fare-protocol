import EthQRCode from "../assets/svgs/eth_qr_code.svg";
import SolanaQRCode from "../assets/svgs/solana_qr_code.svg";
import BitcoinQRCode from "../assets/svgs/bitcoin_qr_code.svg";
import JupiterIcon from "../assets/jupiter-logo.webp";
import UniswapIcon from "../assets/svgs/uniswap-logo.svg";

export type ContractAddress = {
  chain: string;
  decimals: number;
  value: string;
  to: string;
};

export type HomeLink = {
  label: string;
  image: string;
  href: string;
};

type DonationMethod = {
  network: string;
  address: string;
  qrSrc: string;
  qrAlt: string;
};

export const HOME_LINKS: HomeLink[] = [
  {
    label: "BUY FARE TOKEN ON JUPITER",
    image: JupiterIcon,
    href: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv",
  },
  {
    label: "BUY FARE ON UNISWAP",
    image: UniswapIcon,
    href: "https://app.uniswap.org/explore/tokens/arbitrum/0xfa4e888d9fbbcf4afa7bf057ecfe59ed04619e62?inputCurrency=NATIVE",
  },
];

export const CONTRACT_ADDRESSES: ContractAddress[] = [
  {
    chain: "Solana",
    decimals: 6,
    value: "FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv",
    to: "https://solscan.io/token/FAREtaJuGTKUbyuadgUNQn45XnJCa6BoKCavPHxfyLTv",
  },
  {
    chain: "Arbitrum",
    decimals: 18,
    value: "0xFA4E888d9fBBcF4AfA7BF057ECfe59Ed04619e62",
    to: "https://arbiscan.io/address/0xFA4E888d9fBBcF4AfA7BF057ECfe59Ed04619e62",
  },
];

export const DONATION_METHODS: DonationMethod[] = [
  {
    network: "ETHEREUM (EVM)",
    address: "0xfA8d2B861D6876318aB90E9084d92208Be9aD241",
    qrSrc: EthQRCode,
    qrAlt: "ethereum address QR code",
  },
  {
    network: "SOLANA",
    address: "8GFqTSy3ErqB1wwo5WWvSy8NU1eEhdqDdwcnKCBjyAYY",
    qrSrc: SolanaQRCode,
    qrAlt: "solana address QR code",
  },
  {
    network: "BITCOIN",
    address: "bc1qu9j8fczsuhph69c7q52wsjpll3kupu09gmrwxl",
    qrSrc: BitcoinQRCode,
    qrAlt: "bitcoin address QR code",
  },
];
