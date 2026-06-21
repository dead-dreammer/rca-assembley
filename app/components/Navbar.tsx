"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/prayer", label: "Prayer requests" },
  { href: "/about", label: "About us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-medium text-gray-900">
          <span className="w-8 h-8 rounded-lg bg-[#C0501A] flex items-center justify-center text-white text-sm font-bold">
            ✝
          </span>
          <span className="hidden sm:block">Rydalvale Church Assembly</span>
          <span className="sm:hidden font-semibold">RCA</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === l.href
                  ? "bg-[#FEF3EC] text-[#C0501A] font-medium"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/prayer"
          className="hidden md:inline-flex items-center gap-1.5 bg-[#C0501A] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#7A2E0E] transition-colors"
        >
          Give online
        </Link>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-3 flex flex-col gap-1 bg-white">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm ${
                pathname === l.href
                  ? "bg-[#FEF3EC] text-[#C0501A] font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
