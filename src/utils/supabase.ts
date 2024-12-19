import { ResumeRecord } from '../types/supabase';
import { supabase } from '../lib/supabase';

export async function subscribeToResumeUpdates(
  resumeId: string,
  onUpdate: (resume: ResumeRecord) => void
) {
  return supabase
    .channel(`resume-${resumeId}`)
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'resumes',
        filter: `id=eq.${resumeId}`,
      },
      (payload) => {
        onUpdate(payload.new as ResumeRecord);
      }
    )
    .subscribe();
}

export async function fetchResume(id: string) {
  const { data, error } = await supabase
    .from('resumes')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as ResumeRecord;
}