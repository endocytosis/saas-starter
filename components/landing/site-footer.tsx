import Link from 'next/link';
import { CircleIcon } from 'lucide-react';

const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Sign in', href: '/sign-in' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'Create an account', href: '/sign-up' },
      { label: 'Dashboard', href: '/dashboard' }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center">
              <CircleIcon className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-xl font-semibold text-slate-900">
                Meridian
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Subscription revenue reporting for teams who would rather act than
              reconcile.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="text-sm font-semibold text-slate-900">
                  {column.heading}
                </p>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors duration-150 hover:text-orange-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Meridian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
