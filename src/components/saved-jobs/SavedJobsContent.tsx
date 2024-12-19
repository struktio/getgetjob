import React from 'react';
import { SavedJobsHeader } from './SavedJobsHeader';
import { SavedJobsComingSoon } from './SavedJobsComingSoon';

export function SavedJobsContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SavedJobsHeader />
      <SavedJobsComingSoon />
    </div>
  );
}