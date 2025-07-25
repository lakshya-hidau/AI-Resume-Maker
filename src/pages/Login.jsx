import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Auth data:', data);
      toast.success(isLogin ? 'Login successful!' : 'Account created successfully!');
      reset();
    } catch (error) {
      toast.error('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    toast.info(`${provider} login coming soon!`);
  };

  return (
    <>
      <SEO 
        title={`${isLogin ? 'Login' : 'Sign Up'} - AI Resume Maker`}
        description={`${isLogin ? 'Sign in to your account' : 'Create a new account'} to access premium resume features and save your progress.`}
      />
      
      <div className="min-h-screen bg-base-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-base-200 rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-base-content/70">
                {isLogin 
                  ? 'Sign in to access your resume dashboard' 
                  : 'Join thousands of successful job seekers'
                }
              </p>
            </div>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => handleSocialLogin('Google')}
                className="btn btn-outline w-full gap-2"
              >
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleSocialLogin('Facebook')}
                  className="btn btn-outline gap-2"
                >
                  <FaFacebook className="text-blue-600" />
                  Facebook
                </button>
                <button 
                  onClick={() => handleSocialLogin('LinkedIn')}
                  className="btn btn-outline gap-2"
                >
                  <FaLinkedin className="text-blue-700" />
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {!isLogin && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register('name', { 
                        required: !isLogin && 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={`input input-bordered w-full pl-10 ${errors.name ? 'input-error' : ''}`}
                      placeholder="Enter your full name"
                    />
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                  </div>
                  {errors.name && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.name.message}</span>
                    </label>
                  )}
                </div>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`input input-bordered w-full pl-10 ${errors.email ? 'input-error' : ''}`}
                    placeholder="Enter your email"
                  />
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                </div>
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.email.message}</span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: { value: 6, message: 'Password must be at least 6 characters' }
                    })}
                    className={`input input-bordered w-full pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                    placeholder="Enter your password"
                  />
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.password.message}</span>
                  </label>
                )}
              </div>

              {!isLogin && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('confirmPassword', { 
                        required: !isLogin && 'Please confirm your password',
                        validate: (value, { password }) => 
                          isLogin || value === password || 'Passwords do not match'
                      })}
                      className={`input input-bordered w-full pl-10 ${errors.confirmPassword ? 'input-error' : ''}`}
                      placeholder="Confirm your password"
                    />
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                  </div>
                  {errors.confirmPassword && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.confirmPassword.message}</span>
                    </label>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex justify-between items-center">
                  <label className="label cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="label-text ml-2">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="link link-primary text-sm">
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            {/* Toggle Form */}
            <div className="text-center mt-6">
              <p className="text-base-content/70">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    reset();
                  }}
                  className="link link-primary ml-1"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {/* Terms */}
            {!isLogin && (
              <div className="text-center mt-4">
                <p className="text-xs text-base-content/60">
                  By creating an account, you agree to our{' '}
                  <Link to="/terms" className="link link-primary">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="link link-primary">Privacy Policy</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;