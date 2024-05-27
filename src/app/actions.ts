"use server";

import type { Channel, Role } from "src/server/server-utils";
import {
    checkUserPermissions,
    getUserAccount,
    getUserToken,
} from "src/server/server-utils";
import type { Guild } from "~/client";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "src/server/db/client";
import { revalidatePath } from "next/cache";

// import { z } from "zod";

// const schema = z.object({
//     guild: z.string(),
//     data: z.object({
//         loggingChannel: z.string().optional(),
//         loggingEnabled: z.boolean(),
//         ttsEnabled: z.boolean(),
//         ttsRole: z.string().optional(),
//         ttsLeave: z.boolean(),
//     }),
// });

export async function updateGuildData(
    guild: Guild,
    options: {
        loggingToggle: boolean;
        loggingChannel: Channel | null;
        ttsToggle: boolean;
        ttsRole: Role | null;
        ttsLeave: boolean;
    },
) {
    // Check the users permissions
    const { userId } = await auth();

    if (!userId) {
        // error?
        return;
    }

    const accessToken = await getUserToken(userId);
    const account = await getUserAccount(userId);

    if (!account || !accessToken) {
        // error?
        return;
    }

    const hasPermissions = await checkUserPermissions(
        accessToken,
        account?.externalId,
        guild.id,
    );

    if (!hasPermissions) {
        // error?
        return;
    }

    // Now check if the guild data has actually changed
    if (
        options.loggingToggle === (guild.logging ? true : false) &&
        ((options.loggingChannel === null && guild.logging === null) ||
            options.loggingChannel?.id === guild.logging) &&
        options.ttsToggle === guild.ttsEnabled &&
        ((options.ttsRole === null && guild.ttsRole === null) ||
            options.ttsRole?.id === guild.ttsRole) &&
        options.ttsLeave === guild.ttsLeave
    ) {
        return;
    } else if (options.loggingToggle && !options.loggingChannel) {
        return;
    }

    // Now update the guild data
    const logging = options.loggingToggle
        ? options.loggingChannel && options.loggingChannel.id
        : null;

    const updatedGuild = await prisma.guild.update({
        where: {
            id: guild.id,
        },
        data: {
            logging,
            ttsEnabled: options.ttsToggle,
            ttsRole: options.ttsRole?.id ?? null,
            ttsLeave: options.ttsLeave,
        },
    });

    revalidatePath(`/d/${guild.id}`);

    return updatedGuild;
}
