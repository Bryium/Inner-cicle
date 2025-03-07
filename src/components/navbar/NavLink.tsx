"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  console.log("pathname::: ", pathname);

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-xl ${
        isActive ? "text-yellow-200" : "text-white"
      } hover:text-yellow-200 transition duration-300`}
    >
      {label}
    </Link>
  );
}
