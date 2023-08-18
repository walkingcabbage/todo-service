"use client";

import { useRouter } from "next/navigation";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export default function SideBar() {
  const router = useRouter();
  return (
    <nav className=" w-64 border-r-2 border-gray-300">
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          router.push(itemId);
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/",
          },
          {
            title: "Todo list",
            itemId: "/todos",
          },
        ]}
      />
    </nav>
  );
}
