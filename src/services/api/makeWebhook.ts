import { supabase } from '../../lib/supabase';

export async function sendToMakeWebhook(
  resumeId: string,
  originalResumeUrl: string,
  jobUrl: string,
  webhookUrl: string
): Promise<void> {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resume_id: resumeId,
        original_resume_url: originalResumeUrl,
        job_url: jobUrl,
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
  } catch (error) {
    // Update resume status to failed if webhook call fails
    await supabase
      .from('resumes')
      .update({ 
        status: 'failed',
        error_message: error instanceof Error ? error.message : 'Failed to process resume'
      })
      .eq('id', resumeId);

    throw error;
  }
}