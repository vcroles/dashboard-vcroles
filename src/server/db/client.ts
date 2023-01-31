import { PrismaClient } from "~/client";
import { PrismaClient as AuthClient } from "~/auth-client";
import { Redis } from "@upstash/redis";

import { env } from "../../env/server.mjs";

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined; // skipcq: JS-0239
    // eslint-disable-next-line no-var
    var authClient: AuthClient | undefined; // skipcq: JS-0239
    // eslint-disable-next-line no-var
    var redis: Redis | undefined; // skipcq: JS-0239
}

export const prisma =
    global.prisma ||
    new PrismaClient({
        log:
            env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

export const authClient =
    global.authClient ||
    new AuthClient({
        log:
            env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

export const redis = new Redis({
    url: env.UPSTASH_REDIS_REST_URL,
    token: env.UPSTASH_REDIS_REST_TOKEN,
});

if (env.NODE_ENV !== "production") {
    global.prisma = prisma;
    global.authClient = authClient;
    global.redis = redis;
}
