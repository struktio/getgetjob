import { Quote } from 'lucide-react';
import type { Testimonial } from '../types/testimonial';

interface TestimonialCardProps {
	testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	return (
		<div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
			<Quote className="h-8 w-8 text-indigo-600 mb-4" />
			<p className="text-gray-600 flex-grow">{testimonial.quote}</p>
			<div className="mt-8 flex items-center">
				<img
					className="h-12 w-12 rounded-full object-cover"
					src={testimonial.image}
					alt={testimonial.name}
				/>
				<div className="ml-4">
					<h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
					<p className="text-sm text-gray-500">
						{testimonial.role} at {testimonial.company}
					</p>
				</div>
			</div>
		</div>
	);
}