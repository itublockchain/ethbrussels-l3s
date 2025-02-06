import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { http, WagmiProvider } from 'wagmi';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
    appName: 'PAygent-front',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, sepolia],
    ssr: true, 
    transports: {
        [mainnet.id]:http('https://eth-mainnet.g.alchemy.com/v2/EV_yfqumjCALt1Myfz7n-ZPIod7tv1TU'),
        [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/EV_yfqumjCALt1Myfz7n-ZPIod7tv1TU')
    }
});

export default config;