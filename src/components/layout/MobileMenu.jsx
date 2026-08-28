"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-black md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-heading text-xl font-extrabold">AK™</span>
            <button aria-label="Close menu" onClick={onClose} className="text-off">
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-6 px-8">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-5xl font-extrabold uppercase tracking-tight text-off"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={onClose}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl font-extrabold uppercase tracking-tight text-red-bright"
            >
              Contact
            </motion.a>
          </nav>

          <div className="grid grid-cols-3 gap-px bg-off/10 px-8 pb-8 text-[10px] uppercase tracking-widest text-off/40">
            <span className="py-3">CMYK</span>
            <span className="py-3 text-center">300 DPI</span>
            <span className="py-3 text-right">Artboard 04</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
