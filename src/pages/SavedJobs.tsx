import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { SavedJobsContent } from '../components/saved-jobs/SavedJobsContent';

export function SavedJobs() {
  return (
    <DashboardLayout>
      <SavedJobsContent />
    </DashboardLayout>
  );
}