"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/reading", label: "reading" },
  { href: "/about", label: "about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group font-mono text-sm tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          dk
          <span className="inline-block text-accent transition-transform group-hover:translate-x-0.5">
            _
          </span>
        </Link>
        <div className="flex gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative rounded-md px-3 py-1.5 font-mono text-xs transition-all ${
                pathname === href
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                  : "text-zinc-400 hover:bg-zinc-50 hover:text-zinc-600 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
