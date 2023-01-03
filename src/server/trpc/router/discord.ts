import axios from "axios";

import { router, protectedProcedure } from "../trpc";
import { prisma } from "../../db/client";
import { z } from "zod";

const baseURL = "https://discord.com/api/v10";

export type GuildResponse = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
    permissions: number;
    features: string[];
};

export type Guild = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
    permissions: number;
    features: string[];
    includesBot: boolean;
};

export const fetchBotGuilds = async () => {
    return await prisma.guild.findMany();
};

export const fetchUserGuilds = async (access_token: string | null) => {
    if (!access_token) {
        return [];
    }

    const URL = `${baseURL}/users/@me/guilds`;

    const response = await axios.get<GuildResponse[]>(URL, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    if (response.status !== 200) {
        return [];
    }

    return response.data;
};

export const fetchMutualGuilds = async (access_token: string | null) => {
    const userGuilds = await fetchUserGuilds(access_token);

    const botGuilds = await fetchBotGuilds();

    const mutualGuilds = userGuilds.filter((guild) =>
        botGuilds.some((botGuild) => botGuild.id === guild.id)
    );

    return mutualGuilds;
};

export const discordRouter = router({
    getGuilds: protectedProcedure.query(async ({ ctx }) => {
        const account = await ctx.prisma.account.findFirst({
            where: {
                userId: ctx.session.user.id,
            },
        });

        if (!account) {
            return [];
        }

        const userGuilds = await fetchUserGuilds(account.access_token);

        const guilds = userGuilds.filter(
            (guild) => guild.owner === true || guild.permissions & (1 << 3)
        );

        const botGuilds = await fetchBotGuilds();

        const guildsWithBot: Guild[] = guilds.map((guild) => {
            return {
                ...guild,
                includesBot: botGuilds.some(
                    (botGuild) => botGuild.id === guild.id
                ),
            };
        });

        return guildsWithBot;
    }),
    checkUserPermissions: protectedProcedure
        .input(z.object({ guild: z.string() }))
        .query(async ({ ctx, input }) => {
            const account = await ctx.prisma.account.findFirst({
                where: {
                    userId: ctx.session.user.id,
                },
            });

            if (!account) {
                return false;
            }

            const mutualGuilds = await fetchMutualGuilds(account.access_token);

            const guild = mutualGuilds.find(
                (guild) => guild.id === input.guild
            );

            if (!guild) {
                return false;
            }

            if (guild.owner === true || guild.permissions & (1 << 3)) {
                return true;
            }

            return false;
        }),
});
