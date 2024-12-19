import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

async function handleWebhookRequest(supabaseClient: any, resumeId: string, webhookUrl: string) {
  // Get resume data
  const { data: resume, error: fetchError } = await supabaseClient
    .from('resumes')
    .select('*')
    .eq('id', resumeId)
    .single();

  if (fetchError) throw fetchError;

  // Send to Make.com
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      resume_id: resume.id,
      original_resume_url: resume.original_resume_url,
      job_url: resume.job_url,
    }),
  });

  if (!response.ok) {
    // Update resume status to failed
    await supabaseClient
      .from('resumes')
      .update({ status: 'failed' })
      .eq('id', resumeId);

    throw new Error('Failed to process resume');
  }

  return { message: 'Successfully triggered webhook' };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { resume_id, webhook_url } = await req.json();
    
    if (!resume_id || !webhook_url) {
      throw new Error('Missing required parameters');
    }

    const result = await handleWebhookRequest(supabaseClient, resume_id, webhook_url);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Webhook error:', error);
    
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Internal server error',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: error instanceof Error ? 400 : 500,
      }
    );
  }
});