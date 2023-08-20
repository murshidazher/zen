"use client";

import type { FC } from "react";

import { cn } from "@/lib/utils";
import useContactForm from "@/hooks/use-contact-form";
import { Icons } from "@/components/ui/icons";

const ContactIcon: FC = () => {
  const { setOpen } = useContactForm();

  return (
    <button
      type="button"
      className={cn(
        "rounded p-2",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800"
      )}
      aria-label="Get in touch"
      onClick={() => setOpen(true)}
    >
      <Icons.mailbox width={16} height={16} />
    </button>
  );
};

export default ContactIcon;
