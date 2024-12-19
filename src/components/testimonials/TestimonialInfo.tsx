import React from 'react';

interface TestimonialInfoProps {
  name: string;
  role: string;
  company: string;
}

export function TestimonialInfo({ name, role, company }: TestimonialInfoProps) {
  return (
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
      <p className="text-sm">
        <span className="text-primary">{role}</span>
        <span className="text-gray-500"> at {company}</span>
      </p>
    </div>
  );
}