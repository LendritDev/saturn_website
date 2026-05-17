import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/saturn-hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Saturn Group — futuristic technology"
          className="h-full w-full object-cover opacity-70 animate-spin-slow"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Generation Technology Partner</span>
            <span className="ml-1 h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary shadow-[0_0_10px_var(--neon)]" />
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-gradient">Building the</span>
            <br />
            <span className="text-gradient">Future Through</span>
            <br />
            <span className="relative inline-block text-neon">
              Technology
              <motion.span
                aria-hidden
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 h-px w-full origin-left bg-primary"
              />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Saturn Group engineers the digital infrastructure powering tomorrow's enterprises —
            from AI systems to cybersecurity, cloud, and intelligent automation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#services" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-glow-lg">
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-[color-mix(in_oklab,var(--neon-glow)_80%,white)] to-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#contact" className="glow-border inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-white/10">
              Contact Us
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>ISO 27001</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>SOC 2 Type II</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>AI Certified</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>24/7 Operations</span>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/40 p-1">
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
