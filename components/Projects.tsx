"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" label="SELECTED WORK" />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 2) * 0.08,
              }}
              whileHover="hover"
              className="group relative flex min-h-[280px] flex-col justify-between bg-ink p-8 transition-colors duration-500 hover:bg-ink-raised md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-paper-dim">
                  {project.index}
                </span>
                <motion.span
                  variants={{
                    hover: { x: 4, y: -4, opacity: 1 },
                  }}
                  initial={{ opacity: 0.3 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-amber"
                >
                  <ArrowUpRight size={22} strokeWidth={1.5} />
                </motion.span>
              </div>

              <div>
                <h3 className="font-display text-3xl text-paper md:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm text-paper-dim md:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-mono text-xs text-paper-dim/70">
                    {project.meta}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink-line px-3 py-1 font-mono text-[11px] tracking-wide text-paper-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.span
                variants={{ hover: { scaleX: 1 } }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-amber"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
