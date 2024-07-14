import { type Chain } from 'viem'

export const l3s = {
  id: 14531773,
  name: 'Layer3 Stake',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['46.101.137.172:8449'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'http://explorer.l3stake.xyz/api' },
  },
} as const satisfies Chain