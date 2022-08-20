import { initializeAlchemy, Network } from "@alch/alchemy-sdk";

export const HOLDER_ROLE = '1002338175915675769';
export const GUILD_ID = '1002313653669855263';

const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_ID,
    network: Network.ETH_MAINNET,
    maxRetries: 10
};

export const ALCHEMY = initializeAlchemy(settings);
export const CONTRACT = '0x12b180b635dd9f07a78736fb4e43438fcdb41555';
export const PRICE_PER_TOKEN = 1;
