import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glow-border relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16"
        >
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[var(--deep-blue)]/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">[ 05 — Launch ]</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Let's build<br /><span className="text-gradient">what's next.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Tell us what you're building. A principal engineer responds within 24 hours.
              </p>
              <div className="mt-10 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">→</span> hello@saturngroup.tech
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">→</span> +1 (415) 555-0100
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">→</span> San Francisco · Berlin · Singapore
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary" placeholder="Full name" />
                <input className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary" placeholder="Company" />
              </div>
              <input type="email" className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary" placeholder="Work email" />
              <textarea rows={4} className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary" placeholder="What are you building?" />
              <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-glow-lg">
                Initiate Transmission
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
