"use client";

import useMessageStore from "@/hooks/useMessageStore";
import { Link } from "heroui";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  const { unreadCount } = useMessageStore((state) => ({
    unreadCount: state.unreadCount,
  }));

  return (
    <Link
      href={href}
      className={`${pathname === href ? "active" : ""}`} // Adjust this class for active styles
    >
      <span>{label}</span>
      {href === "/messages" && unreadCount > 0 && (
        <span className="ml-1">({unreadCount})</span>
      )}
    </Link>
  );
}
