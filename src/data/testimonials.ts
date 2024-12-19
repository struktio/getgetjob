import { IMAGES } from '../constants/images';
import type { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "TechCorp",
    image: IMAGES.testimonials.sarah,
    quote: "ResumeAI helped me land my dream job! The AI customization perfectly highlighted my relevant skills for each application. I received more callbacks than ever before.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Marketing Director",
    company: "Growth Labs",
    image: IMAGES.testimonials.james,
    quote: "The ATS optimization feature is a game-changer. I went from zero responses to multiple interviews within weeks. The time saved on customizing resumes is incredible.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCo",
    image: IMAGES.testimonials.emily,
    quote: "As someone who switched careers, ResumeAI helped me highlight transferable skills I didn't even know I had. The customization is spot-on for each application.",
  },
];