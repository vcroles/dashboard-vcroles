import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";
import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";

import { getServerAuthSession } from "../common/get-server-auth-session";
import { prisma, authClient } from "../db/client";
import { appRouter } from "./router/_app";
import type { GetServerSidePropsContext } from "next";

type CreateContextOptions = {
    session: Session | null;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = (opts: CreateContextOptions) => {
    return {
        session: opts.session,
        prisma,
        authClient,
    };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;

    // Get the session from the server using the unstable_getServerSession wrapper function
    const session = await getServerAuthSession({ req, res });

    return createContextInner({
        session,
    });
};

export type Context = inferAsyncReturnType<typeof createContext>;

export const createSSGHelpers = async (
    context: GetServerSidePropsContext,
    opts: { useSession: boolean }
) => {
    if (opts.useSession) {
        const session = await getServerAuthSession({
            req: context.req,
            res: context.res,
        });

        return createServerSideHelpers({
            router: appRouter,
            ctx: createContextInner({ session }),
            transformer: superjson,
        });
    }

    return createServerSideHelpers({
        router: appRouter,
        ctx: createContextInner({ session: null }),
        transformer: superjson,
    });
};
