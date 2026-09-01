import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import LanguageToggle from '../components/LanguageToggle';
import { getStoredLanguage, setStoredLanguage, translations } from '../data/i18n';
import { getEasierPracticeForLesson, getQuizForLesson } from '../data/mockData';

const WEAK_AREAS_KEY = 'shiksha-weak-areas';
const topicMap = {
  'algebra-foundations': 'Algebra Basics',
  'linear-equations': 'Equations',
  'patterns': 'Patterns',
  'expressions': 'Expressions',
};

export default function QuizPage() {
  const { lessonId } = useParams();
  const [language, setLanguage] = useState(getStoredLanguage());
  const questions = useMemo(() => getQuizForLesson(lessonId), [lessonId]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [followUpQuestion, setFollowUpQuestion] = useState(null);
  const [followUpSelected, setFollowUpSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  const currentQuestion = questions[currentIndex];
  const isCorrectAnswer = selected !== null && selected === currentQuestion?.correct;
  const needsFollowUp = selected !== null && selected !== currentQuestion?.correct && !!followUpQuestion && followUpSelected === null;
  const t = translations[language].quiz;

  const handleAnswer = (optionIndex) => {
    if (selected !== null || !currentQuestion) return;

    setSelected(optionIndex);

    if (optionIndex === currentQuestion.correct) {
      setScore((prev) => prev + 1);
      return;
    }

    const practiceQuestion = getEasierPracticeForLesson(lessonId);
    setFollowUpQuestion(practiceQuestion);
    setFollowUpSelected(null);
  };

  const handleNext = () => {
    if (selected === null) return;

    if (selected !== currentQuestion.correct && !followUpSelected) return;

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      setFollowUpQuestion(null);
      setFollowUpSelected(null);
      return;
    }

    const weakTopic = topicMap[lessonId] || 'Core concepts';
    const isWrong = selected !== currentQuestion.correct;

    if (isWrong && typeof window !== 'undefined') {
      const currentWeakAreas = JSON.parse(window.localStorage.getItem(WEAK_AREAS_KEY) || '[]');
      const nextWeakAreas = [...new Set([...currentWeakAreas, weakTopic])];
      window.localStorage.setItem(WEAK_AREAS_KEY, JSON.stringify(nextWeakAreas));
    }

    setIsFinished(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setFollowUpQuestion(null);
    setFollowUpSelected(null);
    setScore(0);
    setIsFinished(false);
  };

  if (!currentQuestion && !isFinished) {
    return (
      <div className="page-transition flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-950 sm:px-5">
        <Card className="w-full max-w-md p-4 text-center sm:p-6">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t.noQuiz}</h2>
          <p className="mt-2 text-sm text-slate-600">{t.noQuizMessage}</p>
          <Button className="mt-5" onClick={() => navigate('/home')}>{t.returnHome}</Button>
        </Card>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="page-transition flex min-h-screen items-center justify-center bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-5 sm:py-8">
        <div className="w-full max-w-2xl">
          <Card className="p-5 text-center sm:p-8">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
              {score === questions.length ? '★' : percentage >= 70 ? '✓' : '🎯'}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{t.assessmentComplete}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{score}/{questions.length}</h2>
            <p className="mt-2 text-base text-slate-600 sm:text-lg">{t.scored} {percentage}% {t.onThisQuiz}</p>

            <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-left">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>{t.performance}</span>
                <span className="font-semibold text-slate-800">{percentage}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-slate-900"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="secondary" className="w-full sm:w-auto" onClick={() => handleRestart()}>{t.tryAgain}</Button>
              <Button className="w-full sm:w-auto" onClick={() => navigate('/progress')}>{t.continue}</Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition min-h-screen bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-5 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-5 flex flex-col items-start gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{t.assessment}</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{t.title}</h1>
          </div>
          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start sm:gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              {currentIndex + 1}/{questions.length}
            </span>
          </div>
        </header>

        <Card className="p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500 sm:mb-5 sm:gap-3">
            <span>{t.question} {currentIndex + 1}</span>
            <span>{score} {t.points}</span>
          </div>

          <h2 className="break-words text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">{currentQuestion.question}</h2>

          <div className="mt-5 space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correct;
              const isSelected = index === selected;
              const showFeedback = selected !== null;

              let classes = 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100';

              if (showFeedback && isCorrect) {
                classes = 'border-emerald-500 bg-emerald-50 text-emerald-700';
              }

              if (showFeedback && isSelected && !isCorrect) {
                classes = 'border-rose-500 bg-rose-50 text-rose-700';
              }

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  disabled={selected !== null}
                  className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border p-3 text-left text-sm font-medium leading-5 transition disabled:cursor-default sm:p-3.5 ${classes}`}
                >
                  <span className="min-w-0 break-words">{option}</span>
                  {showFeedback && isCorrect && <span className="text-lg font-bold">✓</span>}
                  {showFeedback && isSelected && !isCorrect && <span className="text-lg font-bold">✕</span>}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className={`text-sm font-semibold ${isCorrectAnswer ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isCorrectAnswer ? t.correct : t.notQuite}
              </p>
              <p className="mt-1 text-sm text-slate-700">{currentQuestion.explanation}</p>
            </div>
          )}

          {followUpQuestion && selected !== null && selected !== currentQuestion.correct && (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Quick practice</p>
              <h3 className="mt-2 break-words text-lg font-semibold text-slate-900 sm:text-xl">{followUpQuestion.question}</h3>

              <div className="mt-4 space-y-3">
                {followUpQuestion.options.map((option, index) => {
                  const isCorrect = index === followUpQuestion.correct;
                  const isSelected = index === followUpSelected;
                  const showFeedback = followUpSelected !== null;

                  let classes = 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100';

                  if (showFeedback && isCorrect) {
                    classes = 'border-emerald-500 bg-emerald-50 text-emerald-700';
                  }

                  if (showFeedback && isSelected && !isCorrect) {
                    classes = 'border-rose-500 bg-rose-50 text-rose-700';
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFollowUpSelected(index)}
                      disabled={followUpSelected !== null}
                      className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border p-3 text-left text-sm font-medium leading-5 transition disabled:cursor-default sm:p-3.5 ${classes}`}
                    >
                      <span className="min-w-0 break-words">{option}</span>
                      {showFeedback && isCorrect && <span className="text-lg font-bold">✓</span>}
                      {showFeedback && isSelected && !isCorrect && <span className="text-lg font-bold">✕</span>}
                    </button>
                  );
                })}
              </div>

              {followUpSelected !== null && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Practice note:</span> {followUpQuestion.explanation}
                </div>
              )}
            </div>
          )}

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button variant="secondary" className="w-full sm:w-auto" onClick={() => navigate(`/lesson/${lessonId}`)}>{t.back}</Button>
            <Button className="w-full sm:w-auto" onClick={handleNext} disabled={selected === null || (selected !== currentQuestion.correct && followUpSelected === null)}>
              {currentIndex === questions.length - 1 ? t.finish : t.next}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
