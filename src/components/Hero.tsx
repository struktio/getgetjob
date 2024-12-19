import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Hero() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold bg-clip-text text-transparent bg-brand-gradient">
                Introducing GetGetJob
              </span>
              <span className="mt-1 block text-4xl font-bold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Get Your Dream Job</span>
                <span className="block bg-clip-text text-transparent bg-brand-gradient">
                  With AI-Powered Resumes
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Upload your resume, paste a job link, and let our AI customize your resume perfectly for each application. Stand out from the crowd with tailored experience highlights in seconds.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button 
                onClick={handleGetStarted}
                className="inline-flex items-center px-6 py-3 text-white rounded-md bg-brand-gradient hover:bg-brand-gradient-hover transition"
              >
                Try for Free <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2070"
                  alt="Resume customization dashboard"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}