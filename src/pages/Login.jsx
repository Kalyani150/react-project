import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Allowed password symbols (standard safe ASCII special characters)
  // Permitted: ! @ # $ % ^ & * ( ) _ + - = { } [ ] : ; , . ? / ~ ` |
  // Blocked: Space, <, >, ", ', \
  const FORBIDDEN_REGEX = /[\s<>'"\\]/g;

  // Email sanitizer: allows alphanumeric, @, ., -, _
  const handleEmailChange = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
    setEmail(sanitizedValue);
  };

  // Prevent forbidden keys on direct keypress
  const handlePasswordKeyDown = (e) => {
    const blockedKeys = [' ', '<', '>', '"', "'", '\\'];
    if (blockedKeys.includes(e.key) || e.code === 'Space') {
      e.preventDefault();
      setPasswordError("Special symbols like < > ' \" \\ and spaces are disabled.");
    }
  };

  // Validate and update password state
  const handlePasswordChange = (e) => {
    const rawValue = e.target.value;
    
    // Automatically filter out forbidden characters from paste/autofill
    const sanitizedValue = rawValue.replace(FORBIDDEN_REGEX, '');
    setPassword(sanitizedValue);

    // Dynamic validation rules
    if (rawValue !== sanitizedValue) {
      setPasswordError("Forbidden characters (<, >, ', \", \\, or spaces) were removed.");
    } else if (sanitizedValue.length > 0 && sanitizedValue.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-3 py-6 sm:p-4 overflow-x-hidden">
      <div className="bg-[linear-gradient(to_bottom,#000000_0%,#80808094_30%,#FFFFFF_100%)] p-6 sm:p-10 rounded-3xl shadow-sm w-full max-w-md box-border">
        
        {/* Logo Container */}
        <div className="flex justify-center mb-6">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="w-48 max-w-full rounded-lg px-2 py-2 object-contain"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">Please enter your details to sign in</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">
              EMAIL ADDRESS
            </label>
            <input 
              type="email" 
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              value={email}
              onChange={handleEmailChange}
              required 
              className="w-full px-4 py-3.5 bg-blue-50/100 border border-transparent rounded-2xl text-gray-800 focus:outline-none focus:bg-white focus:border-indigo-400 transition duration-200" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2">
              PASSWORD
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onKeyDown={handlePasswordKeyDown}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                enterKeyHint="go"
                required 
                className="w-full pl-4 pr-12 py-3.5 bg-blue-50/100 border border-transparent rounded-2xl text-gray-800 focus:outline-none focus:bg-white focus:border-indigo-400 transition duration-200" 
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 focus:outline-none"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.03 10.03 0 013.982-.863c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m-2.182-1.222a4 4 0 11-5.656-5.656" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Error Message */}
            {passwordError && (
              <p className="text-xs text-red-600 font-medium mt-2">{passwordError}</p>
            )}
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-[#009FEF] text-white font-medium rounded-2xl hover:bg-[#028FEC] transition duration-200 shadow-sm mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Create an account?{' '}
          <a
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}