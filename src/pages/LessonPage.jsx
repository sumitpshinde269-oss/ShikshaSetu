import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import LanguageToggle from '../components/LanguageToggle';
import { getStoredLanguage, setStoredLanguage, translations } from '../data/i18n';
import { getLessonContent } from '../data/mockData';

const LAST_LESSON_KEY = 'shiksha-last-lesson';

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(getStoredLanguage());
  const [quizUnlocked, setQuizUnlocked] = useState(false);

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  useEffect(() => {
    if (lessonId && typeof window !== 'undefined') {
      window.localStorage.setItem(LAST_LESSON_KEY, lessonId);
    }
  }, [lessonId]);

  const lesson = getLessonContent(lessonId);
  const t = translations[language].lesson;

  if (!lessonId || !lesson || !lesson.id) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">{t.noLesson}</h2>
          <p className="mt-2 text-sm text-slate-600">{t.noLessonMessage}</p>
          <Button className="mt-5" onClick={() => navigate('/home')}>{t.backHome}</Button>
        </div>
      </div>
    );
  }

  const lessonTitle = language === 'hi' && lesson.titleHi ? lesson.titleHi : lesson.title;
  const notes = language === 'hi' && lesson.notesHi ? lesson.notesHi : lesson.notes;
  const hasVideo = Boolean(lesson.videoUrl && lesson.videoUrl.trim());

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
            {t.back}
          </button>
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              {t.lesson}
            </span>
          </div>
        </header>

        <main className="space-y-5">
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{lessonTitle}</h1>
          </section>

          {!hasVideo ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{t.noVideo}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.noVideoMessage}</p>
              <Button className="mt-5" onClick={() => navigate('/home')}>{t.backHome}</Button>
            </div>
          ) : (
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <video
                className="block aspect-video w-full bg-slate-900"
                controls
                preload="metadata"
                onEnded={handleVideoEnded}
              >
                <source src={lesson.videoUrl} type="video/mp4" />
                {t.videoUnavailable}
              </video>
            </section>
          )}

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{t.notes}</h2>
            <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
              {notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {hasVideo && (
            <div className="pb-2">
              <Button
                type="button"
                className="w-full"
                onClick={() => navigate(`/quiz/${lessonId}`)}
                variant={quizUnlocked ? 'primary' : 'secondary'}
                disabled={!quizUnlocked}
              >
                {quizUnlocked ? t.takeQuiz : t.watchToUnlock}
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
