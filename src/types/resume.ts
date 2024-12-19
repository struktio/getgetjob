export interface Resume {
  id: string;
  jobTitle: string;
  company: string;
  description: string;
  createdAt: string;
  status: 'completed' | 'processing' | 'failed';
  downloadUrl?: string;
}