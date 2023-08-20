import { ContactType } from "@/types/contact-type";

export const contactTypes: ContactType[] = [
  { label: "Have a chat", value: "contact", default: true },
  { label: "Hire you for freelance work", value: "freelance" },
  {
    label: "Hire you for consulting work",
    value: "consulting",
  },
];
