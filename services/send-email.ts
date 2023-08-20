import { ContactForm } from "@/types/contact-form";

const sendEmail = async (payload: ContactForm) => {
  const response = await fetch(`/api/mail`, {
    headers: {
      "Content-Type": "application/json",
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET ?? "",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as { message: string };

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.message;
};

export default sendEmail;
