import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";

import { type AppRouter } from "../server/trpc/router/_app";

const getBaseUrl = () => {
    if (typeof window !== "undefined") return ""; // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const trpc = createTRPCNext<AppRouter>({
    config({ ctx }) {
        if (typeof window !== "undefined") {
            return {
                transformer: superjson,
                links: [
                    loggerLink({
                        enabled: (opts) =>
                            process.env.NODE_ENV === "development" ||
                            (opts.direction === "down" &&
                                opts.result instanceof Error),
                    }),
                    httpBatchLink({
                        url: `${getBaseUrl()}/api/trpc`,
                    }),
                ],
            };
        }
        return {
            transformer: superjson,
            links: [
                loggerLink({
                    enabled: (opts) =>
                        process.env.NODE_ENV === "development" ||
                        (opts.direction === "down" &&
                            opts.result instanceof Error),
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    headers() {
                        if (ctx?.req) {
                            const {
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                connection: _connection,
                                ...headers
                            } = ctx.req.headers;
                            return {
                                ...headers,
                                "x-ssr": "1",
                            };
                        }
                        return {};
                    },
                }),
            ],
        };
    },
    ssr: true,
});

/**
 * Inference helper for inputs
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;
/**
 * Inference helper for outputs
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
