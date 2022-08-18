import { initializeAlchemy, Network } from "@alch/alchemy-sdk";

export const ADMIN_ROLE = '929862913341136916';
export const GUILD_ID = '894681066621771836';

const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_ID,
    network: Network.ETH_MAINNET,
    maxRetries: 10
};

export const alchemy = initializeAlchemy(settings);
export const contract = '0xe18506abd3AD1EB743862C2E8eAF6AeAa406c621';