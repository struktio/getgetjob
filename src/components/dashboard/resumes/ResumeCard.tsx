import { FileText, Download, Share2, Loader2, Link } from "lucide-react";
import { Resume } from "../../../types/resume";
import { formatDate } from "../../../utils/date";
import { useResumeSubscription } from "../../../hooks/useResumeSubscription";

interface ResumeCardProps {
	resume: Resume;
}

export function ResumeCard({ resume }: ResumeCardProps) {
	const { resume: liveResume, isLoading } = useResumeSubscription(resume.id);
	const status = liveResume?.status || resume.status;

	//https://www.amazon.jobs/jobs/2511364/software-dev-engineer-ii?cmpid=SPLICX0248M&utm_source=linkedin.com&utm_campaign=cxro&utm_medium=social_media&utm_content=job_posting&ss=paid
	function extractJobTitleFromUrl(url: string): string {
		try {
			// Create URL object to parse the URL
			const urlObj = new URL(url);

			// Get the pathname and split it into segments
			const segments = urlObj.pathname.split('/');

			// Return the last segment (job title)
			return segments[segments.length - 1];
		} catch (error) {
			// Return empty string or throw error if URL is invalid
			return '';
		}
	}


	return (
		<div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
			<div className="p-4 sm:p-6">
				<div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
					<div className="flex items-start flex-1 min-w-0">
						<div className="flex-shrink-0">
							<FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
						</div>
						<div className="ml-4 flex-1 min-w-0">
							<h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">
								{extractJobTitleFromUrl(resume.jobTitle)}
							</h3>
							<p className="text-sm text-gray-500 truncate">{resume.company}</p>
						</div>
					</div>
					<div className="flex-shrink-0">
						{status === "processing" && (
							<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 whitespace-nowrap">
								<Loader2 className="animate-spin h-3 w-3 mr-1.5" />
								Processing
							</span>
						)}
						{status === "completed" && (
							<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
								Ready
							</span>
						)}
						{status === "failed" && (
							<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
								Failed
							</span>
						)}
					</div>
				</div>
				<div className="mt-4">
					<div className="text-xs sm:text-sm text-gray-500">
						Created {formatDate(resume.createdAt)}
					</div>

				</div>
				<div className="mt-4 sm:mt-6 flex justify-end space-x-2 sm:space-x-3">
					{resume.originalUrl && (
						<a href={resume.originalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center mr-auto">
							<button className="bg-gray-50 p-1.5 sm:p-2 text-gray-400 hover:text-gray-500 flex items-center gap-2" >
								View Job
								<Link className="h-4 w-4 sm:h-5 sm:w-5" />
							</button>
						</a>
					)}
					<button
						className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-500"
						disabled={status !== "completed"}
					>
						<Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
					</button>
					<button
						className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-500"
						disabled={status !== "completed"}
						onClick={() => {
							if (liveResume?.optimized_resume_url) {
								window.open(liveResume.optimized_resume_url, "_blank");
							}
						}}
					>
						<Download className="h-4 w-4 sm:h-5 sm:w-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
