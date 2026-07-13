"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 md:px-12"
    >
      <motion.div
        style={{ opacity, y, scale }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-6 font-mono text-xs tracking-[0.25em] text-paper-dim"
        >
          PORTFOLIO — 2026
        </motion.p>

        <h1 className="font-display font-medium leading-[0.95] text-paper">
          <RevealLine
            delay={0.05}
            className="text-[13vw] md:text-[7vw] lg:text-[6.2vw]"
          >
            Saminuddin
          </RevealLine>
          <RevealLine
            delay={0.18}
            className="text-[13vw] md:text-[7vw] lg:text-[6.2vw] text-paper-dim"
          >
            Shaikh
          </RevealLine>
        </h1>

        <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:items-center md:gap-6">
          <RevealLine
            delay={0.4}
            className="font-mono text-sm tracking-widest text-amber md:text-base"
          >
            FULL STACK ENGINEER
          </RevealLine>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden h-px w-12 origin-left bg-ink-line md:block"
          />
          <RevealLine
            delay={0.5}
            className="max-w-md text-sm text-paper-dim md:text-base"
          >
            Frontend-led, full stack under the hood — I ship real products, end to end.
          </RevealLine>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-paper-dim">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-amber to-transparent"
        />
      </motion.div>
    </section>
  );
}
