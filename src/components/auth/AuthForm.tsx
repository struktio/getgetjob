import React from 'react';
import { Mail, Lock, Loader2 } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'signup';
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  error: string | null;
}

export function AuthForm({
  type,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  isLoading,
  error,
}: AuthFormProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1 relative">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="you@example.com"
          />
          <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={type === 'login' ? 'current-password' : 'new-password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="••••••••"
          />
          <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-gradient hover:bg-brand-gradient-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin h-5 w-5 mr-2" />
            {type === 'login' ? 'Signing in...' : 'Creating account...'}
          </>
        ) : (
          type === 'login' ? 'Sign in' : 'Create account'
        )}
      </button>
    </form>
  );
}