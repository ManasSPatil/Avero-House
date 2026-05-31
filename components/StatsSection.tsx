"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "100+",
    label: "Brand Collaborations",
  },
  {
    value: "10M+",
    label: "Audience Reached",
  },
  {
    value: "15+",
    label: "Creators Managed",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-3xl p-8 text-center"
            >
              <h2 className="text-5xl font-bold">
                {stat.value}
              </h2>

              <p className="text-zinc-400 mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}