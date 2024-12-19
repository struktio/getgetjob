import React from 'react';
import { FileText, Download, Share2, Loader2 } from 'lucide-react';
import { Resume } from '../../../types/resume';
import { formatDate } from '../../../utils/date';
import { useResumeSubscription } from '../../../hooks/useResumeSubscription';

interface ResumeCardProps {
  resume: Resume;
}

export function ResumeCard({ resume }: ResumeCardProps) {
  const { resume: liveResume, isLoading } = useResumeSubscription(resume.id);
  const status = liveResume?.status || resume.status;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-medium text-gray-900">{resume.jobTitle}</h3>
            <p className="text-sm text-gray-500">{resume.company}</p>
          </div>
          <div>
            {status === 'processing' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                <Loader2 className="animate-spin h-4 w-4 mr-1.5" />
                Processing
              </span>
            )}
            {status === 'completed' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Ready
              </span>
            )}
            {status === 'failed' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                Failed
              </span>
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-500">
            Created {formatDate(resume.createdAt)}
          </div>
          <div className="mt-4 text-sm text-gray-700 line-clamp-2">
            {resume.description}
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button 
            className="p-2 text-gray-400 hover:text-gray-500"
            disabled={status !== 'completed'}
          >
            <Share2 className="h-5 w-5" />
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-gray-500"
            disabled={status !== 'completed'}
            onClick={() => {
              if (liveResume?.optimized_resume_url) {
                window.open(liveResume.optimized_resume_url, '_blank');
              }
            }}
          >
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}