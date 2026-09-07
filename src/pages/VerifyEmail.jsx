import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiRefreshCw, FiArrowLeft } from 'react-icons/fi';
import logo from '../assets/logo.png';

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Handles typing single digits and restricting non-numeric input
  const handleChange = (index, value) => {
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    
    if (!sanitizedValue && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = sanitizedValue.slice(-1);
    setOtp(newOtp);

    // Auto-advance to the next field
    if (sanitizedValue !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handles backspacing & arrow key navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handles pasting full 6-digit codes
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6);
    
    if (pastedData) {
      const newOtp = [...otp];
      pastedData.split('').forEach((char, idx) => {
        newOtp[idx] = char;
      });
      setOtp(newOtp);

      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  // Submit Handler Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');

    if (code.length < 6) {
      alert('Please enter a valid 6-digit code.');
      return;
    }

    console.log('Submitted OTP:', code);
    navigate('/submit');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafe] px-3 py-6 sm:p-4 overflow-x-hidden">
      <div className="bg-[linear-gradient(to_bottom,#000000_0%,#80808094_15%,#FFFFFF_100%)] p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm w-full max-w-md box-border">
        <form onSubmit={handleSubmit} className="flex flex-col items-start sm:items-center w-full">

          {/* Logo */}
          <div className="mb-4 sm:mb-6 self-start sm:self-center">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="w-36 sm:w-48 rounded-lg py-2 object-contain"
            />
          </div>

          {/* Email Icon Badge */}
          <div className="w-10 h-10 bg-blue-50/80 rounded-xl flex items-center justify-center text-[#009FEF] mb-4 sm:mb-6 self-start sm:self-center">
            <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Heading & Description */}
          <div className="w-full text-left sm:text-center mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1 sm:mb-2">
              Verify Your Email
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We've sent a 6-digit verification code to your work email.
            </p>
          </div>

          {/* Email Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50/50 border border-blue-100 rounded-full text-slate-700 text-xs sm:text-sm font-semibold mb-5 sm:mb-8 self-start sm:self-center">
            <FiMail className="text-blue-600 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="truncate max-w-[200px]">r••••@gmail.com</span>
          </div>

          {/* Responsive OTP Grid */}
          <div className="w-full mb-4">
            <div className="grid grid-cols-6 gap-1.5 sm:gap-2.5">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  onPaste={handlePaste}
                  className="w-full aspect-square text-center text-base sm:text-xl font-bold bg-white border border-slate-200 rounded-xl sm:rounded-2xl text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-200 p-0"
                />
              ))}
            </div>
          </div>

          {/* Timer */}
          <p className="w-full text-left sm:text-center text-xs text-slate-400 font-medium mb-5 sm:mb-6">
            Code expires in <span className="text-slate-800 font-bold">0:60</span>
          </p>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-3 sm:py-4 bg-[#009FEF] text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-[#028FEC] transition duration-200 shadow-lg shadow-indigo-600/25 mb-5 sm:mb-6 text-sm sm:text-base"
          >
            Verify Email
          </button>

          {/* Actions */}
          <div className="flex flex-col items-start sm:items-center w-full gap-2.5 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm font-semibold text-slate-500">
            <button type="button" className="inline-flex items-center gap-2 hover:text-slate-800 transition py-1">
              <FiRefreshCw className="w-4 h-4" />
              Resend Code
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/login')}
              className="inline-flex items-center gap-2 hover:text-slate-800 transition py-1"
            >
              <FiArrowLeft className="w-4 h-4" />
              Change Email
            </button>
          </div>

          {/* Demo Footer Box */}
          <div className="w-full py-2.5 sm:py-3 px-4 bg-white/60 border border-slate-100 rounded-xl sm:rounded-2xl text-left sm:text-center text-xs sm:text-sm text-slate-400">
            Demo: use code <span className="font-bold text-indigo-600">123456</span>
          </div>

        </form>
      </div>
    </div>
  );
}