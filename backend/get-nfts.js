import {alchemy, contract} from "../shared/contants";
import {getNftsForOwner} from "@alch/alchemy-sdk";

export const getNFTS = async (wallet) => {
    const results = await getNftsForOwner(alchemy, wallet, {
        contractAddresses: [
            contract,
        ],
    });

    const unlistedNfts = [];
    for (const nft of results.ownedNfts) {
        const res = await fetch("/api/opensea", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                wallet: wallet,
                contract: contract,
                token_ids: nft.tokenId,
            }),
            method: "POST",
        });
        const opeseaResults = await res.json();

        if (opeseaResults.assets.length > 0) {
            if (opeseaResults.assets[0].listing_date === null) {
                unlistedNfts.push(nft);
            }
        }
    }

    return unlistedNfts;
}