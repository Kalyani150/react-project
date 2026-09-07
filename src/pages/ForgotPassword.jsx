import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMail, FiLock } from 'react-icons/fi';
import api from '../services/api.service';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email handler: restricts input to valid email characters
  const handleEmailChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    try {
      await api('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      navigate('/verify-email', { state: { email } });
    } catch (error) {
      setSubmitError(error.message || 'Unable to send the reset link. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafe] px-3 py-6 sm:p-4 overflow-x-hidden">
      <div className="bg-[linear-gradient(to_bottom,#000000_0%,#80808094_18%,#FFFFFF_100%)] p-6 sm:p-10 rounded-3xl shadow-sm w-full max-w-md box-border">

        {/* Logo */}
        <div className="flex justify-start sm:justify-center mb-6">
          <img
            src={logo}
            alt="Company Logo"
            className="w-48 max-w-full rounded-lg py-2 object-contain"
          />
        </div>

        {/* Lock Icon */}
        <div className="flex justify-start sm:justify-center mb-6">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
            <FiLock className="w-6 h-6" />
          </div>
        </div>

        {/* Heading & Paragraph */}
        <div className="text-left sm:text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Forgot Password?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed text-left sm:text-center">
            Enter your registered email address and we'll send you a secure
            password reset link.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2 text-left sm:text-center">
              EMAIL ADDRESS
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
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition duration-200"
              />
            </div>
          </div>

          {/* Send Reset Link */}
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="w-full py-4 bg-[#009FEF] text-white font-semibold rounded-2xl hover:bg-[#028FEC] disabled:opacity-60 disabled:cursor-not-allowed transition duration-200 shadow-lg shadow-indigo-600/30"
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>

          {submitError && <p className="text-xs text-red-600 font-medium">{submitError}</p>}

          {/* Back to Sign In */}
          <a
            href="/login"
            className="w-full py-4 bg-white border border-slate-200 text-slate-800 font-semibold rounded-2xl hover:bg-slate-50 transition duration-200 block text-center"
          >
            Back to Sign In
          </a>

        </form>
      </div>
    </div>
  );
}
