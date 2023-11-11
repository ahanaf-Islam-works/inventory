import { getServerSession } from "next-auth/next";
import db from "@/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/signin",
    newUser: "/register",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Please enter your email and password.");
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("Incorrect email or password.");
        }
        if (!user.password) {
          throw new Error("This account doesn't have a password.");
        }

        if (!user || !compare(credentials.password, user.password)) {
          throw new Error("Incorrect email or password.");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: null,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        id: token.id,
        username: token.username,
        name: token.name,
        email: token.email,
        image: token.image,
        role: token.role,
        online: token.online,
      };
    },

    jwt: async ({ token, user }) => {
      const dbUser = await db.user.findUnique({
        where: {
          email: token.email as string,
        },
      });

      if (user && dbUser) {
        return {
          id: dbUser.id,
          username: dbUser.username,
          name: dbUser.name,
          email: dbUser.email,
          image: null,
          role: dbUser.role,
          online: dbUser.online,
        };
      }
      return token;
    },
  },
};
