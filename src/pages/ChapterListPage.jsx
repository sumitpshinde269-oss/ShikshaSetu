import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { getChaptersForSubject } from '../data/mockData';

export default function ChapterListPage() {
  const { gradeId, subjectId } = useParams();
  const chapters = getChaptersForSubject(gradeId, subjectId);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{subjectId}</p>
            <h1 className="mt-2 text-3xl font-black text-slate-800">Chapter library</h1>
          </div>
          <Button variant="secondary" onClick={() => navigate(`/grade/${gradeId}`)}>Back</Button>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <Card key={chapter.id} className="p-0">
              <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-3xl shadow-soft">{chapter.emoji}</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Chapter {index + 1}</p>
                    <h2 className="mt-1 text-xl font-black text-slate-800">{chapter.title}</h2>
                    <p className="mt-1 text-sm text-slate-600">{chapter.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {chapter.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => navigate(`/lesson/${gradeId}/${subjectId}/${chapter.id}/${lesson.id}`)}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                    >
                      {lesson.title}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
