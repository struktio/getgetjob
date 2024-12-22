interface DashboardHeaderProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export function DashboardHeader({ title, description, icon }: DashboardHeaderProps) {
	return (
		<div className="bg-white shadow">
			<div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex items-start">
					<div className="h-12 w-12 bg-brand-gradient rounded-lg flex items-center justify-center mr-6">
						{icon}
					</div>
					<div>
						<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-brand-gradient">
							{title}
						</h1>
						<p className="mt-2 text-base text-gray-600">
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}