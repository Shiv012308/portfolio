"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Introduction from "@/components/sections/Introduction";
import Archive from "@/components/sections/Archive";
import Skills from "@/components/sections/Skills";
import Tools from "@/components/sections/Tools";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-full overflow-x-hidden"
      >
        <Navbar />
        <main className="w-full max-w-full overflow-x-hidden">
          <Hero />
          <Marquee />
          <Introduction />
          <Archive />
          <Skills />
          <Tools />
          <About />
          <ContactCTA />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
