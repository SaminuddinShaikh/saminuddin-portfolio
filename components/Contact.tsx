"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { links } from "@/lib/data";

const contactItems = [
  { label: "Email", value: links.email, href: `mailto:${links.email}` },
  { label: "Phone", value: links.phone, href: `tel:${links.phone.replace(/\s/g, "")}` },
  { label: "GitHub", value: "SaminuddinShaikh", href: links.github },
  { label: "LinkedIn", value: "saminuddin-shaikh", href: links.linkedin },
  { label: "Resume", value: "Download PDF", href: links.resume },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 pb-16 pt-28 md:px-12 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04" label="CONTACT" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[10vw] leading-[0.95] text-paper md:text-[6.5vw]"
        >
          Let&apos;s build
          <br />
          <span className="text-paper-dim">something.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 md:mt-24 md:grid-cols-5">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-cursor-hover
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col justify-between gap-6 bg-ink p-6 transition-colors duration-300 hover:bg-ink-raised"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-paper-dim">
                  {item.label.toUpperCase()}
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-amber opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <span className="break-words font-display text-base text-paper md:text-lg">
                {item.value}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink-line pt-8 font-mono text-xs tracking-widest text-paper-dim md:flex-row md:items-center">
          <span>© 2026 SAMINUDDIN SHAIKH</span>
          <span>MUMBAI, INDIA</span>
        </div>
      </div>
    </section>
  );
}
