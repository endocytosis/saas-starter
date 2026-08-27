import {
  BellRing,
  CreditCard,
  LineChart,
  ShieldCheck,
  Users,
  Workflow
} from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Revenue you can trust',
    description:
      'Recurring revenue, expansion and churn calculated the same way every month, so finance and product finally agree on one number.'
  },
  {
    icon: BellRing,
    title: 'Alerts before it hurts',
    description:
      'Get a heads-up the moment usage dips or a renewal stalls, while there is still time to save the account.'
  },
  {
    icon: Users,
    title: 'Built for whole teams',
    description:
      'Invite teammates, set owner and member access, and keep a full history of who changed what.'
  },
  {
    icon: CreditCard,
    title: 'Billing that stays in sync',
    description:
      'Plans, upgrades and cancellations flow straight through from Stripe. No spreadsheets, no manual reconciling.'
  },
  {
    icon: Workflow,
    title: 'Answers, not dashboards',
    description:
      'Every view opens with the takeaway first, then the detail underneath when you want to dig in.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    description:
      'Encrypted in transit and at rest, with row-level rules so people only ever see their own data.'
  }
];

export function Features() {
  return (
    <section id="features" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Everything in one place
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The reporting layer your billing data never had
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Stop stitching together exports. Meridian keeps the numbers, the
            context and the next step together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors duration-200 group-hover:bg-orange-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
