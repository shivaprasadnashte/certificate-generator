import nodemailer from "nodemailer";

export async function sendMail(email, url) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.PUBLIC_MAIL_ID,
      pass: process.env.PUBLIC_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.PUBLIC_MAIL_ID,
    to: email,
    subject: "Hello",
    text: "Your can download your certificate heare " + url,
  };

  await transporter.sendMail(mailOptions);
  return true;
}
