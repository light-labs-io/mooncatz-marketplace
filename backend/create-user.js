import {API} from "aws-amplify";
import {createUser as createUserMutation} from "../src/graphql/mutations";
import {v4} from "uuid";
import moment from "moment";

export async function createUser(obj) {
    try {
        const { data, error, extensions } = await API.graphql({
            authMode: 'API_KEY',
            query: createUserMutation,
            variables: {
                input: {
                    id: v4(),
                    wallet: obj.wallet,
                    tokens: 0,
                    redeemed: false,
                    redeemDate: moment.utc().startOf('week').add(6, 'days').toISOString(),
                    discordId: obj.discordId,
                    image: obj.image,
                    username: obj.username,
                    discriminator: obj.discriminator,
                    nfts: obj.nfts,
                }
            }
        });

        return data ? data.createUser : undefined;
    } catch (e) {
        console.error(e);
    }
}