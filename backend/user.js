import { useCallback, useEffect, useState } from "react";
import { API } from "aws-amplify";
import {signIn, signOut, useSession} from 'next-auth/react';
import { getNFTS, updateNFTs } from "./nfts";
import { createUser as createUserMutation } from "../src/graphql/mutations";
import { v4 } from "uuid";
import moment from "moment/moment";

function useUser() {
  const {data: session} = useSession();
  const [user, setUser] = useState();

  async function getWalletByDiscordID(discordId) {
    try {
      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: getWalletByDiscordId,
        variables: {
          discordId,
        }
      });

      return data.getWalletByDiscordId.items.length > 0 ? data.getWalletByDiscordId.items[0] : null;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function createUser(obj) {
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
      throw new Error(e.message);
    }
  }

  const saveUser = useCallback(async () => {
    if (session) {
      const localUser = JSON.parse(localStorage.getItem('user') ?? '{"id": null}');
      const user = await getWalletByDiscordID(session.discordUserDetails?.id ?? localUser.discordId);

      if (user) {
        const nfts = await getNFTS(user.wallet);
        const updatedUser = await updateNFTs({
          id: user.id,
          nfts: nfts.map((n) => ({
            contract: n.contract.address,
            tokenId: n.tokenId,
          })),
          _version: user._version,
        });

        if (updatedUser) {
          localStorage.setItem('user', JSON.stringify(updatedUser));
          setUser(updatedUser ?? null);
        }
      } else {
        const wallet = localStorage.getItem('wallet');
        const nfts = await getNFTS(wallet ?? '');

        const newUser = await createUser({
          wallet: wallet ?? '',
          discordId: session.discordUserDetails.id,
          image: session.user.image,
          username: session.discordUserDetails.username,
          discriminator: session.discordUserDetails.discriminator,
          nfts: nfts.map((n) => ({
            contract: n.contract.address,
            tokenId: n.tokenId,
          }))
        });

        if (newUser) {
          localStorage.setItem('user', JSON.stringify(newUser));
          setUser(newUser ?? null);
        }
      }
    }
  }, [session]);

  useEffect(() => {
    const controller = new AbortController();
    saveUser();
    return () => {
      controller.abort();
    }
  }, [saveUser]);

  async function logIn(wallet) {
    if (!wallet) {
      throw new Error('Wallet address required');
    }
    await signIn('discord');
  }

  async function logOut() {
    localStorage.remove('user');
    localStorage.remove('wallet');
    await signOut();
  }

  return [user, session, logIn, logOut];
}

export default useUser;