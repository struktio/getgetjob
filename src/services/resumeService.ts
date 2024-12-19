import { supabase } from '../lib/supabase';
import type { ResumeRecord } from '../types/supabase';

export async function uploadResumeFile(file: File, userId: string): Promise<string> {
	const fileName = `${userId}/${Date.now()}-${file.name}`;
	const { data, error } = await supabase.storage
		.from('resumes')
		.upload(fileName, file, {
			cacheControl: '3600',
			upsert: true
		});

	if (error) throw error;

	const { data: { publicUrl } } = supabase.storage
		.from('resumes')
		.getPublicUrl(data.path);

	return publicUrl;
}

export async function createResumeRecord(
	userId: string,
	originalResumeUrl: string,
	jobUrl: string
): Promise<ResumeRecord> {
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
	return data;
}

export async function sendToMakeWebhook(
	resumeId: string,
	originalResumeUrl: string,
	jobUrl: string,
	webhookUrl: string
): Promise<void> {
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
		// Update resume status to failed if webhook call fails
		await supabase
			.from('resumes')
			.update({ status: 'failed' })
			.eq('id', resumeId);

		throw new Error('Failed to process resume');
	}



	// Only try to parse JSON if we're expecting JSON
	if (response.headers.get('content-type')?.includes('application/json')) {
		const data = await response.json();
		console.log({ data });
	} else {
		// For non-JSON responses, just log the text
		const text = await response.text();
		console.log({ responseText: text });
	}
}