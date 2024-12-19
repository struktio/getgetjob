import React from 'react';
import { Star } from 'lucide-react';

export function SavedJobsHeader() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-brand-gradient rounded-lg flex items-center justify-center mr-6">
            <Star className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                Saved Jobs
              </h1>
              <span className="ml-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Coming Soon
              </span>
            </div>
            <p className="mt-2 text-base text-gray-600">
              Discover and save the perfect opportunities for your next career move
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}