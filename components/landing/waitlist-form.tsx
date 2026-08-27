'use client';

import { useActionState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ActionState } from '@/lib/auth/middleware';
import { joinWaitlist } from '@/app/(dashboard)/waitlist';

export function WaitlistForm({
  referrer,
  tone = 'light'
}: {
  referrer: string;
  tone?: 'light' | 'dark';
}) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    joinWaitlist,
    { error: '' }
  );

  const helperClass = tone === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const errorClass = tone === 'dark' ? 'text-red-300' : 'text-red-600';

  if (state.success) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-left">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
        <div>
          <p className="text-sm font-semibold text-emerald-900">
            Request received
          </p>
          <p className="mt-1 text-sm leading-relaxed text-emerald-800">
            {state.success}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="w-full">
      <input type="hidden" name="referrer" value={referrer} />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          id={`waitlist-email-${referrer}`}
          name="email"
          type="email"
          required
          maxLength={255}
          autoComplete="email"
          placeholder="you@company.com"
          aria-label="Work email"
          className="h-12 flex-1 rounded-xl border-slate-300 bg-white px-4 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:border-orange-500 focus-visible:ring-orange-500/30"
        />
        <Button
          type="submit"
          disabled={pending}
          className="group h-12 rounded-xl bg-orange-600 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Request access
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
      </div>

      {state.error ? (
        <p role="alert" className={`mt-2 text-sm font-medium ${errorClass}`}>
          {state.error}
        </p>
      ) : (
        <p className={`mt-2 text-sm ${helperClass}`}>
          Free during the pilot. No card required, unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
