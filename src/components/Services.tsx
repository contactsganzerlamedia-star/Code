const SERVICES = [
  {
    title: "Content & Video Production",
    description:
      "Concept, shoot, and edit — short-form, brand films, and everything in between, built for how people actually watch today.",
  },
  {
    title: "Social & Community",
    description:
      "Editorial calendars, community management, and creator partnerships that keep your audience engaged between campaigns.",
  },
  {
    title: "Performance Marketing",
    description:
      "Paid social and search built on real attribution, so every dollar you spend has a story behind the return.",
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and visual identity that give every future campaign a consistent foundation to build on.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
            What we do
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            One studio, every step from idea to impact.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-xl hover:shadow-black/5"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
