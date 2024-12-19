import React from 'react';
import { Zap, Clock, Target, Sparkles } from 'lucide-react';

export function Features() {
  const features = [
    {
      name: 'Instant Customization',
      description: 'Get a tailored resume in seconds, perfectly matched to your target job description.',
      icon: Zap,
    },
    {
      name: 'Time Saving',
      description: 'Stop spending hours tweaking your resume. Our AI does the heavy lifting for you.',
      icon: Clock,
    },
    {
      name: 'ATS Optimization',
      description: 'Ensure your resume passes Applicant Tracking Systems with optimized keywords and formatting.',
      icon: Target,
    },
    {
      name: 'Smart Highlights',
      description: 'AI automatically emphasizes your most relevant experiences for each application.',
      icon: Sparkles,
    },
  ];

  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold bg-clip-text text-transparent bg-brand-gradient">Features</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to land your dream job
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-brand-gradient flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}