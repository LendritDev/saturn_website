import { motion } from "framer-motion";
import dashboard from "@/assets/showcase-dashboard.jpg";
import globe from "@/assets/holo-globe.jpg";

export function Showcase() {
  return (
    <section id="showcase" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">[ 03 — Showcase ]</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Technology you can <span className="text-gradient">see in motion.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glow-border relative overflow-hidden rounded-3xl glass lg:col-span-8 lg:row-span-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={dashboard} alt="AI dashboard" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              {/* scanline */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="h-32 w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-sm"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Live Telemetry</div>
              <h3 className="mt-2 font-display text-2xl font-semibold">AI Operations Console</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">Real-time orchestration of inference, security signals, and infrastructure across every node.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glow-border relative overflow-hidden rounded-3xl glass lg:col-span-4"
          >
            <div className="relative aspect-square overflow-hidden">
              <img src={globe} alt="Network globe" loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Global Mesh</div>
              <h3 className="mt-1 font-display text-lg font-semibold">Edge Network</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glow-border relative overflow-hidden rounded-3xl glass p-6 lg:col-span-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-primary">Cyber Threat Feed</div>
            <h3 className="mt-1 font-display text-lg font-semibold">Live Defense</h3>
            <div className="mt-5 space-y-2 font-mono text-[11px]">
              {[
                ["02:14:08", "Blocked DDoS — 480 Gbps", "ok"],
                ["02:14:11", "Zero-day signature pushed", "ok"],
                ["02:14:13", "Anomaly contained · sector-7", "warn"],
                ["02:14:18", "Identity rotation complete", "ok"],
                ["02:14:21", "Sandbox detonation success", "ok"],
              ].map(([t, msg, lvl]) => (
                <div key={t} className="flex items-center gap-3 rounded-md bg-background/40 px-3 py-1.5">
                  <span className="text-muted-foreground/70">{t}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${lvl === "ok" ? "bg-primary shadow-[0_0_8px_var(--neon)]" : "bg-amber-400"}`} />
                  <span className="flex-1 truncate text-foreground/80">{msg}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
