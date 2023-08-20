"use client";

import type { FC } from "react";

import useContactForm from "@/hooks/use-contact-form";
import { Icons } from "@/components/ui/icons";

import { Button } from "./ui/button";

const ContactButton: FC = () => {
  const { setOpen } = useContactForm();

  return (
    <Button
      variant="default"
      size={"sm"}
      aria-label="Get in touch"
      onClick={() => setOpen(true)}
    >
      Get in touch <Icons.arrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default ContactButton;
