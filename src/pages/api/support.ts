import type { NextApiRequest, NextApiResponse } from "next";

import { env } from "../../env/server.mjs";

const inviteHandler = (req: NextApiRequest, res: NextApiResponse) => {
    res.redirect(env.SUPPORT_SERVER_INVITE);

    return;
};

export default inviteHandler;
