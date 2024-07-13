import { useEffect } from 'react'
import './App.css'
import Header from './components/custom/Header'
import Hero from './components/custom/Hero'

// Importing Components
import { Button } from "@/components/ui/button"
import React from 'react';
import { WagmiProvider, createConfig, http } from "wagmi";
import { arbitrum, mainnet, optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


function App() {

  const [count, setCount] = React.useState(0);
  const queryClient = new QueryClient();


  const config = createConfig(
    getDefaultConfig({
      // Your dApps chains
      chains: [mainnet, arbitrum, optimism],
      transports: {
        // RPC URL for each chain
        [mainnet.id]: http(
          `https://eth-mainnet.g.alchemy.com/v2/demo`,
        ),
        [arbitrum.id]: http(
          `https://arb-mainnet.g.alchemy.com/v2/demo`,
        ),
        [optimism.id]: http(
          `https://opt-mainnet.g.alchemy.com/v2/demo`,
        ),
      },
  
      // Required API Keys
      walletConnectProjectId: "3056645e739ff848b9c18c994f12cc43",
  
      // Required App Info
      appName: "Your App Name",
  
      // Optional App Info
      appDescription: "Your App Description",
      appUrl: "https://family.co", // your app's url
      appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    }),
  );


  useEffect(() =>{
    console.log(`You clicked ${count} times`);
  },[count]);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider 
           customTheme={{
            
          }}
        >
        <>
          <Header />
          <div>
            <button onClick={() => setCount(count + 1)}>Button</button>
          </div>
          <Hero />
        </>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App
