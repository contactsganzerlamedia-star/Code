const PROJECTS = [
  {
    client: "Northline Apparel",
    result: "3.4x ROAS across launch campaign",
    tag: "Performance",
  },
  {
    client: "Fielder Coffee Co.",
    result: "2.1M organic views in 90 days",
    tag: "Content",
  },
  {
    client: "Vantage Fitness",
    result: "Rebrand + 60% lift in sign-ups",
    tag: "Brand Strategy",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Selected work
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Real brands, real results.
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Start your project →
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.client}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8"
            >
              <div
                aria-hidden
                className="mb-8 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-soft text-sm font-medium text-muted"
              >
                Case study visual
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold">
                  {project.client}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
