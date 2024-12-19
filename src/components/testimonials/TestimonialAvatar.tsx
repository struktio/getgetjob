import React from 'react';

interface TestimonialAvatarProps {
  image: string;
  name: string;
}

export function TestimonialAvatar({ image, name }: TestimonialAvatarProps) {
  return (
    <img
      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
      src={image}
      alt={name}
    />
  );
}