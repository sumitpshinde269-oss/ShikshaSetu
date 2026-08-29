import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { getLessonContent } from '../data/mockData';

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = getLessonContent(lessonId);

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Lesson</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{lesson.title}</h1>
          </div>
          <Button variant="secondary" onClick={() => navigate('/home')}>Back</Button>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{lesson.duration}</span>
              <span className="text-sm text-slate-500">Video lesson</span>
            </div>

            <div className="flex aspect-video items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-5xl text-slate-400">
              ▶
            </div>

            <div className="mt-5">
              <h2 className="text-xl font-semibold text-slate-900">{lesson.videoTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{lesson.summary}</p>
            </div>
          </section>

          <aside className="space-y-6">
            <Card className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Key notes</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {lesson.notes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900"></span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex flex-col gap-3">
              <Button className="w-full" onClick={() => navigate(`/quiz/${lessonId}`)}>Take quiz</Button>
              <Button variant="secondary" className="w-full" onClick={() => navigate('/progress')}>View progress</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
