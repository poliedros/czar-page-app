// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  name: string;
  from: string;
  body: string;
};

async function sendMail(name: string, from: string, body: string) {
  const transport = {
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    secure: Boolean(process.env.SMTP_SECURE),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };
  const transporter = nodemailer.createTransport(transport);

  const bodyToSend = `<p>Nome: ${name}</p>
                      <p>Email: ${from}</p>
                      <p>Mensagem: ${body}</p>`;
  const info = await transporter.sendMail({
    from: `"CZAR+ Contato" <${process.env.SMTP_USER}>`, // sender address`
    to: `${process.env.SMTP_TO}`,
    subject: "Novo contato no site ✔", // Subject line
    text: bodyToSend,
    html: bodyToSend,
  });

  console.log("Message sent: %s", info.messageId);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body as Data;
  if (!body.name || !body.from || !body.name) {
    res.status(400).end();
    return;
  }
  try {
    await sendMail(body.name, body.from, body.body);
    res.status(201).end();
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}
