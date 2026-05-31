"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold max-w-5xl"
      >
        Turning Creators Into Brands.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-zinc-400 text-xl mt-8 max-w-2xl"
      >
        Premium creator management and brand collaborations.
      </motion.p>
    </section>
  );
}