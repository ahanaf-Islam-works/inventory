import { router, publicProcedure, employeeProcedure } from "../../trpc";

export const employeeRouter = router({
  test: publicProcedure.query(() => {
    return "test Emp";
  }),
  testEmployee: employeeProcedure.query(() => {
    return "employee test employee";
  }),
});
