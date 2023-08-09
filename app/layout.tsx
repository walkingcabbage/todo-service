import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "./(components)/TopBar";
import SideBar from "./(components)/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "manage your thing to do",
  description: "manage your thing to do",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-full">
          <TopBar />
          <div className="relative flex h-full flex-1">
            <SideBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
