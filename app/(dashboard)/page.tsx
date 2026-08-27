import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { SocialProof } from '@/components/landing/social-proof';
import { PricingTeaser } from '@/components/landing/pricing-teaser';
import { Faq } from '@/components/landing/faq';
import { ClosingCta } from '@/components/landing/closing-cta';
import { SiteFooter } from '@/components/landing/site-footer';
import { getWaitlistCount } from './waitlist';

// Keeps the signup total on the page reasonably fresh without a request per visit.
export const revalidate = 300;

export default async function HomePage() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main className="bg-white">
      <Hero waitlistCount={waitlistCount} />
      <Features />
      <HowItWorks />
      <SocialProof />
      <PricingTeaser />
      <Faq />
      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
