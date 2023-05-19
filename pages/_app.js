import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { celoAlfajores } from 'wagmi/chains';

import { infuraProvider } from '@wagmi/core/providers/infura'
import { publicProvider } from "wagmi/providers/public";
import "rc-tooltip/assets/bootstrap.css";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { chains, publicClient } = configureChains(
  [celoAlfajores], // Specify the Celo Alfajores chain
  [infuraProvider({ apiKey: '4548163d70964e74b6e82bd5a420f407' }),
  publicProvider(),
  ],
  // [
  //   jsonRpcProvider({
  //     rpc: (chain) => ({
  //       // http: "https://alfajores-forno.celo-testnet.org",
  //       http: "https://celo-alfajores.infura.io/v3/4548163d70964e74b6e82bd5a420f407",
  //     }),
  //   }),
  // ]
);

const { connectors } = getDefaultWallets({
  appName: "CeloPool",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()}>
        <ToastContainer />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
