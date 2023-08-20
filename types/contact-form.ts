import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "The name should at least contain 1 character."),
  email: z.string().email({ message: "Provide a valid email" }),
  subject: z.string(),
  message: z
    .string()
    .min(1, "The message should at least contain 1 character."),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
