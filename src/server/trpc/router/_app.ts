import { router } from "../trpc";
import { discordRouter } from "./discord";

export const appRouter = router({
    discord: discordRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
