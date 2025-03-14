import { getSession } from "@auth0/nextjs-auth0";
import clientPromisse from "../../lib/mongodb";

export default async function handler(req, res) {
  const { user } = await getSession(req, res);
  const client = await clientPromisse;
  const db = client.db("blog-ai");

  const userProfile = await db.collection("users").updateOne(
    {
      auth0Id: user.sub,
    },
    {
      $inc: {
        availableTokens: 10,
      },
      $setOnInsert: {
        auth0Id: user.sub,
      },
    },
    {
      upsert: true,
    }
  );

  res.status(200).json({ name: "John Doe" });
}
