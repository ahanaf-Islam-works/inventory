import { TRPCError, initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const t = initTRPC.create();
const middleware = t.middleware;

const isAdmin = middleware(async (opts) => {
  const getUser = await getServerSession(authOptions);
  if (!getUser) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to access this resource.",
    });
  }
  const user = getUser.user;

  if (user.role !== "ADMIN") {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to access this resource.",
    });
  }

  return opts.next({
    ctx: {
      user,
      opts,
    },
  });
});

const isManager = middleware(async (opts) => {
  const getUser = await getServerSession(authOptions);
  if (!getUser) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to access this resource.",
    });
  }
  const user = getUser.user;
  if (user.role !== "MANAGER") {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to access this resource.",
    });
  }

  return opts.next({
    ctx: {
      user,
      opts,
    },
  });
});

const isEmployee = middleware(async (opts) => {
  const getUser = await getServerSession(authOptions);
  if (!getUser) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to access this resource.",
    });
  }
  const user = getUser.user;
  if (user.role !== "EMPLOYEE") {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to access this resource.",
    });
  }

  return opts.next({
    ctx: {
      user,
      opts,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const employeeProcedure = t.procedure.use(isEmployee);
export const managerProcedure = t.procedure.use(isManager);
export const adminProcedure = t.procedure.use(isAdmin);
