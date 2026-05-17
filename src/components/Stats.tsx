import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      const ctl = animate(mv, to, { duration: 2.2, ease: "easeOut" });
      return ctl.stop;
    }
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: 3500, s: "+", l: "IT Devices Sold & Configured" },
  { v: 1500, s: "+", l: "Microsoft 365 & Server Licenses" },
  { v: 420, s: "+", l: "Cisco & Fortigate Firewalls Managed" },
  { v: 180, s: "+", l: "Custom Software Solutions Built" },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong glow-border relative overflow-hidden rounded-3xl px-8 py-16">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="font-display text-5xl font-semibold tracking-tight text-gradient sm:text-6xl">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
