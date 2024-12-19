import React from 'react';
import { FileText } from 'lucide-react';

export function ResumesHeader() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-brand-gradient rounded-lg flex items-center justify-center mr-6">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-brand-gradient">
              My Resumes
            </h1>
            <p className="mt-2 text-base text-gray-600">
              Manage and optimize your resumes for different job applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}