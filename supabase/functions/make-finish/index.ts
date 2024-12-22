import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface OptimizedResumeResponse{
	resume_id: string;	
	optimized_resume_url: string;
	job_title: string;
	company: string;
}

async function handleWebhookRequest(supabaseClient: any, res: OptimizedResumeResponse) {
	// Get resume data
	const { data: resume, error: fetchError } = await supabaseClient
		.from('resumes')
		.select('*')
		.eq('id', res.resume_id)
		.single();

	if (fetchError) {
		// Update resume status to failed
		await supabaseClient
			.from('resumes')
			.update({ status: 'failed' })
		.eq('id', res.resume_id);
	}
		// Update resume status to failed
		await supabaseClient
			.from('resumes')
			.update({ 
				status: 'completed',
				optimized_resume_url: res.optimized_resume_url,
				job_title: res.job_title,
				company: res.company,
				})
		.eq('id', res.resume_id);

	return { message: 'Successfully updated resume status' };
}

serve(async (req) => {
	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders });
	}

	console.log('Request Received');

	try {
		const supabaseClient = createClient(
			Deno.env.get('SUPABASE_URL') ?? '',
			Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
		);

		const res: OptimizedResumeResponse = await req.json();

		console.log('Response', {res});

		if (!res.resume_id || !res.optimized_resume_url || !res.job_title || !res.company) {
			throw new Error('Missing required parameters');
		}


		const result = await handleWebhookRequest(supabaseClient, res);

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