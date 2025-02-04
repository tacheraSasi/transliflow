"use client"

import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const hideAuthLink = pathname === "/sign-in" || pathname === "/sign-up";

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
      <h1 className="text-xl font-bold text-gray-900">
        <Link href="/">TransliFlow</Link>
      </h1>
      <nav>
        <SignedOut>
          {!hideAuthLink && (
            <Link
              href="/sign-in"
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
            >
              Sign In
            </Link>
          )}
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
