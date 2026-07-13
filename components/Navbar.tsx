"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { links } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink-line bg-ink/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            data-cursor-hover
            className="font-display text-lg tracking-tight text-paper"
          >
            S.<span className="text-amber">Saminuddin</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  data-cursor-hover
                  className="group relative font-mono text-xs tracking-[0.2em] text-paper-dim transition-colors duration-300 hover:text-paper"
                >
                  {item.label.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="hidden rounded-full border border-ink-line px-5 py-2 font-mono text-xs tracking-[0.2em] text-paper transition-colors duration-300 hover:border-amber/60 hover:text-amber md:inline-block"
          >
            RESUME
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-paper md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <div className="flex h-full flex-col items-start justify-center gap-8 px-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="font-display text-4xl text-paper"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + navItems.length * 0.06 }}
                className="mt-4 rounded-full border border-ink-line px-6 py-3 font-mono text-xs tracking-[0.2em] text-amber"
              >
                RESUME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
