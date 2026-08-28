"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/categories";
import FolderCard from "@/components/ui/FolderCard";
import FolderModal from "@/components/ui/FolderModal";

export default function Archive() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="archive" className="relative bg-black px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl"
        >
          The Design
          <br />
          Archive.
        </motion.h2>
        <p className="mt-4 font-body text-off/60 max-w-md">
          Explore a curated archive of my design work spanning brand identities, visual systems, and digital art. Hover over any folder for a quick preview, or click to dive into the full showcase.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 md:gap-y-32 px-4 py-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <FolderCard 
                category={category} 
                onClick={() => setActiveCategory(category)} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      <FolderModal 
        isOpen={!!activeCategory} 
        category={activeCategory} 
        onClose={() => setActiveCategory(null)} 
      />
    </section>
  );
}
