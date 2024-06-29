/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0yZkh5YAolD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
// import { RxHamburgerMenu } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type SidebarProps = {
  navItems: {
    label: string;
    href: string;
    Icon: any;
  }[],
  brand: {
    label?: string;
    Icon: any;
  },
};

export default function Sidebar({
  navItems,
  brand,
}: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <LuMenu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-gray-50">
        <aside className="w-full h-full w-64 p-4 mt-8">
          <div className="flex items-center gap-2 border-b pb-4">
            <div className="w-1/2">
              <brand.Icon className="" />
            </div>
            {brand.label && <span className="text-lg font-semibold">{brand.label}</span>}
          </div>
          <nav className="mt-6 space-y-4">
            {
              navItems.map((navItem, idx) => {
                return (
                  <SheetClose key={navItem.href} asChild>
                    <Link
                      href={navItem.href}
                      className="flex items-center gap-6 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                      prefetch={false}
                    >
                      <navItem.Icon className="h-5 w-5 stroke-2" />
                      {navItem.label}
                    </Link>
                  </SheetClose>
                );
              })
            }
          </nav>
        </aside>
      </SheetContent>
    </Sheet>
  )
}
