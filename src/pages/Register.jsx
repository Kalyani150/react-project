import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
  FiXCircle
} from 'react-icons/fi';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Forbidden characters per OWASP input sanitization rules for fields (<, >, ", ', \, space)
  const FORBIDDEN_REGEX = /[\s<>'"\\]/g;

  // Name handler: Allows letters and spaces
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData(prev => ({ ...prev, name: value }));
  };

  // Email handler: Allows standard email characters
  const handleEmailChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
    setFormData(prev => ({ ...prev, email: value }));
  };

  // Physical key interceptor for forbidden keys
  const handlePasswordKeyDown = (e) => {
    const blockedKeys = [' ', '<', '>', '"', "'", '\\'];
    if (blockedKeys.includes(e.key) || e.code === 'Space') {
      e.preventDefault();
      setPasswordError("Characters < > ' \" \\ and spaces are disabled for security.");
    }
  };

  // Password handler stripping OWASP-unsafe characters while preserving safe ASCII symbols
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(FORBIDDEN_REGEX, '');

    if (value !== sanitizedValue) {
      setPasswordError("Forbidden characters (<, >, ', \", \\, or spaces) were removed.");
    } else {
      setPasswordError('');
    }

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafe] px-3 py-6 sm:p-4 overflow-x-hidden">
      <div className="bg-[linear-gradient(to_bottom,#000000_0%,#80808094_18%,#FFFFFF_100%)] p-6 sm:p-10 rounded-3xl shadow-sm w-full max-w-md box-border">

        {/* Logo Container */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Company Logo"
            className="w-48 max-w-full rounded-lg px-2 py-2 object-contain"
          />
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">
              NAME
            </label>

            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={handleNameChange}
                required
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-200"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">
              EMAIL
            </label>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                placeholder="Enter your work email"
                value={formData.email}
                onChange={handleEmailChange}
                required
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">
              PASSWORD
            </label>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onKeyDown={handlePasswordKeyDown}
                onChange={handlePasswordChange}
                autoComplete="new-password"
                required
                className="w-full pl-11 pr-11 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? (
                  <FiEyeOff className="w-5 h-5" />
                ) : (
                  <FiEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">
              CONFIRM PASSWORD
            </label>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onKeyDown={handlePasswordKeyDown}
                onChange={handlePasswordChange}
                autoComplete="new-password"
                required
                className="w-full pl-11 pr-11 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-200"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="w-5 h-5" />
                ) : (
                  <FiEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {passwordError && (
            <p className="text-xs text-red-600 font-medium mt-1">{passwordError}</p>
          )}

          {/* Create Account */}
          <button
            type="submit"
            className="w-full py-4 bg-[#009FEF] text-white font-medium rounded-2xl hover:bg-[#028FEC] transition duration-200 shadow-lg shadow-indigo-600/30 mt-4"
          >
            Create Account
          </button>
        </form>

        {/* Sign In */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}