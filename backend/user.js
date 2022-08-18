import { useCallback, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getWalletByWalletAddress } from "../src/graphql/queries";
import {signIn, signOut, useSession} from 'next-auth/react';

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

  const saveUser = useCallback(async (localUser) => {
    if (session) {
      const user = await getWalletByDiscordID(session.discordUserDetails?.id ?? localUser);

      if (user) {

      }
    }
  }, [session])

  useEffect(() => {
    const controller = new AbortController();
    const localUser = JSON.parse(localStorage.getItem('user') ?? '{"id": null}');

    if (!localUser.id) {
      saveUser(localUser);
    }

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

  async function getUser(wallet) {
    if (!wallet) {
      throw new Error('Wallet address required');
    }

    try {
      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: getWalletByWalletAddress,
        variables: {
          wallet,
        }
      });

      if (data.getWalletByWalletAddress.items > 0) {
        setUser(data.getWalletByWalletAddress.items[0]);
      } else {
        setUser(null);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  return [user, session];
}

export default useUser;