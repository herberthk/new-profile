// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      const transporter = await nodemailer.createTransport({
        host: process.env.SMTP,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });
      await transporter.sendMail({
        from: '"Your profile" <info@netbritz.com>', // sender address
        to: "herberthtk100@gmail.com", // list of receivers
        subject: `Inquiry from your profile`, // Subject line
        // text: "Hello world?",
        html: `<p><b>Hello Herbert</b>,</p>${name} with ${email} has sent ${message}</p>`,
      });

      res.status(200).json({ success: true, message: "Message sent" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Message not sent" });
    }
  }

  // res.status(200).json({ name: "John Doe" });
}
