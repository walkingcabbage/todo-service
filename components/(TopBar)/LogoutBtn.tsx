"use client";

import { signOut } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      onClick={() => {
        signOut();
      }}
    >
      LOGOUT
    </button>
  );
}
