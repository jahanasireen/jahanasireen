"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/jahanasireen",
  },
  {
    name: "Skills",
    path: "/jahanasireen/skills",
  },
  {
    name: "Portfolio",
    path: "/jahanasireen/portfolio",
  },
]


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && 
          "border-b-2 border-accent"} font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}