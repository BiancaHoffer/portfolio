import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface mailerProps {
  email: string;
  name: string;
  content: string;
}

const myEmail = process.env.NODEMAILER_MYEMAIL;
const myEmailPass = process.env.NODEMAILER_MYEMAILPASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: myEmail,
    pass: myEmailPass,
  },
  tls: {
    rejectUnauthorized: false
  }
})

const mailer = ({ email, name, content }: mailerProps) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;

  const msg = {
    from,
    to: `${myEmail}`,
    subject: `Nova mensagem de contato - ${name} `,
    text: content,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, content } = req.body;

  if (!name || !email || !content) {
    res.status(403).end("Some request arrived empty.");
    return;
  }

  const mailerRes = await mailer({ email, name, content });
  res.send(mailerRes);
}
