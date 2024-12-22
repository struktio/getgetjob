import React from 'react';
import { Rocket } from 'lucide-react';

export function SavedJobsComingSoon() {
	return (
		<div className="mt-8 mx-8  p-8">
			<div className="flex flex-col items-center">
				<div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mb-6">
					<Rocket className="h-8 w-8 text-white" />
				</div>
				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					Coming Soon!
				</h2>
				<p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
					We're working on an exciting feature that will allow you to search and save jobs directly from LinkedIn.
					Soon you'll be able to:
				</p>
			</div>
			<ul className="text-gray-700 max-w-md mx-auto text-left space-y-4 mb-8">
				<li className="flex items-center">
					<span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
					Search for jobs across LinkedIn without leaving the platform
				</li>
				<li className="flex items-center">
					<span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
					Save interesting positions for later review
				</li>
				<li className="flex items-center">
					<span className="w-3 h-3 bg-primary rounded-full mr-4"></span>
					Get instant resume optimization for saved jobs
				</li>
			</ul>
			<p className="text-sm text-gray-500 text-center">
				Stay tuned for updates! We'll notify you as soon as this feature becomes available.
			</p>
		</div>
	);
}