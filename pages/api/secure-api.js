import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session)
    return res.status(401).json({ message: "You are not logged in !" });

  return res.status(200).json({ message: "Logged in", session });
}
