import React from 'react';
import type { Testimonial } from '../../types/testimonial';
import { QuoteIcon } from './QuoteIcon';
import { TestimonialAvatar } from './TestimonialAvatar';
import { TestimonialInfo } from './TestimonialInfo';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
      <QuoteIcon />
      <p className="text-gray-600 flex-grow mt-4">{testimonial.quote}</p>
      <div className="mt-8 flex items-center">
        <TestimonialAvatar 
          image={testimonial.image} 
          name={testimonial.name} 
        />
        <TestimonialInfo 
          name={testimonial.name}
          role={testimonial.role}
          company={testimonial.company}
        />
      </div>
    </div>
  );
}