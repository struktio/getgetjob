import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ResumeList } from '../components/dashboard/resumes/ResumeList';
import { ResumesHeader } from '../components/resumes/ResumesHeader';
import { useResumes } from '../hooks/useResumes';

export function Resumes() {
  const { resumes, isLoading } = useResumes();

  return (
    <DashboardLayout>
      <ResumesHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Optimized Resumes</h2>
          <ResumeList resumes={resumes} isLoading={isLoading} />
        </div>
      </div>
    </DashboardLayout>
  );
}