import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">[ 01 — About ]</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              A new orbit for
              <br />
              <span className="text-gradient">enterprise technology.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground lg:col-span-7"
          >
            <p className="text-lg leading-relaxed">
              Saturn Group is an integrated technology studio building the systems that define the
              next decade — secure cloud architectures, autonomous AI, and resilient digital
              infrastructure for organizations operating at scale.
            </p>
            <p className="leading-relaxed">
              We unite hardware, software, and intelligence into one cohesive platform. From
              mission-critical networks to AI copilots, our teams design with one mandate: deliver
              technology that feels inevitable.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { k: "12+", v: "Years engineering" },
                { k: "40", v: "Countries deployed" },
                { k: "99.99%", v: "System uptime" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-4">
                  <div className="font-display text-2xl font-semibold text-primary">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
