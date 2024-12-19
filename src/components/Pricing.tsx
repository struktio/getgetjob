import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Pricing() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };
  
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out our service',
      features: [
        '3 resume customizations',
        'Basic ATS optimization',
        'Standard processing speed',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      price: '$19',
      description: 'Best for active job seekers',
      features: [
        'Unlimited customizations',
        'Advanced ATS optimization',
        'Priority processing',
        'Premium templates',
        '24/7 priority support',
        'Resume performance analytics',
      ],
    },
  ];

  return (
    <div id="pricing" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold bg-clip-text text-transparent bg-brand-gradient">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Plans for every job seeker
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:border-primary/20 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== 'Free' && (
                    <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                  )}
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={handleGetStarted}
                className="mt-8 block w-full rounded-md px-6 py-3 text-center text-base font-medium bg-brand-gradient text-white hover:bg-brand-gradient-hover transition-colors"
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}