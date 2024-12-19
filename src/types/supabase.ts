export interface ResumeRecord {
  id: string;
  user_id: string;
  original_resume_url: string;
  optimized_resume_url: string | null;
  job_url: string;
  job_title: string | null;
  company: string | null;
  status: 'processing' | 'completed' | 'failed';
  error_message?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ResumeUpdate {
  id: string;
  status: ResumeRecord['status'];
  optimized_resume_url: string | null;
  error_message?: string | null;
}