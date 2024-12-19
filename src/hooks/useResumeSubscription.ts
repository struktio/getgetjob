import { useState, useEffect } from 'react';
import { ResumeRecord } from '../types/supabase';
import { subscribeToResumeUpdates, fetchResume } from '../utils/supabase';

export function useResumeSubscription(resumeId: string) {
  const [resume, setResume] = useState<ResumeRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function initializeSubscription() {
      try {
        // Fetch initial resume data
        const initialResume = await fetchResume(resumeId);
        if (mounted) {
          setResume(initialResume);
          setIsLoading(false);
        }

        // Subscribe to updates
        const subscription = await subscribeToResumeUpdates(resumeId, (updatedResume) => {
          if (mounted) {
            setResume(updatedResume);
          }
        });

        return () => {
          mounted = false;
          subscription.unsubscribe();
        };
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load resume');
          setIsLoading(false);
        }
      }
    }

    initializeSubscription();
  }, [resumeId]);

  return { resume, isLoading, error };
}