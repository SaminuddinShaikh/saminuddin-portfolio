"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { skills } from "@/lib/data";

function MarqueeRow({ reverse = false, speed = 32 }: { reverse?: boolean; speed?: number }) {
  const items = [...skills, ...skills];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center gap-4 pr-4"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((skill, i) => (
          <span
            key={i}
            data-cursor-hover
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-ink-line px-6 py-3 font-mono text-sm text-paper-dim transition-colors duration-300 hover:border-amber/50 hover:text-amber"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber/60" />
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="STACK" />
      </div>
      <div className="flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <MarqueeRow speed={34} />
        <MarqueeRow reverse speed={40} />
      </div>
    </section>
  );
}
