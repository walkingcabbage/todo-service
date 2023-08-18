import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth";
import AuthSession from "./AuthSession";
import { useSession } from "next-auth/react";
import AppLayout from "./AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "manage your thing to do",
  description: "manage your thing to do",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSession>
          <AppLayout>{children}</AppLayout>
        </AuthSession>
      </body>
    </html>
  );
}
