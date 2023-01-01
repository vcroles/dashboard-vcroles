import axios from "axios";

import { router, protectedProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";

const baseURL = "https://discord.com/api/v10";

export type GuildResponse = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
    permissions: number;
    features: string[];
};

export const fetchBotGuilds = async () => {
    const TOKEN = env.DISCORD_BOT_TOKEN;
    const URL = `${baseURL}/users/@me/guilds`;

    const response = await axios.get<GuildResponse[]>(URL, {
        headers: {
            Authorization: `Bot ${TOKEN}`,
        },
    });

    if (response.status !== 200) {
        return [];
    }

    return response.data;
};

export const discordRouter = router({
    getGuilds: protectedProcedure.query(async ({ ctx }) => {
        const URL = `${baseURL}/users/@me/guilds`;

        const account = await ctx.prisma.account.findFirst({
            where: {
                userId: ctx.session.user.id,
            },
        });

        if (!account) {
            return [];
        }

        const response = await axios.get<GuildResponse[]>(URL, {
            headers: {
                Authorization: `Bearer ${account?.access_token}`,
            },
        });

        if (response.status !== 200) {
            return [];
        }

        const guilds = response.data.filter(
            (guild) => guild.owner === true || guild.permissions & (1 << 3)
        );

        const botGuilds = await fetchBotGuilds();

        const guildsWithBot = guilds.map((guild) => {
            return {
                ...guild,
                includesBot: botGuilds.some(
                    (botGuild) => botGuild.id === guild.id
                ),
            };
        });

        return guildsWithBot;
    }),
});
