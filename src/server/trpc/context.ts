import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

import { prisma } from "../db/client";
import { getAuth } from "@clerk/nextjs/server";
import type { AuthObject } from "@clerk/backend";

interface AuthContext {
    auth: AuthObject;
}

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async ({ auth }: AuthContext) => {
    return {
        auth,
        prisma,
    };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
    return await createContextInner({
        auth: getAuth(opts.req),
    });
};

export type Context = Awaited<ReturnType<typeof createContext>>;
