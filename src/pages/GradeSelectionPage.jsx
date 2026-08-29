import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { grades } from '../data/mockData';

export default function GradeSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Choose your path</p>
            <h1 className="mt-2 text-3xl font-black text-slate-800">Pick your grade</h1>
          </div>
          <button
            type="button"
            onClick={() => navigate('/progress')}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Progress
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {grades.map((grade) => (
            <Card
              key={grade.id}
              onClick={() => navigate(`/grade/${grade.id}`)}
              className={`cursor-pointer overflow-hidden bg-gradient-to-br ${grade.accent} p-0`}
            >
              <div className="flex min-h-[220px] flex-col justify-between bg-white/15 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{grade.emoji}</span>
                  <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700">Level {grade.id}</span>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-800">{grade.title}</h2>
                  <p className="mt-1 text-sm font-medium text-slate-700">{grade.tagline}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
