const steps = [
  {
    step: '01',
    title: 'Connect your billing',
    description:
      'Link Stripe in a couple of clicks. Meridian pulls in your plans, customers and history without touching your setup.'
  },
  {
    step: '02',
    title: 'Invite your team',
    description:
      'Add the people who need the numbers and choose what each of them can see and change.'
  },
  {
    step: '03',
    title: 'Act on what matters',
    description:
      'Open your workspace to a short list of accounts that need attention, with the reason spelled out.'
  }
];

export function HowItWorks() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Live in an afternoon, not a quarter
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              No data warehouse, no engineering ticket. Connect, invite, done.
            </p>
          </div>

          <ol className="mt-12 lg:col-span-8 lg:mt-0">
            {steps.map((item, index) => (
              <li
                key={item.step}
                className={`relative pl-14 ${
                  index === steps.length - 1
                    ? ''
                    : 'pb-10 after:absolute after:left-[1.3125rem] after:top-12 after:h-[calc(100%-3rem)] after:w-px after:bg-slate-200'
                }`}
              >
                <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-bold text-slate-900">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
