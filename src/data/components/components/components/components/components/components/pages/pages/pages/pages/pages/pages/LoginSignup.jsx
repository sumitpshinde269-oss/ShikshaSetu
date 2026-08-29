import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../../../../../../../../Card';
import Button from '../../../../../../../../../../../Button';

// Page 7: Simple Login/Signup Screen
// Phone number + OTP input (UI only)
const LoginSignup = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Handle phone number submission
  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setShowOTP(true);
    }
  };

  // Handle OTP verification
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      // In real app, verify OTP and redirect
      navigate('/');
    }
  };

  return (
    <div className="container-mobile min-h-screen flex flex-col items-center justify-center py-8">
      {/* App Logo */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-2">📚</div>
        <h1 className="text-3xl font-bold text-math-primary">Maths Fun</h1>
        <p className="text-gray-500">Learn Maths the fun way!</p>
      </div>

      <Card className="w-full p-6">
        {/* Toggle Login/Signup */}
        <div className="flex rounded-lg overflow-hidden mb-6 bg-gray-100 p-1">
          <button
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all ${
              isLogin 
                ? 'bg-math-primary text-white' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => { setIsLogin(true); setShowOTP(false); }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all ${
              !isLogin 
                ? 'bg-math-primary text-white' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => { setIsLogin(false); setShowOTP(false); }}
          >
            Sign Up
          </button>
        </div>

        {!showOTP ? (
          // Phone Number Input
          <form onSubmit={handleSendOTP}>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                📱 Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                maxLength="10"
                placeholder="Enter 10-digit number"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-math-primary focus:outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                We'll send a 4-digit OTP to verify your number
              </p>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 text-lg"
              disabled={phoneNumber.length < 10}
            >
              Send OTP →
            </Button>
          </form>
        ) : (
          // OTP Input
          <form onSubmit={handleVerifyOTP}>
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">
                OTP sent to <span className="font-bold">{phoneNumber}</span>
              </p>
              <button
                type="button"
                onClick={() => setShowOTP(false)}
                className="text-xs text-math-primary hover:underline mt-1"
              >
                Change number
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                🔑 Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                maxLength="4"
                placeholder="4-digit OTP"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg text-center tracking-widest focus:border-math-primary focus:outline-none"
                required
              />
            </div>

            <Button
              type="submit"
              variant="success"
              className="w-full py-4 text-lg"
              disabled={otp.length < 4}
            >
              {isLogin ? 'Login' : 'Sign Up'} →
            </Button>

            <p className="text-center text-xs text-gray-500 mt-3">
              In a real app, this would verify your OTP
            </p>
          </form>
        )}

        {/* Skip option */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-gray-400 hover:text-gray-600 underline"
          >
            Skip login for now →
          </button>
        </div>
      </Card>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        📱 Made for learning on the go
      </p>
    </div>
  );
};

export default LoginSignup;