import z from "zod";

export const UserSchema = z.object({
  name: z.string().min(2).max(100),
  userId: z.string().min(2).max(100),
  username: z.string().min(2).max(100),
  email: z.string().email(),

  online: z.boolean().default(false),
  rle: z.enum(["ADMIN", "MANAGER", "EMPLOYEE"]).default("EMPLOYEE"),

  managerId: z.string().min(2).max(100),
  adminId: z.string().min(2).max(100),

  works: z.array(z.string().min(2).max(100)).optional(),
  position: z.string().min(2).max(100),
});

export type ActiveUser = z.infer<typeof UserSchema>;
