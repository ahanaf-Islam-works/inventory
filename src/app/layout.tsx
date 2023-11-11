import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AllProviders from "@/providers/AllProviders";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMS",
  description: "Inventory Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AllProviders>
          <Navbar />
          {children}
        </AllProviders>
      </body>
    </html>
  );
}
