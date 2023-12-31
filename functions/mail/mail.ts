import { sendEmail } from "@netlify/emails";
import { builder, Handler } from "@netlify/functions";

import { getDate } from "./utils/get-date";

type Payload = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const handler: Handler = async (event, context) => {
  const body: Payload = JSON.parse(event?.body ?? "");
  const { name, subject: type, email, message } = body;

  const subject = `Incoming message from ${name} via ${email}`;

  await sendEmail({
    to: process.env.EMAIL_ADDRESS ?? "",
    from: "noreply@murshidazher.com",
    subject,
    template: "contact",
    parameters: {
      title: subject,
      intro: `I would like to ${type.toLowerCase()}.`,
      body: message,
      footer: `Sent on ${getDate()}`,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "The email is sent." }),
  };
};

export { handler };
