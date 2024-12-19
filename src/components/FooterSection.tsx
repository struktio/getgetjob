import { Twitter, Linkedin, Github } from 'lucide-react';
import { Logo } from '../assets/logo';

interface FooterSection {
	title: string;
	links: Array<{
		name: string;
		href: string;
	}>;
}

const footerSections: FooterSection[] = [
	{
		title: "Product",
		links: [
			{ name: "Features", href: "#features" },
			{ name: "How it Works", href: "#how-it-works" },
			{ name: "Pricing", href: "#pricing" },
			{ name: "FAQ", href: "#faq" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About", href: "#" },
			{ name: "Blog", href: "#" },
			{ name: "Careers", href: "#" },
			{ name: "Contact", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Resume Tips", href: "#" },
			{ name: "Career Advice", href: "#" },
			{ name: "Success Stories", href: "#" },
			{ name: "Help Center", href: "#" },
		],
	},
	{
		title: "Legal",
		links: [
			{ name: "Privacy", href: "#" },
			{ name: "Terms", href: "#" },
			{ name: "Cookie Policy", href: "#" },
		],
	},
];

export function Footer() {
	return (
		<footer className="bg-white border-t border-gray-100">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{footerSections.map((section) => (
						<div key={section.title}>
							<h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
								{section.title}
							</h3>
							<ul className="mt-4 space-y-4">
								{section.links.map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											className="text-base text-gray-500 hover:text-primary transition-colors"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-8 border-t border-gray-100 pt-8 md:flex md:items-center md:justify-between">
					<Logo />

					<div className="mt-8 md:mt-0">
						<div className="flex space-x-6">
							<a href="#" className="text-gray-400 hover:text-primary transition-colors">
								<Twitter className="h-6 w-6" />
							</a>
							<a href="#" className="text-gray-400 hover:text-primary transition-colors">
								<Linkedin className="h-6 w-6" />
							</a>
							<a href="#" className="text-gray-400 hover:text-primary transition-colors">
								<Github className="h-6 w-6" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-8 text-base text-gray-400">
					<p>© {new Date().getFullYear()} GetGetJob. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}