import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from '../../types/testimonial';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}