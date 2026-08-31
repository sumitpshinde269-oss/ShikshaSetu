import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import LanguageToggle from '../components/LanguageToggle';
import { getStoredLanguage, setStoredLanguage, translations } from '../data/i18n';
import { progress } from '../data/mockData';

const WEAK_AREAS_KEY = 'shiksha-weak-areas';

export default function ProgressPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(getStoredLanguage());
  const [weakAreas, setWeakAreas] = useState([]);
  const t = translations[language].progress;

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedAreas = JSON.parse(window.localStorage.getItem(WEAK_AREAS_KEY) || '[]');
    setWeakAreas(storedAreas);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{t.overview}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{t.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <Button variant="secondary" onClick={() => navigate('/home')}>{t.home}</Button>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <p className="text-sm font-medium text-slate-500">{t.currentStreak}</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{progress.streak} days</div>
          </Card>
          <Card className="p-5">
            <p className="text-sm font-medium text-slate-500">{t.lessonsCompleted}</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{progress.completed}</div>
          </Card>
          <Card className="p-5">
            <p className="text-sm font-medium text-slate-500">{t.accuracy}</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{progress.accuracy}%</div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <h2 className="text-xl font-semibold text-slate-900">{t.achievements}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {progress.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>{t.weeklyTarget}</span>
                <span>{progress.weeklyTarget}/5 lessons</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100">
                <div className="h-2.5 rounded-full bg-slate-900" style={{ width: `${(progress.weeklyTarget / 5) * 100}%` }} />
              </div>
            </div>

            {weakAreas.length > 0 && (
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Weak area</p>
                <ul className="mt-3 space-y-2 text-sm text-amber-900">
                  {weakAreas.map((area) => (
                    <li key={area} className="rounded-xl bg-white/60 px-3 py-2">
                      Revisit: {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          <Card className="p-5">
            <h2 className="text-xl font-semibold text-slate-900">{t.nextSteps}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-xl bg-slate-50 p-3">{t.module}</li>
              <li className="rounded-xl bg-slate-50 p-3">{t.review}</li>
              <li className="rounded-xl bg-slate-50 p-3">{t.revision}</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
