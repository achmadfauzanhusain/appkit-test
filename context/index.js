"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { mainnet, arbitrum } from "@reown/appkit/networks";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if(!projectId) {
  throw new Error("project id is not defined");
}

const metadata = {
  name: "Appkit-test",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc.",
  url: "http://localhost:3000",
  icons: ["./vercel.svg"],
};

createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true,
  },
});

export function AppKit() {
  return (
    <YourApp />
  );
}
