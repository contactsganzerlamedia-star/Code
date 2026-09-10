const VALUES = [
  {
    title: "Strategy first",
    description: "Every asset we make ties back to a goal you can measure.",
  },
  {
    title: "In-house craft",
    description:
      "Producers, editors, and media buyers on one team — no hand-offs lost in translation.",
  },
  {
    title: "Built to last",
    description:
      "We design systems and templates your team can keep running long after launch.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
            About Sganzerla Media
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A small studio built for brands that move fast.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            We started Sganzerla Media because too many great brands were
            stuck choosing between good creative and good performance. Our
            team blends production craft with a media-buying mindset, so
            every piece of content we make is designed to earn its keep.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
