import React from 'react';
import { Rocket } from 'lucide-react';

export function SavedJobsComingSoon() {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm p-8 text-center">
      <div className="mx-auto w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mb-6">
        <Rocket className="h-8 w-8 text-white" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Coming Soon!
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        We're working on an exciting feature that will allow you to search and save jobs directly from LinkedIn. 
        Soon you'll be able to:
      </p>
      <ul className="text-gray-600 max-w-md mx-auto text-left space-y-3 mb-8">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Search for jobs across LinkedIn without leaving the platform
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Save interesting positions for later review
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Get instant resume optimization for saved jobs
        </li>
      </ul>
      <p className="text-sm text-gray-500">
        Stay tuned for updates! We'll notify you as soon as this feature becomes available.
      </p>
    </div>
  );
}