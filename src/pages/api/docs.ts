import type { NextApiRequest, NextApiResponse } from "next";

const inviteHandler = (req: NextApiRequest, res: NextApiResponse) => {
    res.redirect("https://docs.vcroles.com");

    return;
};

export default inviteHandler;
