const partners = ["HP", "LENOVO", "CISCO", "FORTIGATE", "MICROSOFT"];

export function Partners() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Partners with:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((p) => (
            <div key={p} className="font-display text-center text-lg font-semibold tracking-[0.15em] text-muted-foreground/60 transition-colors hover:text-primary px-4">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
