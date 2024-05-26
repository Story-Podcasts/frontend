import {
  getDefaultConfig,
  Chain,
} from '@rainbow-me/rainbowkit';
import {
  sepolia
} from 'wagmi/chains';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// Create wagmiConfig
export const config = getDefaultConfig({
  appName: "Story Podcasts",
  chains: [sepolia],
  ssr: true,
  projectId,
})