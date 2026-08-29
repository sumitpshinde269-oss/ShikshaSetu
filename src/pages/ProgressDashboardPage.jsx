import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { progress } from '../data/mockData';

export default function ProgressDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Your growth</p>
            <h1 className="mt-2 text-3xl font-black text-slate-800">Progress dashboard</h1>
          </div>
          <Button variant="secondary" onClick={() => navigate('/grade-selection')}>Explore more</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-gradient-to-br from-amber-100 to-yellow-50">
            <p className="text-sm font-bold uppercase tracking-wide text-amber-700">Streak</p>
            <h2 className="mt-2 text-4xl font-black text-slate-800">{progress.streak} days</h2>
          </Card>
          <Card className="bg-gradient-to-br from-sky-100 to-cyan-50">
            <p className="text-sm font-bold uppercase tracking-wide text-sky-700">Stars</p>
            <h2 className="mt-2 text-4xl font-black text-slate-800">{progress.stars}</h2>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-100 to-green-50">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Accuracy</p>
            <h2 className="mt-2 text-4xl font-black text-slate-800">{progress.accuracy}%</h2>
          </Card>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <Card className="p-5">
            <h3 className="text-xl font-black text-slate-800">Latest achievements</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {progress.badges.map((badge) => (
                <span key={badge} className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">{badge}</span>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {progress.focus.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="text-lg font-black text-slate-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="text-xl font-black text-slate-800">Next goals</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="rounded-2xl bg-amber-50 p-3">⭐ Finish the next challenge quest</li>
              <li className="rounded-2xl bg-sky-50 p-3">📘 Practice two more lessons this week</li>
              <li className="rounded-2xl bg-emerald-50 p-3">🎯 Reach 90% quiz accuracy</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
