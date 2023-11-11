import { publicProcedure, router } from "@/trpc/trpc";
import { registerController } from "@/trpc/controllers/auth/registerController";

import { registrationSchema } from "@/lib/validators/registrations";

export const authRouter = router({
  test: publicProcedure
    .input(registrationSchema)
    .mutation(({ input, ctx }) => registerController(input, ctx)),
});
