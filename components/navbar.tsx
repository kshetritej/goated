"use client";

import { LucideMenu, LucideX } from "lucide-react";
import BottomNav from "./bottom-nav";
import TopNav from "./top-nav";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TopNavItems } from "@/constants/topNavItems";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="p-8 container mx-auto bg-background rounded-2xl z-9999 hidden md:block">
        <TopNav />
        <BottomNav />
      </div>
      <div className="flex items-end justify-end">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <LucideMenu className="text-white flex justify-self-end" />
        </button>
        <div
          className={cn(
            menuOpen ? "block" : "hidden",
            "bg-white p-4 h-screen w-screen fixed top-0 left-0 z-99999"
          )}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-4 flex justify-end items-end w-full"
          >
            <LucideX />
          </button>
          <div className="flex flex-col items-start gap-4">
            {TopNavItems.map((item) => {
              return (
                <Link key={item.url} href={item.url}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
