export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight">
            <span className="relative inline-flex h-6 w-6 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-primary/60" />
              <span className="absolute inset-1 rounded-full bg-primary/20" />
              <span className="absolute h-[8px] w-6 rounded-full border border-primary/80 [transform:rotate(-20deg)]" />
            </span>
            SATURN<span className="text-primary">GROUP</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-xs text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#showcase" className="hover:text-foreground">Technology</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </nav>
          <div className="text-xs text-muted-foreground">© 2026 Saturn Group · Engineered on Earth</div>
        </div>
      </div>
    </footer>
  );
}
