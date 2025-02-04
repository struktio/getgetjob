import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Github } from 'lucide-react';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { AuthForm } from '../../components/auth/AuthForm';
import { AuthDivider } from '../../components/auth/AuthDivider';
import { useAuth } from '../../contexts/AuthContext';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInWithGithub, isLoading, error } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <AuthLayout title="Welcome back">
      <div className="mt-8">
        <button
          onClick={signInWithGithub}
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Github className="h-5 w-5 mr-2" />
          Continue with GitHub
        </button>

        <AuthDivider />

        <AuthForm
          type="login"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-primary hover:text-primary-dark">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}