"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

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
  {
    name: "Contact",
    path: "/jahanasireen/contact",
  },
]

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <h1 className="text-4xl font-semibold">
            J<span className="text-accent">.</span>S<span className="text-accent">.</span>N
          </h1>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return(
              <Link href={link.path}
                    key={index}
                    className={`${link.path === pathname && "border-b-2 border-accent"} text-xl hover:text-accent transition-all`}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}