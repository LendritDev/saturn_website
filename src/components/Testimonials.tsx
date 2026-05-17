import { motion } from "framer-motion";

const items = [
  {
    quote: "Saturn rebuilt our entire cloud spine in four months. We've never moved faster, or safer.",
    name: "Imani Wallace",
    role: "CTO · Vertex Industries",
  },
  {
    quote: "Their AI automation runs our supply chain. It's like hiring a thousand quiet operators.",
    name: "Hideo Tanaka",
    role: "COO · Orbital Logistics",
  },
  {
    quote: "Best security partner we've ever worked with. The SOC is unreal.",
    name: "Priya Chandrasekhar",
    role: "CISO · Helios Bank",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">[ 04 — Signals ]</span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            <span className="text-gradient">Voices from orbit.</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glow-border flex h-full flex-col rounded-2xl p-8"
            >
              <div className="font-display text-3xl text-primary leading-none">"</div>
              <blockquote className="mt-2 flex-1 text-base leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border/60 pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
