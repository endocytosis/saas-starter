const companies = [
  'Northwind',
  'Kestrel Labs',
  'Foundry Co',
  'Halcyon',
  'Brightline'
];

const testimonials = [
  {
    quote:
      'We closed the month in two hours instead of two days. The renewal alerts alone paid for the pilot.',
    name: 'Dana Whitfield',
    role: 'Head of Finance, Northwind'
  },
  {
    quote:
      'It is the first tool where our product and finance teams look at the same screen and reach the same conclusion.',
    name: 'Marcus Ortega',
    role: 'COO, Kestrel Labs'
  }
];

export function SocialProof() {
  return (
    <section className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-400">
          Trusted by finance and product teams at
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((company) => (
            <span
              key={company}
              className="text-lg font-semibold tracking-tight text-slate-500 transition-colors duration-200 hover:text-slate-200"
            >
              {company}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-slate-800 bg-slate-800/50 p-8"
            >
              <blockquote className="text-lg leading-relaxed text-slate-100">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                  {testimonial.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-slate-400">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
