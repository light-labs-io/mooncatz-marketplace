import { API } from "aws-amplify";
import { updateUser } from "../src/graphql/mutations";
import { getNftsForOwner } from "@alch/alchemy-sdk";
import { alchemy, contract } from "../shared/contants";

export async function updateNFTs(obj) {
    try {
        const { data, error, extensions } = await API.graphql({
            authMode: 'API_KEY',
            query: updateUser,
            variables: {
                input: {
                    id: obj.id,
                    _version: obj._version,
                    nfts: obj.nfts,
                }
            }
        });

        console.error(error);

        return data ? data.updateUser : undefined;
    } catch (e) {
        console.error(e);
    }
}

export async function getNFTS(wallet) {
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