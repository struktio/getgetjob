import React from 'react';
import { Quote } from 'lucide-react';

export function QuoteIcon() {
  return (
    <div className="h-8 w-8 rounded bg-brand-gradient flex items-center justify-center">
      <Quote className="h-5 w-5 text-white" />
    </div>
  );
}