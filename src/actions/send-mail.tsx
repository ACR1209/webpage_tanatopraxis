"use server";
import nodemailer from 'nodemailer';


export async function sendEmail({ subject, message }: {subject: string, message: string}) {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org', // replace with your SMTP server
      port: 587, // replace with your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME, // replace with your SMTP username
        pass: process.env.MAIL_PASSWORD, // replace with your SMTP password
      },
    });

    let mailOptions = {
      from: 'TanatoWebpage <tanato@praxis.ec>', // sender address
      to: process.env.EMAIL_TO, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent");
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
