"use client";

import { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import MobileMenu from "@/components/layout/MobileMenu";
import { Menu } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-premium ${
          scrolled ? "bg-black/60 backdrop-blur-md border-b border-off/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" data-cursor="TOP" className="font-heading text-xl font-extrabold tracking-tight">
            <span className="logo-animated-text">SHIV VISHWAKARMA</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor="GO"
                className="group relative font-body text-sm font-medium uppercase tracking-wider text-off/80 transition-colors duration-300 hover:text-off"
              >
                <span className="inline-block transition-transform duration-300 ease-premium group-hover:-translate-y-0.5">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-bright transition-all duration-300 ease-premium group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-2 font-body text-xs uppercase tracking-widest text-off/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Available
            </span>
            <MagneticButton
              cursorLabel="GO"
              className="rounded-full border border-off/30 px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider text-off hover:border-off"
            >
              Let&apos;s Talk ↗
            </MagneticButton>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="text-off md:hidden"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={LINKS} />
    </>
  );
}
