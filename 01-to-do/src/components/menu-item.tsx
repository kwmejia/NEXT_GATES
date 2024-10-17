"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface IPropsSidebarMenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const MenuItem = ({ path, icon, title, subtitle }: IPropsSidebarMenuItem) => {

  const currentPath = usePathname()

  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 py-2 items-center border-b border-slate-400 py-3hover:bg-white/5 transition ease-linear duration-150 ${currentPath === path ? ' bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white' : 'text-blue-600'}`}
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5">
          {title}
        </span>
        <span className="text-sm  hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
