'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const bars = [
  { label: 'Mar', value: 42 },
  { label: 'Apr', value: 51 },
  { label: 'May', value: 47 },
  { label: 'Jun', value: 63 },
  { label: 'Jul', value: 78 },
  { label: 'Aug', value: 92 }
];

const events = [
  { team: 'Northwind', detail: 'upgraded to Scale', amount: '+$480' },
  { team: 'Kestrel Labs', detail: 'trial converted', amount: '+$120' },
  { team: 'Foundry Co', detail: 'seats added (4)', amount: '+$96' }
];

const TARGET_MRR = 48250;

export function RevenuePreview() {
  const [visible, setVisible] = useState(false);
  const [mrr, setMrr] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMrr(Math.round(TARGET_MRR * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible]);

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-orange-100 via-slate-100 to-transparent blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Recurring revenue
            </p>
            <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight text-slate-900">
              ${mrr.toLocaleString('en-US')}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
            <TrendingUp className="h-4 w-4" />
            18.4%
          </span>
        </div>

        <div className="px-5 pt-6">
          <div className="flex h-36 items-end justify-between gap-3">
            {bars.map((bar, index) => (
              <div
                key={bar.label}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div className="flex h-28 w-full items-end">
                  <div
                    className={`w-full rounded-t-md transition-[height] duration-700 ease-out ${
                      index === bars.length - 1
                        ? 'bg-orange-500'
                        : 'bg-slate-200'
                    }`}
                    style={{
                      height: visible ? `${bar.value}%` : '0%',
                      transitionDelay: `${index * 90}ms`
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-slate-100 bg-slate-50/70 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Live activity
          </p>
          <ul className="mt-3 space-y-3">
            {events.map((event, index) => (
              <li
                key={event.team}
                className={`flex items-center justify-between gap-4 transition-all duration-500 ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: `${450 + index * 140}ms` }}
              >
                <span className="flex min-w-0 items-center gap-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span className="truncate">
                    <span className="font-semibold text-slate-900">
                      {event.team}
                    </span>{' '}
                    {event.detail}
                  </span>
                </span>
                <span className="shrink-0 text-sm font-semibold text-emerald-600">
                  {event.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/5 sm:block">
        <p className="text-xs font-medium text-slate-500">Churn risk</p>
        <p className="mt-0.5 flex items-center gap-1 text-lg font-bold text-slate-900">
          3 accounts
          <ArrowUpRight className="h-4 w-4 text-orange-500" />
        </p>
      </div>
    </div>
  );
}
