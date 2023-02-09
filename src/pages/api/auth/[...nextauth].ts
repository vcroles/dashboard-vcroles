import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { authClient } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
    // Include user.id on session
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
            }

            if (session.user) {
                const userAccount = await authClient.account.findFirst({
                    where: {
                        userId: session.user.id,
                    },
                });

                if (Date.now() >= (userAccount?.expires_at ?? 0) * 1000) {
                    // delete the user
                    await authClient.user.deleteMany({
                        where: {
                            id: session.user.id,
                        },
                    });

                    // @ts-expect-error Force the session to be deleted
                    session = null;
                }
            }

            return session;
        },
    },
    adapter: PrismaAdapter(authClient),
    providers: [
        DiscordProvider({
            clientId: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET,
            authorization:
                "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
        }),
    ],
};

export default NextAuth(authOptions);
