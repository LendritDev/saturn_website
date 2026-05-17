import { motion } from "framer-motion";
import { Cpu, Shield, Code2, Cloud, Bot, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState } from "react";

type Service = { icon: LucideIcon; title: string; desc: string; tag: string };

const services: Service[] = [
  { icon: Cpu, title: "IT Solutions", desc: "End-to-end enterprise IT architecture, system integration, and digital transformation programs.", tag: "01" },
  { icon: Shield, title: "Cybersecurity", desc: "Zero-trust defenses, threat intelligence, SOC operations, and incident response at planetary scale.", tag: "02" },
  { icon: Code2, title: "Software Development", desc: "Custom platforms, web & mobile applications crafted by senior product engineers.", tag: "03" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Multi-cloud and hybrid environments designed for elasticity, performance, and cost discipline.", tag: "04" },
  { icon: Bot, title: "AI & Automation", desc: "Agentic AI systems, ML pipelines, and workflow automation that compound productivity.", tag: "05" },
  { icon: Network, title: "Networking", desc: "Next-gen SD-WAN, private 5G, and high-throughput connectivity for distributed operations.", tag: "06" },
];

function Card({ service, i }: { service: Service; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [m, setM] = useState({ x: 50, y: 50 });
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
    >
      <div
        ref={ref}
        onMouseMove={(e) => {
          const r = ref.current!.getBoundingClientRect();
          setM({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
        }}
        className="glow-border group relative h-full overflow-hidden rounded-2xl glass p-8 transition-transform duration-500 hover:-translate-y-1"
        style={{
          background: `radial-gradient(400px circle at ${m.x}% ${m.y}%, color-mix(in oklab, var(--neon) 12%, transparent), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))`,
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[inset_0_0_20px_rgba(212,175,55,0.15)]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-mono text-xs text-muted-foreground/60">/ {service.tag}</span>
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          <span>Learn more</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">[ 02 — Services ]</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Six disciplines.<br />
              <span className="text-gradient">One integrated platform.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every Saturn engagement starts with strategy and ends with measurable outcomes —
            engineered, secured, and operated by one team.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <Card key={s.title} service={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
