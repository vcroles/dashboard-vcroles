import type { NextApiRequest, NextApiResponse } from "next";

import { env } from "../../env/server.mjs";

const inviteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { guild: guild_id } = req.query;

    const BASE_URL = env.DISCORD_BOT_INVITE;

    // if guild_id has value, add it to the url as a query param
    const url = guild_id ? `${BASE_URL}&guild_id=${guild_id}` : BASE_URL;

    res.redirect(url);

    return;
};

export default inviteHandler;
