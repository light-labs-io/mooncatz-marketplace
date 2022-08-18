import fetch from "isomorphic-unfetch";

/*
export interface OpenseaReq {
    wallet: string;
    contract: string;
    token_ids: string;
}
*/

export default async (req, res) => {
    const body = req.body;
    try {
        const response = await fetch(
            `https://api.opensea.io/api/v1/assets?owner=${body.wallet}&asset_contract_address=${body.contract}&token_ids=${body.token_ids}&order_direction=desc&limit=20&include_orders=false`,
            {
                headers: {
                    'X-API-KEY': '82b8ab3d89ec45b7b2802938d1336704',
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                },
                method: "GET",
            }
        );

        if (response.status >= 400) {
            return res.status(400).json({
                error: `There was an error getting NFTs`,
            });
        }

        const converted = await response.json();
        return res.status(201).json(converted);
    } catch (e) {
        // @ts-ignore
        return res.status(500).json({ error: error?.message || error?.toString() });
    }
}