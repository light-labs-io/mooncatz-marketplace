import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import { GUILD_ID } from "../../../shared/contants";

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
const scopes = ['identify', 'guilds', 'guilds.members.read'].join(' ');

const id = GUILD_ID;

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID ?? '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
            authorization: { params: { scope: scopes } },
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken

            const response = await fetch(
                `https://discord.com/api/users/@me/guilds/${id}/member`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token?.accessToken,
                    }
                }
            );
            const resRoles = await response.json();

            if (resRoles.message === 'You are being rate limited.') {
                return session;
            }

            session.roles = resRoles.roles;
            session.discordUserDetails = resRoles.user;
            return session
        },
        async signIn({ user, account, profile, email, credentials }) {
            const response = await fetch(
                `https://discord.com/api/users/@me/guilds`,
                {
                    headers: {
                        Authorization: 'Bearer ' + account?.access_token,
                    }
                }
            );

            const res = await response.json();
            return !!res.find((i) => i.id === id);
        },
    },
    secret: process.env.JWt_SECERT,
})