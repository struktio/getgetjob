import React from 'react';
import { Upload, Search, FileCheck } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: 'Upload Your Resume',
      description: 'Start by uploading your existing resume in any common format.',
      icon: Upload,
    },
    {
      title: 'Add Job Link',
      description: 'Paste the LinkedIn job posting URL you want to apply for.',
      icon: Search,
    },
    {
      title: 'Get Your Customized Resume',
      description: 'Receive your tailored resume optimized for the specific job in seconds.',
      icon: FileCheck,
    },
  ];

  return (
    <div id="how-it-works" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold bg-clip-text text-transparent bg-brand-gradient">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Three simple steps to your perfect resume
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}