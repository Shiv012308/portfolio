"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-off/10 bg-black px-4 sm:px-6 pb-8 pt-16 md:pt-20 md:px-10 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight break-words">
          Thanks For
          <br />
          Scrolling.
        </h2>
        <p className="mt-3 sm:mt-4 font-hand text-xl sm:text-2xl text-grey">
          you&apos;ve officially seen too many pixels.
        </p>

        <div className="mt-16 flex flex-col gap-8 border-t border-off/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="font-body text-xs uppercase tracking-widest text-off/50">
            <p>© 2026 Shiv Vishwakarma</p>
            <p className="mt-1">Graphic Designer</p>
          </div>

          <nav className="flex flex-wrap gap-6 font-body text-xs uppercase tracking-widest text-off/50">
            <a href="#top" className="hover:text-off">Home</a>
            <a href="#archive" className="hover:text-off">Work</a>
            <a href="#about" className="hover:text-off">About</a>
            <a href="#contact" className="hover:text-off">Contact</a>
          </nav>

          <a
            href="#top"
            data-cursor="GO"
            className="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-off/70 hover:text-off"
          >
            Back To Top <ArrowUp size={14} />
          </a>
        </div>

        <p className="mt-10 text-center font-body text-[11px] uppercase tracking-widest text-off/20">
          Made with Ideas + Pixels + Tea + Music — Still here? Respect.
        </p>
      </div>
    </footer>
  );
}
