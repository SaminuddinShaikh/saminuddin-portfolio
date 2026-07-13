"use client";

import { motion } from "framer-motion";

export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-paper-dim md:mb-14"
    >
      <span className="text-amber">{index}</span>
      <span className="h-px w-8 bg-ink-line" />
      <span>{label}</span>
    </motion.div>
  );
}
