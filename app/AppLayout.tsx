"use client";

import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { data: session } = useSession();

  return (
    <>
      <TopBar loginsession={session?.user} />
      <div className="flex h-full">
        <SideBar />
        {children}
      </div>
    </>
  );
}
