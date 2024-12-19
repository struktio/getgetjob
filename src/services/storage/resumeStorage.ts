import { supabase } from '../../lib/supabase';

export async function uploadResumeFile(file: File, userId: string): Promise<string> {
  try {
    const fileName = `${userId}/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('resumes')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    throw new Error(
      error instanceof Error 
        ? `Failed to upload file: ${error.message}`
        : 'Failed to upload file'
    );
  }
}