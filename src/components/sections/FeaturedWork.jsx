"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-black-secondary px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          Selected
          <br />
          Work.
        </motion.h2>

        <div className="flex flex-col gap-20 md:gap-32">
          {featured.map((project, i) => (
            <motion.a
              key={project.id}
              href={`/project/${project.slug}`}
              data-cursor="VIEW"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-xl md:col-span-8 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.025]"
                />
              </div>

              <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="font-body text-sm text-grey">
                  {`0${i + 1} — ${project.category}`}
                </span>
                <h3 className="mt-2 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-sm font-body text-sm text-off/60">
                  {project.description}
                </p>
                <span className="mt-4 inline-block font-body text-sm font-semibold uppercase tracking-wider text-red-bright">
                  View Project ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
