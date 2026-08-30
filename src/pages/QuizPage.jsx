import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { getQuizForLesson } from '../data/mockData';

export default function QuizPage() {
  const { lessonId } = useParams();
  const questions = useMemo(() => getQuizForLesson(lessonId), [lessonId]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isCorrectAnswer = selected !== null && selected === currentQuestion?.correct;

  const handleAnswer = (optionIndex) => {
    if (selected !== null || !currentQuestion) return;

    setSelected(optionIndex);

    if (optionIndex === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (selected === null) return;

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      return;
    }

    setIsFinished(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setIsFinished(false);
  };

  if (!currentQuestion && !isFinished) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <Card className="max-w-md p-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">No quiz available</h2>
          <p className="mt-2 text-sm text-slate-600">This lesson does not have an assessment yet.</p>
          <Button className="mt-5" onClick={() => navigate('/home')}>Return home</Button>
        </Card>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-8">
        <div className="w-full max-w-2xl">
          <Card className="p-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
              {score === questions.length ? '★' : percentage >= 70 ? '✓' : '🎯'}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Assessment complete</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{score}/{questions.length}</h2>
            <p className="mt-2 text-lg text-slate-600">You scored {percentage}% on this quiz.</p>

            <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-left">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>Performance</span>
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
              <Button variant="secondary" onClick={() => handleRestart()}>Try again</Button>
              <Button onClick={() => navigate('/progress')}>Continue</Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Assessment</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Quiz</h1>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            {currentIndex + 1}/{questions.length}
          </span>
        </header>

        <Card className="p-6">
          <div className="mb-5 flex items-center justify-between gap-3 text-sm text-slate-500">
            <span>Question {currentIndex + 1}</span>
            <span>{score} point{score === 1 ? '' : 's'}</span>
          </div>

          <h2 className="text-2xl font-semibold leading-snug text-slate-900">{currentQuestion.question}</h2>

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
                  className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-sm font-medium transition disabled:cursor-default ${classes}`}
                >
                  <span>{option}</span>
                  {showFeedback && isCorrect && <span className="text-lg font-bold">✓</span>}
                  {showFeedback && isSelected && !isCorrect && <span className="text-lg font-bold">✕</span>}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className={`text-sm font-semibold ${isCorrectAnswer ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isCorrectAnswer ? 'Correct answer' : 'Not quite'}
              </p>
              <p className="mt-1 text-sm text-slate-700">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button variant="secondary" onClick={() => navigate(`/lesson/${lessonId}`)}>Back</Button>
            <Button onClick={handleNext} disabled={selected === null}>
              {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
