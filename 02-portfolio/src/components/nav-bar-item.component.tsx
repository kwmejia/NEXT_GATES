"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface IPropsSidebarMenuItem {
  path: string;
  title: string;
}

export const NavBarItemComponent = ({ path, title }: IPropsSidebarMenuItem) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`hover:text-gray-300 ${currentPath === path ? "text-orange-500" : ""}`}
    >
      {title}
    </Link>
  );
};
