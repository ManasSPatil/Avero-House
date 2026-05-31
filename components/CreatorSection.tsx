"use client";

import { creators } from "@/data/creators";
import { motion } from "framer-motion";

export default function CreatorSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Featured Creators
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {creators.map((creator) => (
            <motion.div
              key={creator.id}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-3xl overflow-hidden"
            >

              <img
                src={creator.image}
                alt={creator.name}
                className="w-full h-[280px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {creator.name}
                </h3>

                <p className="text-zinc-400 mt-2">
                  {creator.niche}
                </p>

                <p className="mt-4 font-medium">
                  {creator.followers}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}