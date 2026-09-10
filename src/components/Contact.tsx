const CONTACT_EMAIL = "contact.sganzerlamedia@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Get in touch
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build your next campaign.
          </p>
          <p className="mt-6 max-w-md text-muted leading-relaxed">
            Tell us a bit about your brand and what you&apos;re hoping to
            achieve. We reply to every inquiry within one business day.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <form
          action={`mailto:${CONTACT_EMAIL}`}
          method="post"
          encType="text/plain"
          className="grid gap-5 rounded-2xl border border-border bg-background p-8"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="Jane Doe"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="jane@company.com"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
              placeholder="What are you looking to achieve?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
