import axios from "axios";

import { router, protectedProcedure } from "../trpc";
import { prisma, redis } from "../../db/client";
import { z } from "zod";
import { env } from "../../../env/server.mjs";

const BASE_URL = "https://discord.com/api/v10";

const CACHE_DURATION = 60 * 5; // 5 minutes
const CACHE_DURATION_LONG = 60 * 60 * 2; // 2 hours

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

export type Channel = {
    id: string;
    name: string;
    type: ChannelType;
    position: number;
};

export const ChannelType = {
    GUILD_TEXT: 0,
    GUILD_VOICE: 2,
    GUILD_CATEGORY: 4,
    GUILD_STAGE_VOICE: 13,
} as const;

export type ChannelType = typeof ChannelType[keyof typeof ChannelType];

export type Role = {
    id: string;
    name: string;
    color: number;
    position: number;
};

const fetchBotGuilds = async () => {
    return await prisma.guild.findMany();
};

const fetchUserGuilds = async (
    access_token: string | null,
    discordID: string
) => {
    if (!access_token) {
        return [];
    }

    const URL = `${BASE_URL}/users/@me/guilds`;

    // check the redis cache
    const cacheKey = `discord:userGuilds:${discordID}`;
    const cached = await redis.get(cacheKey);

    if (cached) {
        return cached as GuildResponse[];
    }

    const response = await axios.get<GuildResponse[]>(URL, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    if (response.status !== 200) {
        return [];
    }

    // cache the response
    await redis.set(cacheKey, response.data, {
        ex: CACHE_DURATION_LONG,
    });

    return response.data;
};

const fetchMutualGuilds = async (
    access_token: string | null,
    discordID: string
) => {
    const userGuilds = await fetchUserGuilds(access_token, discordID);

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

        const userGuilds = await fetchUserGuilds(
            account.access_token,
            account.providerAccountId
        );

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

            const mutualGuilds = await fetchMutualGuilds(
                account.access_token,
                account.providerAccountId
            );

            const guild = mutualGuilds.find((g) => g.id === input.guild);

            if (!guild) {
                return false;
            }

            if (guild.owner === true || guild.permissions & (1 << 3)) {
                return true;
            }

            return false;
        }),
    getGuildChannels: protectedProcedure
        .input(z.object({ guild: z.string() }))
        .query(async ({ ctx, input }) => {
            const account = await ctx.prisma.account.findFirst({
                where: {
                    userId: ctx.session.user.id,
                },
            });

            if (!account) {
                return [];
            }

            const URL = `${BASE_URL}/guilds/${input.guild}/channels`;

            // check the redis cache for the channels
            const cacheKey = `discord:channels:${input.guild}`;
            const cachedChannels = await redis.get(cacheKey);

            if (cachedChannels) {
                return cachedChannels as Channel[];
            }

            const response = await axios.get<Channel[]>(URL, {
                headers: {
                    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
                },
            });

            if (response.status !== 200) {
                return [];
            }

            const channels = response.data
                .map((channel) => {
                    return {
                        id: channel.id,
                        name: channel.name,
                        type: channel.type,
                        position: channel.position,
                    };
                })
                .filter(
                    (channel) =>
                        channel.type === 0 ||
                        channel.type === 2 ||
                        channel.type === 4 ||
                        channel.type === 13
                );

            await redis.set(cacheKey, JSON.stringify(channels), {
                ex: CACHE_DURATION,
            });

            return channels;
        }),
    getGuildRoles: protectedProcedure
        .input(z.object({ guild: z.string() }))
        .query(async ({ ctx, input }) => {
            const account = await ctx.prisma.account.findFirst({
                where: {
                    userId: ctx.session.user.id,
                },
            });

            if (!account) {
                return [];
            }

            const URL = `${BASE_URL}/guilds/${input.guild}/roles`;

            // check the redis cache for the roles
            const cacheKey = `discord:roles:${input.guild}`;
            const cachedRoles = await redis.get(cacheKey);

            if (cachedRoles) {
                return cachedRoles as Role[];
            }

            const response = await axios.get<Role[]>(URL, {
                headers: {
                    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
                },
            });

            if (response.status !== 200) {
                return [];
            }

            const roles = response.data;

            await redis.set(cacheKey, JSON.stringify(roles), {
                ex: CACHE_DURATION,
            });

            return roles;
        }),
    getGuildData: protectedProcedure
        .input(z.object({ guild: z.string() }))
        .query(async ({ ctx, input }) => {
            const guild = await ctx.prisma.guild.findUnique({
                where: {
                    id: input.guild,
                },
            });

            if (!guild) {
                return await ctx.prisma.guild.create({
                    data: {
                        id: input.guild,
                    },
                });
            }

            return guild;
        }),
    updateGuildData: protectedProcedure
        .input(
            z.object({
                guild: z.string(),
                data: z.object({
                    loggingChannel: z.string().optional(),
                    loggingEnabled: z.boolean(),
                    ttsEnabled: z.boolean(),
                    ttsRole: z.string().optional(),
                    ttsLeave: z.boolean(),
                }),
            })
        )
        .mutation(async ({ ctx, input }) => {
            // TODO: update the database
            const logging = input.data.loggingEnabled
                ? input.data.loggingChannel
                : null;

            const guild = await ctx.prisma.guild.update({
                where: {
                    id: input.guild,
                },
                data: {
                    logging,
                    ttsEnabled: input.data.ttsEnabled,
                    ttsRole: input.data.ttsRole,
                    ttsLeave: input.data.ttsLeave,
                },
            });

            return guild;
        }),
    getLinks: protectedProcedure
        .input(z.object({ guild: z.string() }))
        .query(async ({ ctx, input }) => {
            const links = await ctx.prisma.link.findMany({
                where: {
                    guildId: input.guild,
                },
            });

            return links;
        }),
});
