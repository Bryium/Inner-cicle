import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <div className="w-full bg-gradient-to-r from-pink-400 via-red-400 to-pink-600">
      <div className="flex justify-between items-center p-4">
        {/* Brand Section */}
        <Link href="/" className="flex items-center gap-2">
          <GiSelfLove size={40} className="text-gray-200" />
          <div className="font-bold text-3xl">
            <span className="text-gray-200">Inner-circle</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6">
          <NavLink href="/members" label="Matches" />
          <NavLink href="/lists" label="Lists" />
          <NavLink href="/messages" label="Messages" />
        </div>

        {/* Button Section */}
        <div className="flex gap-4">
          <Link href="/login">
            <Button
              variant="outlined"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button
              variant="outlined"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
