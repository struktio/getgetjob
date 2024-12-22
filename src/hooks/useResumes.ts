import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Resume } from '../types/resume';
import type { ResumeRecord } from '../types/supabase';

function mapResumeRecord(record: ResumeRecord): Resume {
  return {
    id: record.id,
    jobTitle: record.job_title || 'Untitled Position',
    company: record.company || 'Company Name',
    description: `Resume optimized for ${record.job_url}`,
    createdAt: record.created_at,
    status: record.status,
		originalUrl: record.job_url,
    downloadUrl: record.optimized_resume_url
  };
}

export function useResumes() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchResumes() {
      try {
        const { data: records, error } = await supabase
          .from('resumes')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (mounted) {
          setResumes(records.map(mapResumeRecord));
        }
      } catch (err) {
        console.error('Error fetching resumes:', err);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    // Initial fetch
    fetchResumes();

    // Subscribe to changes
    const subscription = supabase
      .channel('resumes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'resumes'
        },
        async (payload) => {
          if (payload.eventType === 'INSERT') {
            const newResume = mapResumeRecord(payload.new as ResumeRecord);
            setResumes(prev => [newResume, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            const updatedResume = mapResumeRecord(payload.new as ResumeRecord);
            setResumes(prev => 
              prev.map(resume => 
                resume.id === updatedResume.id ? updatedResume : resume
              )
            );
          }
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return { resumes, isLoading };
}