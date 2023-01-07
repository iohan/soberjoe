import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  status: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    res.status(405).json({ status: 'Only POST requests allowed' });
    return;
  }

  const nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  transporter.verify((err: any, success: any) => {
    err ? console.log('Verify Error', err) : console.log(`=== Server is ready to take our messages: ${success} ===`);
  });

  const mailOptions = {
    from: 'Tidsbokning Tatuering <johan@soberjoe.se>',
    replyTo: `${req.body.email}`,
    to: 'Johan Östling <johan@soberjoe.se>',
    subject: 'Soberjoe.se - Bokningsförfrågan',
    html: `<h1>Tidsbokning tatuering</h1><br />
        <strong>Epost:</strong> ${req.body.email}<br />
        <strong>Placering:</strong> ${req.body.placement}<br />
        <strong>Tidsförslag:</strong> ${req.body.timeproposal}<br />
        <strong>Beskrivning</strong><br />${req.body.description}
        `,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, (err: any, data: any) => {
    if (err) {
      console.log('Error ' + err);
      return res.status(503).json({ status: 'fail' });
    } else {
      console.log('Email sent successfully');
      return res.status(200).json({ status: 'success' });
    }
  });
}
