import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { validateResumeFile, validateJobUrl } from '../utils/resumeValidation';
import { uploadResumeFile } from '../services/storage/resumeStorage';
import { createResumeRecord } from '../services/database/resumeDatabase';
import { sendToMakeWebhook } from '../services/api/makeWebhook';

export function useResumeUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadResume = async (file: File, jobUrl: string) => {
    try {
      setIsUploading(true);
      setError(null);

      // 1. Validate inputs
      validateResumeFile(file);
      validateJobUrl(jobUrl);

      // 2. Check authentication
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Please sign in to upload a resume');
      }

      // 3. Upload file
      const publicUrl = await uploadResumeFile(file, user.id);

      // 4. Create resume record
      const resume = await createResumeRecord(user.id, publicUrl, jobUrl);

      // 5. Send to Make webhook
      await sendToMakeWebhook(
        resume.id,
        publicUrl,
        jobUrl,
        import.meta.env.VITE_MAKE_WEBHOOK_URL
      );

      return resume;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to upload resume';
      setError(message);
      console.error('Upload failed:', err);
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadResume, isUploading, error };
}