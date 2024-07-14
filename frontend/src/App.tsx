<<<<<<< HEAD
import './App.css'

// Importing Components
import { Button } from "@/components/ui/button"

function App() {

  return (
    <>
      <Button onClick={() => alert("Selam")}>Button</Button>
    </>
  )
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Header from "./components/custom/Header";
import theme from "./theme (2).json";

import { WagmiProvider, createConfig, http } from "wagmi";
import { arbitrum, mainnet, optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import CardWithForm from "./components/custom/CustomCard";
import { l3s } from "./components/customChain";

function App() {
  const [count, setCount] = React.useState(0);
  const queryClient = new QueryClient();

  const config = createConfig(
    getDefaultConfig({
      // Your dApps chains
      chains: [mainnet, arbitrum, optimism, l3s],
      transports: {
        // RPC URL for each chain
        [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/demo`),
        [arbitrum.id]: http(`https://arb-mainnet.g.alchemy.com/v2/demo`),
        [optimism.id]: http(`https://opt-mainnet.g.alchemy.com/v2/demo`),
        [l3s.id]: http("http://46.101.137.172:8449"),
      },

      // Required API Keys
      walletConnectProjectId: "3056645e739ff848b9c18c994f12cc43",

      // Required App Info
      appName: "Your App Name",

      // Optional App Info
      appDescription: "Your App Description",
      appUrl: "https://family.co", // your app's url
      appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="auto" customTheme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
>>>>>>> feature/header
}

export default App;
