import type { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware } from "lib/middlewares";
import methods from "micro-method-router";

const handler = methods({
  async get(req: NextApiRequest, res: NextApiResponse, token) {
    const userData = {
      id: token.userId,
      email: token.email,
    };
    res.send(userData);
  },
});

export default authMiddleware(handler);
