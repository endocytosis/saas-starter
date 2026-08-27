import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need an engineer to set this up?',
    answer:
      'No. You connect your Stripe account from the settings screen and Meridian imports your history on its own. Most teams are looking at their numbers within five minutes.'
  },
  {
    question: 'What happens to my data?',
    answer:
      'Your data is encrypted in transit and at rest, and access rules make sure each workspace only ever sees its own records. We never sell or share it, and you can request a full export or deletion at any time.'
  },
  {
    question: 'Can I invite my whole team?',
    answer:
      'Yes. Every plan includes unlimited members. You choose who is an owner and who is a member, and every change is recorded in the activity history.'
  },
  {
    question: 'What does the pilot include?',
    answer:
      'Pilot workspaces get the full product free while we finish the last round of polish, plus a direct line to the team building it. No card required, and no obligation when the pilot ends.'
  },
  {
    question: 'Which billing systems do you support?',
    answer:
      'Stripe is supported today, including subscriptions, seat changes and the customer portal. More providers are on the way and pilot teams get to vote on the order.'
  }
];

export function Faq() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Questions, answered
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Still unsure about something? Reply to your invite email and a real
          person will get back to you.
        </p>

        <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-900 transition-colors duration-150 hover:text-orange-600 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 pr-9 text-base leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
