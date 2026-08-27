import { Sparkles, Users } from 'lucide-react';
import { RevenuePreview } from './revenue-preview';
import { WaitlistForm } from './waitlist-form';

export function Hero({ waitlistCount }: { waitlistCount: number | null }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_-10%,rgba(249,115,22,0.10),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(15,23,42,0.06),transparent_40%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
              <Sparkles className="h-3.5 w-3.5" />
              Now in private pilot
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Know exactly where your
              <span className="text-orange-600"> revenue is going</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Meridian turns your subscriptions, seats and trials into one clear
              picture. See what renewed, what is at risk and what your team
              should do about it today.
            </p>

            <div className="mt-8 max-w-xl">
              <WaitlistForm referrer="hero" />
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <dt className="text-sm text-slate-500">Setup time</dt>
                <dd className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                  4 min
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Revenue tracked</dt>
                <dd className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                  $2.4B
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Reports saved</dt>
                <dd className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                  12 hrs
                </dd>
              </div>
            </dl>

            {waitlistCount ? (
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                <Users className="h-4 w-4 text-orange-500" />
                {waitlistCount.toLocaleString('en-US')}{' '}
                {waitlistCount === 1 ? 'team has' : 'teams have'} already
                requested access
              </p>
            ) : null}
          </div>

          <div className="mt-16 lg:col-span-6 lg:mt-0 lg:flex lg:items-center">
            <RevenuePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
