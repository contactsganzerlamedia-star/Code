export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-[-10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24 lg:pt-28">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
          Creative & Growth Studio
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Stories that move people.{" "}
          <span className="text-accent">Campaigns that move markets.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted">
          Sganzerla Media partners with ambitious brands to plan, produce, and
          promote content that actually performs — from short-form video to
          full-funnel marketing.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-105"
          >
            Book a discovery call
          </a>
          <a
            href="#work"
            className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-surface"
          >
            See our work
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {[
            ["120+", "Campaigns launched"],
            ["4.2M+", "Avg. monthly reach"],
            ["38", "Brand partners"],
            ["6yrs", "In business"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="text-2xl font-bold sm:text-3xl">{value}</dt>
              <dd className="mt-1 text-sm text-muted">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
