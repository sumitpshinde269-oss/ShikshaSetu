import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const MOCK_OTP = '1234';

export default function AuthPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleSendOtp = () => {
    if (!phone.trim()) {
      setOtpError('Please enter your phone number.');
      return;
    }

    setOtpError('');
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (!otp.trim()) {
      setOtpError('Please enter the OTP.');
      return;
    }

    if (otp !== MOCK_OTP) {
      setOtpError('Invalid OTP. Use 1234 for demo login.');
      return;
    }

    setOtpError('');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">ShikshaSetu</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          {!otpSent ? (
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </div>

              {otpError && <p className="text-sm text-rose-600">{otpError}</p>}

              <Button className="w-full" onClick={handleSendOtp}>Send OTP</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Enter OTP</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="1234"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </div>

              <p className="text-sm text-slate-500">Demo OTP: <span className="font-semibold text-slate-700">1234</span></p>

              {otpError && <p className="text-sm text-rose-600">{otpError}</p>}

              <div className="flex gap-3">
                <Button variant="secondary" className="flex-1" onClick={() => setOtpSent(false)}>
                  Change number
                </Button>
                <Button className="flex-1" onClick={handleVerifyOtp}>Verify &amp; Continue</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
