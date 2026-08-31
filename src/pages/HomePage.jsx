import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { grades, getGradeById, getLessonsForGrade } from '../data/mockData';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState('grade-6');
  const activeGrade = getGradeById(selectedGrade);
  const lessons = getLessonsForGrade(selectedGrade);

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Learning home</h1>
          </div>
          <Button variant="secondary" onClick={() => navigate('/progress')}>Progress</Button>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4">
              <p className="text-sm font-medium text-slate-500">Grade</p>
            </div>
            <div className="space-y-3">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`w-full rounded-xl border p-3 text-left transition ${selectedGrade === grade.id ? 'border-blue-600 bg-blue-600 text-white shadow-sm' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'}`}
                >
                  <div className="text-base font-semibold">{grade.name}</div>
                  <div className={`mt-1 text-xs ${selectedGrade === grade.id ? 'text-blue-100' : 'text-slate-500'}`}>{grade.track}</div>
                </button>
              ))}
            </div>
          </aside>

          <main className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Current track</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{activeGrade.name}</h2>
                </div>
                <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">{activeGrade.track}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">Subject</p>
                  <h3 className="text-xl font-semibold text-slate-900">Mathematics</h3>
                </div>
                <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">Algebra</div>
              </div>

              <div className="mb-5">
                <p className="text-sm font-medium text-slate-500">Chapter</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{activeGrade.name} · Algebra Foundations</h3>
              </div>

              <div className="space-y-3">
                {lessons.map((lesson) => (
                  <Card key={lesson.id} onClick={() => navigate(`/lesson/${lesson.id}`)} className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-slate-900">{lesson.title}</div>
                      <div className="mt-1 text-sm text-slate-500">{lesson.duration} · {lesson.level}</div>
                    </div>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">Open</Button>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
