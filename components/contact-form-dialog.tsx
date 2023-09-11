"use client";

import { useCallback } from "react";
import sendEmail from "@/services/send-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { ContactForm, contactFormSchema } from "@/types/contact-form";
import useContactForm from "@/hooks/use-contact-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toaster";
import VisuallyHidden from "@/components/ui/visually-hidden";
import { contactTypes } from "@/components/data/contact-types";

const defaultValues: ContactForm = {
  name: "",
  email: "",
  subject: contactTypes.find((type) => type.default)?.value ?? "",
  message: "",
};

const ContactFormDialog = () => {
  const { open, setOpen } = useContactForm();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    defaultValues,
  });

  const onSubmit: SubmitHandler<ContactForm> = useCallback(
    async (value) => {
      const promise = async () => {
        await sendEmail(value);
        form.reset(defaultValues);
      };

      await toast.promise(promise, {
        loading: "Sending the mail...",
        success: (data) => `The mail was sent successfully.`,
        error: (error) => {
          form.reset(value);
          return error.message;
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="form-bg flex flex-col items-center sm:block sm:max-w-[425px]">
        <DialogHeader className="items-center sm:mb-4 sm:items-start">
          <DialogTitle className="flex">
            Get in touch&nbsp;<div className="animate-wave">👋</div>
          </DialogTitle>
          <DialogDescription>
            Love to hear from you, I&apos;ll get back as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="prose prose-neutral grid w-full gap-2 py-2"
            data-netlify="true"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-muted-foreground">
                    Name
                  </FormLabel>
                  <FormControl className="mt-0">
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-muted-foreground">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-muted-foreground">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value ?? ""}
                    >
                      <SelectTrigger className="border-none bg-zinc-100 font-sans text-xs shadow-none dark:bg-zinc-800 dark:text-zinc-50">
                        <SelectValue
                          className="border-none bg-zinc-100 font-sans text-xs shadow-none dark:bg-zinc-800 dark:text-zinc-50"
                          placeholder="Select subject"
                        />
                      </SelectTrigger>
                      <SelectContent className="text-xs shadow-none">
                        {contactTypes.map(({ label, value }) => (
                          <SelectItem
                            className="text-xs"
                            key={value}
                            value={value}
                          >
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-muted-foreground">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="max-h-[10rem] min-h-[4rem] "
                      placeholder="Start typing your message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-2">
              <Button
                size={"sm"}
                type="button"
                variant={"secondary"}
                className="border-accent hover:bg-accent mb-2 border border-solid sm:mb-0"
                onClick={() => setOpen(false)}
              >
                Cancel
                <VisuallyHidden>Close</VisuallyHidden>
              </Button>
              <Button
                className="shadow-gradient"
                size={"sm"}
                type="submit"
                disabled={form.formState.isSubmitted}
              >
                Send
                {!form.formState.isSubmitted || !form.formState.isValid ? (
                  <Icons.mailbox className="ml-2" />
                ) : (
                  <Icons.spinner className="ml-2 h-4 w-4" />
                )}
                <VisuallyHidden>Send</VisuallyHidden>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
