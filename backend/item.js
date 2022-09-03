import { API } from "aws-amplify";
import { listItems } from "../src/graphql/queries";
import {
    createItem as createItemMutation,
    updateItem as updateItemMutation,
    updateUserItem
} from "../src/graphql/mutations";
import {v4} from "uuid";
import {useEffect, useState} from "react";
import {onCreateItem, onUpdateItem} from "../src/graphql/subscriptions";

function useItem() {
    const [items, setItems] = useState({
        items: [],
        nextToken: null,
    });
    const [controller, setController] = useState(new AbortController());
    const [subscriptionOnUpdate, setSubscriptionOnUpdate] = useState(null);
    const [subscriptionOnCreate, setSubscriptionOnCreate] = useState(null);

    /*
        Return Array
        items {
            id String
            name String
            price Number
            description String | null
            traits String | null
            quantity Number | null
          }
          nextToken String
    */

    async function getItems() {
        try {
            const { data, error, extensions } = await API.graphql({
                authMode: 'API_KEY',
                query: listItems,
            });
            setItems(data?.listItems ?? undefined);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    useEffect(() => {
        try {
            getItems();

            if (!subscriptionOnUpdate) {
                const _subscriptionOnUpdate = API.graphql({
                    authMode: 'API_KEY',
                    query: onUpdateItem,
                }).subscribe({
                    next: ({provider, value}) => {
                        if (typeof window !== "undefined") {
                            getItems()
                        }
                    },
                    error: (error) => console.warn(error),
                });
                setSubscriptionOnUpdate(_subscriptionOnUpdate);
            }

            if (!subscriptionOnCreate) {
                const _subscriptionOnCreate = API.graphql({
                    authMode: 'API_KEY',
                    query: onCreateItem,
                }).subscribe({
                    next: ({provider, value}) => {
                        if (typeof window !== "undefined") {
                            getItems()
                        }
                    },
                    error: (error) => console.warn(error),
                });
                setSubscriptionOnCreate(_subscriptionOnCreate);
            }


            return () => {
                controller.abort();
                subscriptionOnUpdate?.unsubscribe();
                subscriptionOnCreate?.unsubscribe();
            }
        } catch (e) {
            throw new Error(e.message);
        }
    }, [controller, subscriptionOnCreate, subscriptionOnUpdate]);

    /*
        Create Item Object Struct
        {
            description - Optional | String
            name - Required | String
            price - Optional | Number
            quantity - Optional | Number
            traits - Optional | String
        }
    */

    async function createItem(obj) {
        if (!'name' in obj || !'price' in obj || isNaN(obj.price)) {
            throw new Error('Name and price is required');
        }

        const inputs = {
            description: obj.description ?? '',
            id: v4(),
            name: obj.name,
            price: Number(obj.price),
        }

        if ('quantity' in obj) {
            if (isNaN(obj.quantity)) {
                throw new Error('Quality is not an int');
            }

            inputs['quantity'] = Number(obj.quantity);
        }

        if ('traits' in obj) {
            inputs['traits'] = obj.traits;
        }

        try {
            const { data, error, extensions } = await API.graphql({
                authMode: 'API_KEY',
                query: createItemMutation,
                variables: {
                    inputs: {
                        ...inputs,
                    }
                },
            });

            return data ? data.listItems : undefined;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    /*
        Update Item Object Struct
        {
            id - Required | String
            _version - Required | Number
            description - Optional | String
            name - Required | String
            price - Optional | Number
            quantity - Optional | Number
            traits - Optional | String
        }
    */

    async function updateItem(obj) {
        if (!'id' in obj || !'_version' in obj) {
            throw new Error('id and _version is required');
        }

        const inputs = {
            description: obj.description ?? '',
            id: obj.id,
            name: obj.name,
            price: Number(obj.price),
            _version: obj._version,
        }

        if ('quantity' in obj) {
            if (isNaN(obj.quantity)) {
                throw new Error('Quality is not an int');
            }

            inputs['quantity'] = Number(obj.quantity);
        }

        if ('traits' in obj) {
            inputs['traits'] = obj.traits;
        }

        try {
            const { data, error, extensions } = await API.graphql({
                authMode: 'API_KEY',
                query: updateItemMutation,
                variables: {
                    inputs: {
                        ...inputs,
                    }
                },
            });

            return data ? data.listItems : undefined;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async function buyItem(itemId, user, qty = 1) {
        if (!itemId || !user) {
            throw new Error('item id and user is required');
        }

        const item = items.items.find((i) => i.id === itemId);

        if (item.id === itemId) {
            throw new Error('User has already owns item');
        }

        if (item.quantity && item.users.items.length < items.quantity) {
            throw new Error('Item sold out');
        }

        if (!item) {
            throw new Error('Item not found');
        }

        if (qty > item.quantity) {
            throw new Error(`Max qty allowed ${item.quantity}`);
        }

        if ((qty * item.price) > user.tokens) {
            throw new Error('Insufficient funds')
        }

        try {
            const { data, error, extensions } = await API.graphql({
                authMode: 'API_KEY',
                query: updateUserItem,
                variables: {
                    inputs: {
                        id: v4(),
                        userId: user.id,
                        itemId,
                    }
                },
            });

            if (data) {
                return `Successfully brought ${item.name}`;
            }
        } catch (e) {
            throw new Error(e.message);
        }
    }

    return [
        items,
        createItem,
        updateItem,
        buyItem,
    ];
}

export default useItem;
