import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from '../types/testimonial';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "ResumeAI helped me land my dream job! The AI customization perfectly highlighted my relevant skills for each application. I received more callbacks than ever before.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Marketing Director",
    company: "Growth Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    quote: "The ATS optimization feature is a game-changer. I went from zero responses to multiple interviews within weeks. The time saved on customizing resumes is incredible.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    quote: "As someone who switched careers, ResumeAI helped me highlight transferable skills I didn't even know I had. The customization is spot-on for each application.",
  },
];

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Hear from our successful users
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}