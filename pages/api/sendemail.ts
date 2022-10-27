// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  await fetch("https://site.api.czar.dev/send", {
    body: JSON.stringify(data),
    method: "POST",
  });
  console.log(req.body);
  res.status(200).json({});
}
