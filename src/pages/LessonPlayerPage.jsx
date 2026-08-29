import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { getQuizForLesson } from '../data/mockData';

export default function LessonPlayerPage() {
  const { gradeId, subjectId, chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  const quiz = getQuizForLesson(lessonId);

  return (
    <div className="min-h-screen px-5 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Lesson</p>
            <h1 className="mt-2 text-3xl font-black text-slate-800">{lessonId.replace(/-/g, ' ')}</h1>
          </div>
          <Button variant="secondary" onClick={() => navigate(`/chapter/${gradeId}/${subjectId}`)}>Back</Button>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-violet-500 p-5 text-white">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide">Video lesson</span>
              <span className="text-sm font-semibold">6 min</span>
            </div>
            <h2 className="mt-4 text-2xl font-black">Let’s learn together</h2>
          </div>

          <div className="p-5">
            <div className="mb-5 flex aspect-video items-center justify-center rounded-[28px] bg-gradient-to-br from-slate-100 to-sky-100 text-6xl shadow-inner">
              🎬
            </div>

            <div className="mb-5 flex flex-wrap gap-3">
              {['Warm up', 'Watch', 'Practice', 'Review'].map((step) => (
                <span key={step} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">{step}</span>
              ))}
            </div>

            <p className="mb-6 text-base text-slate-600">
              Explore the idea step by step, then try a quick challenge. The goal is to understand the concept and build confidence.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="flex-1" onClick={() => navigate(`/quiz/${gradeId}/${subjectId}/${chapterId}/${lessonId}`)}>Take quiz</Button>
              <Button variant="secondary" className="flex-1" onClick={() => navigate('/progress')}>View progress</Button>
            </div>
          </div>
        </Card>

        <div className="mt-6 rounded-[28px] bg-slate-50 p-5">
          <h3 className="text-lg font-black text-slate-800">Quick recap</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {quiz.length > 0 ? quiz.slice(0, 3).map((item) => (
              <li key={item.id} className="rounded-2xl bg-white p-3">• {item.question}</li>
            )) : <li className="rounded-2xl bg-white p-3">• Practice questions will appear when the lesson is unlocked.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
