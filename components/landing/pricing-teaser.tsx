import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Base',
    price: 8,
    description: 'For small teams getting their reporting in order.',
    features: [
      'Unlimited usage',
      'Unlimited workspace members',
      'Email support'
    ],
    featured: false
  },
  {
    name: 'Plus',
    price: 12,
    description: 'For teams that need answers the same day.',
    features: [
      'Everything in Base',
      'Early access to new features',
      '24/7 support and shared Slack channel'
    ],
    featured: true
  }
];

export function PricingTeaser() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple per-seat pricing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Every plan starts with a 7 day free trial. Change or cancel whenever
            you like.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-shadow duration-200 ${
                plan.featured
                  ? 'border-orange-300 bg-white shadow-lg shadow-orange-900/5'
                  : 'border-slate-200 bg-white hover:shadow-md'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">
                  ${plan.price}
                </span>
                <span className="text-sm text-slate-500">
                  per user / month
                </span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="text-base text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-xl border-slate-300 bg-white text-base font-semibold text-slate-900 hover:bg-slate-100"
          >
            <Link href="/pricing">
              Compare full plans
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
