import React from 'react';
import { testimonials } from '../../data/testimonials';
import { TestimonialHeader } from './TestimonialHeader';
import { TestimonialGrid } from './TestimonialGrid';

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialHeader />
        <TestimonialGrid testimonials={testimonials} />
      </div>
    </div>
  );
}