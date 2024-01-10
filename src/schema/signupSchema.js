import { z } from "zod"

export const signupSchema = z.object({
  name: z.string().min(3, { message: "Name must have 3 characters" }).transform((name) => name.trim()
    .split(" ")
    .map((word) => word[0]
      .toUpperCase() + word.slice(1))
    .join(" ")),
  email: z.string().email({ message: "invalid email" }).toLowerCase(),
  password: z.string().min(6, { message: "Password must be at least 3 characters long" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 3 characters long" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})