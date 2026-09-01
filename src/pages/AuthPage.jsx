import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LanguageToggle from '../components/LanguageToggle';
import { getStoredLanguage, setStoredLanguage, translations } from '../data/i18n';

const MOCK_OTP = '1234';

export default function AuthPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(getStoredLanguage());
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  const t = translations[language].auth;

  const handleSendOtp = () => {
    if (!phone.trim()) {
      setOtpError(t.enterPhone);
      return;
    }

    setOtpError('');
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (!otp.trim()) {
      setOtpError(t.enterOtp);
      return;
    }

    if (otp !== MOCK_OTP) {
      setOtpError(t.invalidOtp);
      return;
    }

    setOtpError('');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-md">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{t.brand}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{t.welcome}</h1>
          </div>
          <div className="pt-1">
            <LanguageToggle language={language} onChange={setLanguage} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {!otpSent ? (
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">{t.phoneLabel}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </div>

              {otpError && <p className="text-sm text-rose-600">{otpError}</p>}

              <Button className="w-full" onClick={handleSendOtp}>{t.sendOtp}</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">{t.otpLabel}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder={t.otpPlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </div>

              <p className="text-sm text-slate-500">{t.demoOtp}: <span className="font-semibold text-slate-700">1234</span></p>

              {otpError && <p className="text-sm text-rose-600">{otpError}</p>}

              <div className="flex gap-3">
                <Button variant="secondary" className="flex-1" onClick={() => setOtpSent(false)}>
                  {t.changeNumber}
                </Button>
                <Button className="flex-1" onClick={handleVerifyOtp}>{t.verifyContinue}</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
