"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const words = (text: string) => text.split(" ");

function WordReveal({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  return (
    <span className="flex flex-wrap">
      {words(text).map((word, i) => (
        <span key={i} className="mr-[0.28em] overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: delayStart + i * 0.02,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" label="ABOUT" />
        <div className="max-w-3xl font-display text-3xl leading-[1.3] text-paper md:text-5xl md:leading-[1.35]">
          <WordReveal text="Self-taught, based in Mumbai." />
          <span className="text-paper-dim">
            <WordReveal
              text="I learn by building — and building until it ships."
              delayStart={0.15}
            />
          </span>
          <WordReveal
            text="Real products, end to end: interface to infrastructure."
            delayStart={0.3}
          />
        </div>
      </div>
    </section>
  );
}
