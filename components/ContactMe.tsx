"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";
import { EmailValidation } from "@/lib/Email/emailValidation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendEmail } from "@/lib/mail";

const ContactMe = () => {
  const form = useForm<z.infer<typeof EmailValidation>>({
    resolver: zodResolver(EmailValidation),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof EmailValidation>) => {
    console.log(data)

    console.log("API Key:", process.env.RESEND_API_KEY);

    await sendEmail(data.email, data.content)
  }


  return (
    <main className="flex justify-center items-center ">
      <Dialog >
        <DialogTrigger asChild>
          <Button className="hover:scale-105 text-black font-bold p-5 rounded-xl transition-all duration-300 ease-in-out">
            Contact Me
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Send an Email</DialogTitle>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <DialogFooter>
          <Button type="submit">Send Email</Button>
        </DialogFooter>
      </form>
    </Form>

         
      </DialogContent>
      </Dialog>
    </main>
  );
};

export default ContactMe;
