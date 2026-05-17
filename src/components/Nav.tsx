import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Technology" },
  { href: "#stats", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6`}>
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
          scrolled ? "glass-strong" : ""
        }`}>
          <a href="#" className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight">
            <span className="relative inline-flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-primary/60" />
              <span className="absolute inset-1 rounded-full bg-primary/20" />
              <span className="absolute h-[10px] w-7 rounded-full border border-primary/80 [transform:rotate(-20deg)] shadow-[0_0_12px_var(--neon)]" />
            </span>
            SATURN<span className="text-primary">GROUP</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow">
            Launch Project
          </a>
        </div>
      </div>
    </motion.header>
  );
}
