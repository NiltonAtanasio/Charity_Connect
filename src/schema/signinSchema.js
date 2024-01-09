import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "invalid email" }).toLowerCase(),
  password: z.string().min(6, { message: "password must be at least 6 characters long" })
});