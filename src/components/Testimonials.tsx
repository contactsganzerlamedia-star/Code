const TESTIMONIALS = [
  {
    quote:
      "Sganzerla Media rebuilt our entire content engine in six weeks. Our engagement rate has tripled and our team finally has a system to follow.",
    name: "Maya Ortiz",
    role: "Head of Marketing, Fielder Coffee Co.",
  },
  {
    quote:
      "They treat our budget like it's their own. Every campaign report comes with a clear next step, not just a vanity metric.",
    name: "Daniel Cho",
    role: "Founder, Northline Apparel",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
          What clients say
        </h2>
        <p className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Don&apos;t just take our word for it.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <blockquote className="text-lg leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-muted"> — {testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
