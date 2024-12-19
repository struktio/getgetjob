import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ResumeList } from '../components/dashboard/resumes/ResumeList';
import { CreateResumeCard } from '../components/dashboard/resumes/CreateResumeCard';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { useResumes } from '../hooks/useResumes';

export function Dashboard() {
  const { resumes, isLoading } = useResumes();

  return (
    <DashboardLayout>
      <DashboardHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CreateResumeCard />
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Optimized Resumes</h2>
          <ResumeList resumes={resumes} isLoading={isLoading} />
        </div>
      </div>
    </DashboardLayout>
  );
}