import type { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firestore";
import { findOrCreateAuth, sendCode } from "lib/controllers/auth";
import { Auth } from "lib/auth";
import { User } from "lib/user";
import { send } from "process";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  // const auth = await findOrCreateAuth(req.body.email);
  const code = await sendCode(req.body.email);
  res.send(code);
}
