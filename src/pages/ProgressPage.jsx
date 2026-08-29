import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { progress } from '../data/mockData';

export default function ProgressPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Overview</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Progress dashboard</h1>
          </div>
          <Button variant="secondary" onClick={() => navigate('/home')}>Home</Button>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <p className="text-sm font-medium text-slate-500">Current streak</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{progress.streak} days</div>
          </Card>
          <Card className="p-5">
            <p className="text-sm font-medium text-slate-500">Lessons completed</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{progress.completed}</div>
          </Card>
          <Card className="p-5">
            <p className="text-sm font-medium text-slate-500">Accuracy</p>
            <div className="mt-3 text-3xl font-bold text-slate-900">{progress.accuracy}%</div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <h2 className="text-xl font-semibold text-slate-900">Achievements</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {progress.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>Weekly target</span>
                <span>{progress.weeklyTarget}/5 lessons</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100">
                <div className="h-2.5 rounded-full bg-slate-900" style={{ width: `${(progress.weeklyTarget / 5) * 100}%` }} />
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-xl font-semibold text-slate-900">Next steps</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-xl bg-slate-50 p-3">Complete the next algebra module</li>
              <li className="rounded-xl bg-slate-50 p-3">Review corrected quiz answers</li>
              <li className="rounded-xl bg-slate-50 p-3">Attend the revision session</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
