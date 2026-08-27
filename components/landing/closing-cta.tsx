import { WaitlistForm } from './waitlist-form';

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.18),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          See your revenue clearly, starting this week
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
          Join the private pilot and we will set up your workspace with you.
        </p>
        <div className="mx-auto mt-8 max-w-lg text-left">
          <WaitlistForm referrer="closing-cta" tone="dark" />
        </div>
      </div>
    </section>
  );
}
