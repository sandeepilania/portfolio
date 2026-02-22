import Link from "next/link";
import Container from "./Container";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/architecture", label: "Architecture" },
  { href: "/journey", label: "Journey" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-700 to-sky-600 bg-clip-text text-transparent">
            Sandeep Pilania
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-zinc-900 transition">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/work"
          className="rounded-full px-4 py-2 text-sm font-semibold text-white
                     bg-gradient-to-r from-indigo-700 to-sky-600
                     hover:opacity-95 transition shadow-md shadow-indigo-500/15"
        >
          View work
        </Link>
      </Container>
    </header>
  );
}