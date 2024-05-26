"use server";
import mailgun from "mailgun-js";

const mailgunClient = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export async function sendEmail({ subject, message }: {subject: string, message: string}) {
  const emailData = {
    to: process.env.EMAIL_TO!,
    from: "XtH2Z@example.com",
    subject,
    text: message,
  };

  console.log("Sending email:", emailData);

  try {
    const result = await mailgunClient.messages().send(emailData);
    console.log("Email sent successfully!");
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
