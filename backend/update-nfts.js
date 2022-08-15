import { API } from "aws-amplify";
import { updateUser } from "../src/graphql/mutations";

export async function updateNfts(obj) {
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