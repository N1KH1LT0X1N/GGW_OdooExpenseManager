import { useState } from 'react';
import { LogIn } from 'lucide-react';

export default function Login({ onToggleSignup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 shadow-xl">
                    <div className="flex items-center justify-center mb-8">
                        <LogIn className="w-8 h-8 text-blue-400 mr-2" />
                        <h1 className="text-2xl font-semibold text-white">Sign In</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center space-y-2">
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{' '}
                            <button
                                onClick={onToggleSignup}
                                className="text-blue-400 hover:text-blue-300 font-medium transition"
                            >
                                Signup
                            </button>
                        </p>
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                            Forgot password?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
