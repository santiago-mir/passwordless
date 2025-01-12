import type { NextApiRequest, NextApiResponse } from "next";
import {} from "lib/firestore";
export default function (req: NextApiRequest, res: NextApiResponse) {
  res.send("hola soy la api");
}
