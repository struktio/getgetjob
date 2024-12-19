import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ResumeList } from '../components/dashboard/resumes/ResumeList';
import { CreateResumeCard } from '../components/dashboard/resumes/CreateResumeCard';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { useResumes } from '../hooks/useResumes';
import { FileText } from 'lucide-react';

export function Dashboard() {
	const { resumes, isLoading } = useResumes();

	return (
		<DashboardLayout>
			<DashboardHeader
				title="Dashboard"
				description="Create and manage your optimized resumes"
				icon={<FileText className="h-6 w-6 text-white" />}
			/>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<CreateResumeCard />
				<div className="mt-8">
					<h2 className="text-xl font-semibold text-gray-900 mb-4">Your Optimized Resumes</h2>
					<ResumeList resumes={resumes} isLoading={isLoading} />
				</div>
			</div>
		</DashboardLayout>
	);
}