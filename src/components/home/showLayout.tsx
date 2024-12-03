"use client";

import { usePathname } from "next/navigation";

interface ShowLayoutProps {
  children: React.ReactNode;
}

export default function ShowLayout({ children }: ShowLayoutProps) {
  const pathname = usePathname();

  const isSpecialPage =
    pathname === "/auth/login" ||
    pathname === "/auth/register";

  return !isSpecialPage ? children : null;
}