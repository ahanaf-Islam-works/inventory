import { z } from "zod";

export const registrationSchema = z.object({
  email: z.string().email(),

  name: z.string().min(3).max(50),

  role: z.enum(["Admin", "Manager", "Employee"]).default("Employee"),

  position: z.string().min(3).max(50),
});

export type RegisterUser = z.infer<typeof registrationSchema>;
