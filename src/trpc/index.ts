import { router } from "./trpc";
import { employeeRouter } from "./_trpc_API/workplace/employeeRouter";
import { authRouter } from "./_trpc_API/auth/registration";

export const appRouter = router({
  auth: authRouter,
  employee: employeeRouter,
});

export type AppRouter = typeof appRouter;
