import { useCallback, useEffect, useState } from "react";
import { API } from "aws-amplify";
import {signIn, signOut, useSession} from 'next-auth/react';
import { getNFTS, updateNFTs } from "./nfts";
import { createUser as createUserMutation, updateUser } from "../src/graphql/mutations";
import { getWalletByDiscordId } from "../src/graphql/queries";
import { v4 } from "uuid";
import moment from "moment/moment";
import { HOLDER_ROLE, PRICE_PER_TOKEN } from "../shared/contants";

function useUser() {
  const {data: session} = useSession();
  const [user, setUser] = useState();

  async function startItem(itemId, user) {
    if (user.itemsStarred.includes(itemId)) {
      throw new Error('Item already starred');
    }

    try {
      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            _version: user._version,
            itemsStarred: [
              ...user.itemsStarred,
              itemId,
            ]
          }
        }
      });
      return data ? data.updateUser : null;
    } catch (e) {
      throw new Error(e.message);
    }
  }

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
    if (localStorage.getItem('user')) {
      return;
    }

    const localUser = JSON.parse(localStorage.getItem('user') ?? '{"id": null}');
    const user = await getWalletByDiscordID(session.discordUserDetails?.id ?? localUser.discordId);

    const roles = session.roles ?? [];

    if (!roles.includes(HOLDER_ROLE)) {
      throw new Error('User is not part of server or does not have holder role');
    }

    try {
      if (session) {
        if (user) {
          const nfts = await getNFTS('0x73e4A0e0F785278De16811089217207d37b78b71');

          if (nfts.length === 0) {
            throw new Error('User does not own any/are listed nfts');
          }

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
            })),
            tokens: 0,
            redeemDate: moment.utc().add('1', 'week').toISOString(),
          });

          if (newUser) {
            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser ?? null);
          }
        }
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }, [session]);

  useEffect(() => {
    console.log(session);
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
    localStorage.setItem('wallet', wallet);
    await signIn('discord');
  }

  async function logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('wallet');
    await signOut();
  }

  async function claimTokens() {
    const redeemDate = moment.utc(user.redeemDate);
    const today = moment.utc();
    if (today.isBefore(moment.utc(redeemDate))) {
      throw new Error(`Tokens can be claimed after ${redeemDate.format('YYYY-MM-DD')}`);
    }

    try {
      const nfts = user.nfts.length ?? 1;
      const claimableTokens = nfts * PRICE_PER_TOKEN;

      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            _version: user._version,
            tokens: claimableTokens,
          }
        }
      });

      if (data.updateUser) {
        getWalletByDiscordID(user.discordId);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function updateUserNFTs() {
    try {
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
        getWalletByDiscordID(user.discordId);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  return [user, session, logIn, logOut, claimTokens, updateUserNFTs, startItem];
}

export default useUser;