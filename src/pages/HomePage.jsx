import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import LanguageToggle from '../components/LanguageToggle';
import { getStoredLanguage, setStoredLanguage, translations } from '../data/i18n';
import { getGradeById, getLessonContent, getLessonsForGrade, grades } from '../data/mockData';

const LAST_LESSON_KEY = 'shiksha-last-lesson';

export default function HomePage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(getStoredLanguage());
  const [selectedGrade, setSelectedGrade] = useState('grade-6');
  const [searchTerm, setSearchTerm] = useState('');
  const activeGrade = getGradeById(selectedGrade);
  const lessons = getLessonsForGrade(selectedGrade);
  const filteredLessons = lessons.filter((lesson) => {
    const lessonTitle = language === 'hi' && lesson.titleHi ? lesson.titleHi : lesson.title;
    return lessonTitle.toLowerCase().includes(searchTerm.trim().toLowerCase());
  });
  const [lastLessonId, setLastLessonId] = useState(() => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(LAST_LESSON_KEY);
  });

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setLastLessonId(window.localStorage.getItem(LAST_LESSON_KEY));
  }, [selectedGrade]);

  const t = translations[language].home;
  const lastLesson = lastLessonId ? getLessonContent(lastLessonId) : null;

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{t.dashboard}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{t.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <Button variant="secondary" onClick={() => navigate('/progress')}>{t.progress}</Button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4">
              <p className="text-sm font-medium text-slate-500">{t.grade}</p>
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
                  <p className="text-sm font-medium text-slate-500">{t.currentTrack}</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{activeGrade.name}</h2>
                </div>
                <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">{activeGrade.track}</div>
              </div>
            </div>

            {lastLesson && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{t.continueTitle}</p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-900">{language === 'hi' ? lastLesson.titleHi : lastLesson.title}</h3>
                  </div>
                  <Button variant="secondary" onClick={() => navigate(`/lesson/${lastLesson.id}`)}>{t.resume}</Button>
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">{t.subject}</p>
                  <h3 className="text-xl font-semibold text-slate-900">Mathematics</h3>
                </div>
                <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">Algebra</div>
              </div>

              <div className="mb-5">
                <p className="text-sm font-medium text-slate-500">{t.chapter}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{activeGrade.name} · Algebra Foundations</h3>
              </div>

              <div className="mb-5">
                <label htmlFor="lesson-search" className="mb-2 block text-sm font-medium text-slate-700">
                  Search lessons
                </label>
                <input
                  id="lesson-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by lesson name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </div>

              {lessons.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <p className="text-base font-medium text-slate-700">{t.noLessons}</p>
                </div>
              ) : filteredLessons.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <p className="text-base font-medium text-slate-700">No lessons match your search.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredLessons.map((lesson) => (
                    <Card key={lesson.id} onClick={() => navigate(`/lesson/${lesson.id}`)} className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-base font-semibold text-slate-900">{language === 'hi' && lesson.titleHi ? lesson.titleHi : lesson.title}</div>
                        <div className="mt-1 text-sm text-slate-500">{lesson.duration} · {lesson.level}</div>
                      </div>
                      <Button className="bg-blue-600 text-white hover:bg-blue-700">{t.open}</Button>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
