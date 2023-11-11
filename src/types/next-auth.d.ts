import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;
declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    role?: string;
    online?: boolean;
  }
}

export declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & {
      id: UserId;
      name: string;
      email: string;
      image: string;
      username: string;
      role: "ADMIN" | "MANAGER" | "EMPLOYEE";
      online: boolean;
    };
  }
}
