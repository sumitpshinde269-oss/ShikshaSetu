import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { getGradeById, getSubjectsForGrade } from '../data/mockData';

export default function SubjectHomePage() {
  const { gradeId } = useParams();
  const grade = getGradeById(gradeId);
  const subjects = getSubjectsForGrade(gradeId);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Grade {grade.id}</p>
            <h1 className="mt-2 text-3xl font-black text-slate-800">{grade.title}</h1>
          </div>
          <Button variant="secondary" onClick={() => navigate('/grade-selection')}>Back</Button>
        </div>

        <div className="mb-6 rounded-[28px] bg-gradient-to-r from-violet-500 to-sky-500 p-6 text-white shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-100">Learning map</p>
          <h2 className="mt-2 text-2xl font-black">Choose a subject to begin</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
            <Card
              key={subject.id}
              onClick={() => navigate(`/chapter/${gradeId}/${subject.id}`)}
              className={`cursor-pointer overflow-hidden bg-gradient-to-br ${subject.accent} p-0`}
            >
              <div className="flex min-h-[220px] flex-col justify-between bg-white/15 p-5 text-slate-800 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{subject.emoji}</span>
                  <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700">Subject</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-800">{subject.name}</h3>
                  <p className="mt-2 text-sm text-slate-700">{subject.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
