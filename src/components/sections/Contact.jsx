"use client";

import { motion } from "framer-motion";

const SOCIALS = [
 {
    label: "Email",
    value: "shivvishwakarma1206@gmail.com",
    href: "mailto:shivvishwakarma1206@gmail.com",
  },
  { label: "LinkedIn", value: "in/Shiv Vishwakarma", href: "https://www.linkedin.com/in/shiv-vishwakarma-3951a4380/" },
  { label: "WhatsApp", value: "@shiv_iv", href: "whatsapp://send?phone=+919302324481" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          Let&apos;s
          <br />
          Talk.
        </motion.h2>

        <p className="mt-6 max-w-md font-body text-off/60">
          Have a project, collaboration or weird creative idea? Send it my way.
        </p>

        <div className="mt-14 divide-y divide-off/10 border-t border-off/10">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              data-cursor="GO"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex items-center justify-between py-6"
            >
              <span className="font-heading text-2xl font-bold uppercase tracking-tight transition-transform duration-300 ease-premium group-hover:translate-x-3 md:text-3xl">
                {s.label}
              </span>
              <span className="flex items-center gap-3 font-body text-sm text-grey">
                {s.value}
                <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
