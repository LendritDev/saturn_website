const partners = ["NEXUS", "ORBITAL", "QUANTA", "VERTEX", "HELIOS", "AETHER", "PROTON", "LUMEN"];

export function Partners() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by category-defining teams
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((p) => (
            <div key={p} className="font-display text-center text-lg font-semibold tracking-[0.15em] text-muted-foreground/60 transition-colors hover:text-primary">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
