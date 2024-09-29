import { z } from "zod"


export const EmailValidation = z.object({
  email: z.string().email(),
  content: z.string().min(10, { message: "Content is too short" }),
});