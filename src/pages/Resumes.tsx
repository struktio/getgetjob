import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ResumeList } from '../components/dashboard/resumes/ResumeList';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { useResumes } from '../hooks/useResumes';
import { FileText } from 'lucide-react';

export function Resumes() {
	const { resumes, isLoading } = useResumes();

	return (
		<DashboardLayout>
			<DashboardHeader
				title="My Resumes"
				description="Manage and optimize your resumes for different job applications"
				icon={<FileText className="h-6 w-6 text-white" />}
			/>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mt-4">
					<h2 className="text-xl font-semibold text-gray-900 mb-4">Your Optimized Resumes</h2>
					<ResumeList resumes={resumes} isLoading={isLoading} />
				</div>
			</div>
		</DashboardLayout>
	);
}