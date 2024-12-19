import { DashboardHeader } from '../dashboard/DashboardHeader';
import { SavedJobsComingSoon } from './SavedJobsComingSoon';
import { Star } from 'lucide-react';

export function SavedJobsContent() {
	return (

		<div className="min-h-screen bg-gray-50">
			<DashboardHeader
				title="Saved Jobs"
				description="Discover and save the perfect opportunities for your next career move"
				icon={<Star className="h-6 w-6 text-white" />}
			/>
			<SavedJobsComingSoon />
		</div>
	);
}