import { supabase } from '../../lib/supabase';
import type { ResumeRecord } from '../../types/supabase';

export async function createResumeRecord(
  userId: string, 
  originalResumeUrl: string, 
  jobUrl: string
): Promise<ResumeRecord> {
  try {
    const { data, error } = await supabase
      .from('resumes')
      .insert({
        user_id: userId,
        original_resume_url: originalResumeUrl,
        job_url: jobUrl,
        status: 'processing'
      })
      .select()
      .single();

    if (error) throw error;
    if (!data) throw new Error('No data returned from insert');

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error 
        ? `Failed to create resume record: ${error.message}`
        : 'Failed to create resume record'
    );
  }
}

export async function updateResumeStatus(
  resumeId: string,
  status: 'processing' | 'completed' | 'failed',
  errorMessage?: string
): Promise<void> {
  const { error } = await supabase
    .from('resumes')
    .update({ 
      status,
      ...(errorMessage && { error_message: errorMessage })
    })
    .eq('id', resumeId);

  if (error) {
    throw new Error(`Failed to update resume status: ${error.message}`);
  }
}