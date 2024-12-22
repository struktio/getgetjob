import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets/logo';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

export function Header() {
	const navigate = useNavigate();
	const { user, isLoading } = useAuth();

	const handleAuthClick = () => {
		if (user) {
			navigate('/dashboard');
		} else {
			navigate('/signup');
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-start items-center h-16">
					<Logo />
					<nav className="hidden md:flex items-center space-x-8">
						<a href="#features" className="text-gray-600 hover:text-primary">Features</a>
						<a href="#how-it-works" className="text-gray-600 hover:text-primary">How it Works</a>
						<a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
					</nav>
					<div className="flex items-center space-x-4">
						{user ? (
							<button
								onClick={() => navigate('/dashboard')}
								className="px-4 py-2 text-white rounded-lg bg-brand-gradient hover:bg-brand-gradient-hover transition"
							>
								Dashboard
							</button>
						) : (
							<>
								<button
									onClick={() => navigate('/login')}
									className="px-4 py-2 text-primary hover:text-primary-dark transition"
								>
									Sign In
								</button>
								<button
									onClick={handleAuthClick}
									disabled={isLoading}
									className="px-4 py-2 text-white rounded-lg bg-brand-gradient hover:bg-brand-gradient-hover transition flex items-center"
								>
									{isLoading ? (
										<>
											<Loader2 className="animate-spin h-4 w-4 mr-2" />
											Loading...
										</>
									) : (
										'Get Started'
									)}
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}