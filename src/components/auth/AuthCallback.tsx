import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function AuthCallback() {
	const navigate = useNavigate();

	useEffect(() => {
		supabase.auth.onAuthStateChange((event) => {
			if (event === 'SIGNED_IN') {
				console.log('NAVIGATING TO DASHBOARD');
				navigate('/dashboard');
			}
		});
	}, [navigate]);

	return null;
}