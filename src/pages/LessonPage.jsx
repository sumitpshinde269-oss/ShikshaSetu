import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { getLessonContent } from '../data/mockData';

// Lesson page flow:
// 1) Back to previous screen
// 2) Watch the lesson video
// 3) Review quick notes
// 4) Unlock the quiz only after the video finishes

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = getLessonContent(lessonId);
  const [quizUnlocked, setQuizUnlocked] = useState(false);

  // The quiz is disabled until the HTML5 video ends.
  const handleVideoEnded = () => {
    setQuizUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md sm:max-w-2xl">
        <header className="mb-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 text-sm font-medium text-slate-700"
          >
            <span aria-hidden="true">←</span>
            Back
          </button>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            Lesson
          </span>
        </header>

        <main className="space-y-5">
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{lesson.title}</h1>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <video
              className="block aspect-video w-full bg-slate-900"
              controls
              preload="metadata"
              onEnded={handleVideoEnded}
            >
              <source src={lesson.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Notes</h2>
            <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
              {lesson.notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="pb-2">
            <Button
              type="button"
              className="w-full"
              onClick={() => navigate(`/quiz/${lessonId}`)}
              variant={quizUnlocked ? 'primary' : 'secondary'}
              disabled={!quizUnlocked}
            >
              {quizUnlocked ? 'Take Quiz' : 'Watch video to unlock quiz'}
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
