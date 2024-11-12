import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password reset logic here
        setIsSubmitted(true);
    };

    const handleBackToLogin = () => {
        navigate('/');
    };

    return (
        <div className="flex h-screen w-full bg-gray-50">
            {/* Left Side - Image Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-blue-600 relative">
                <div className="absolute inset-0 bg-blue-700 opacity-20 z-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)',
                        backgroundSize: '50px 50px'
                    }}/>
                </div>

                <div className="relative z-20 flex flex-col items-center justify-center w-full p-12 text-white">
                    <h2 className="text-4xl font-bold mb-6">Password Recovery</h2>
                    <p className="text-xl text-gray-100 text-center max-w-md">
                        Don't worry! It happens. Please enter the email address associated with your account.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-blue-500">
                        <path fill="currentColor" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            {/* Right Side - Reset Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="flex items-center">
                        <button
                            onClick={handleBackToLogin}
                            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Login
                        </button>
                    </div>

                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">Forgot your password?</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            {!isSubmitted ?
                                "No worries, we'll send you reset instructions." :
                                "Check your email for reset instructions."
                            }
                        </p>
                    </div>

                    {!isSubmitted ? (
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Reset Password
                            </button>
                        </form>
                    ) : (
                        <div className="mt-8 space-y-6">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-green-800">
                                            Email Sent Successfully
                                        </h3>
                                        <div className="mt-2 text-sm text-green-700">
                                            <p>
                                                We've sent a password reset link to {email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleBackToLogin}
                                className="w-full flex justify-center py-3 px-4 border border-blue-600 text-sm font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Back to Login
                            </button>
                        </div>
                    )}

                    <div className="text-center text-sm">
                        <p className="text-gray-600">
                            Remember your password?{' '}
                            <button
                                onClick={handleBackToLogin}
                                className="font-medium text-blue-600 hover:text-blue-500 underline"
                            >
                                Sign in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;