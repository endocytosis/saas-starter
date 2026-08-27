'use server';

import { z } from 'zod';
import { validatedAction } from '@/lib/auth/middleware';
import { supabase } from '@/lib/supabase/client';

const UNIQUE_VIOLATION = '23505';

const waitlistSchema = z.object({
  email: z.string().email('Enter a valid email address').max(255),
  useCase: z.string().max(500).optional(),
  referrer: z.string().max(100).optional()
});

export const joinWaitlist = validatedAction(waitlistSchema, async (data) => {
  const { error } = await supabase.from('waitlist_signups').insert({
    email: data.email.trim().toLowerCase(),
    use_case: data.useCase?.trim() || null,
    referrer: data.referrer || null
  });

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      return {
        success: "You're already on the list. We'll be in touch shortly."
      };
    }

    console.error('Waitlist signup failed:', error.message);
    return { error: 'We could not save your request. Please try again.' };
  }

  return { success: "You're in. Watch your inbox for your invite." };
});

export async function getWaitlistCount() {
  const { data, error } = await supabase.rpc('waitlist_count');

  if (error || typeof data !== 'number') {
    return null;
  }

  return data;
}
