"use client";

import Link from "next/link";
import { navigationLinks } from "./navigation.const";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-foreground mx-4 sm:mx-10 flex justify-between items-center h-16">
      <Link href="/" className="text-2xl">
        <span className="text-foreground">ALI </span>
        <span className="text-red700">BEY</span>
      </Link>

      <div className="flex space-x-8">
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={cn(
                "text-foreground",
                isActive(link.href) && "underline"
              )}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
