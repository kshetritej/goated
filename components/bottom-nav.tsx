import { TopNavItems } from "@/constants/topNavItems";
import Logo from "./logo";
import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="flex justify-between py-4 items-center">
      <Logo />
      <div className="flex gap-2 ">
        {TopNavItems.map((navItem) => {
          return (
            <Link key={navItem.url} href={navItem.url}>
              {navItem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
