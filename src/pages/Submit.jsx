import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import logo from '../assets/logo.png';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Regex to match forbidden characters: spaces, <, >, ', ", \


  // Prevent forbidden keys on direct keypress
  const handlePasswordKeyDown = (e) => {
   
    if (blockedKeys.includes(e.key) || e.code === 'Space') {
      e.preventDefault();
      setPasswordError("Special symbols like < > ' \" \\ and spaces are disabled.");
    }
  };

  // Handler for main Password input
  const handlePasswordChange = (e) => {
    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(FORBIDDEN_REGEX, '');
    setPassword(sanitizedValue);

    if (rawValue !== sanitizedValue) {
     
    } else if (sanitizedValue.length > 0 && sanitizedValue.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError('');
    }
  };

  // Handler for Confirm Password input
  const handleConfirmPasswordChange = (e) => {
    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(FORBIDDEN_REGEX, '');
    setConfirmPassword(sanitizedValue);

    if (rawValue !== sanitizedValue) {
      setPasswordError("Forbidden characters (<, >, ', \", \\, or spaces) were removed.");
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      setPasswordError('Please fill in both fields.');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    setPasswordError('');
    console.log('Password updated successfully:', password);
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafe] px-4 py-8 font-sans">
      <div className="bg-[linear-gradient(to_bottom,#000000_0%,#80808094_20%,#FFFFFF_100%)] p-6 sm:p-10 rounded-3xl shadow-sm w-full max-w-md mx-auto">
        <div className="w-full">
          
          {/* Company / Brand Logo */}
          <div className="mb-6 flex justify-center">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="w-48 rounded-lg px-2 py-2 object-contain"
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-700 tracking-wider uppercase">
                PASSWORD
              </label>
              <div className="relative flex items-center">
                <FiLock className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onKeyDown={handlePasswordKeyDown}
                  onChange={handlePasswordChange}
                  autoComplete="new-password"
                  required
                  className="w-full pl-11 pr-11 py-3.5 bg-white border border-slate-200 rounded-full text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-700 tracking-wider uppercase">
                CONFIRM PASSWORD
              </label>
              <div className="relative flex items-center">
                <FiLock className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onKeyDown={handlePasswordKeyDown}
                  onChange={handleConfirmPasswordChange}
                  autoComplete="new-password"
                  required
                  className="w-full pl-11 pr-11 py-3.5 bg-white border border-slate-200 rounded-full text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showConfirmPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Validation Error Banner */}
            {passwordError && (
              <p className="text-xs text-red-600 font-medium text-center">
                {passwordError}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 bg-[#009FEF] hover:bg-[#028FEC] text-white font-semibold rounded-full shadow-md shadow-blue-500/20 transition-all active:scale-[0.99]"
            >
              Submit
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-6 text-sm text-slate-500">
            Already have an account?{' '}
            <button 
              type="button"
              onClick={() => navigate('/login')} 
              className="font-bold text-[#1d5bd8] hover:underline"
            >
              Sign In
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}