import React from 'react';
import { LogoSvg } from './LogoSvg';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <LogoSvg className="h-8 w-auto" />
    </div>
  );
}