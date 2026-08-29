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

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (optionIndex) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      return;
    }
    navigate('/progress');
  };

  if (!currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <Card className="max-w-md text-center p-6">
          <h2 className="text-2xl font-bold text-slate-900">No quiz available</h2>
          <p className="mt-2 text-sm text-slate-600">This lesson does not have an assessment yet.</p>
          <Button className="mt-5" onClick={() => navigate('/home')}>Return home</Button>
        </Card>
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
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{currentIndex + 1}/{questions.length}</span>
        </header>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-slate-900">{currentQuestion.question}</h2>

          <div className="mt-5 space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correct;
              const isSelected = index === selected;

              let classes = 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300';
              if (selected !== null && isCorrect) classes = 'border-emerald-500 bg-emerald-50 text-emerald-700';
              if (selected !== null && isSelected && !isCorrect) classes = 'border-rose-500 bg-rose-50 text-rose-700';

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-sm font-medium transition ${classes}`}
                >
                  <span>{option}</span>
                  {selected !== null && isCorrect && <span>✓</span>}
                  {selected !== null && isSelected && !isCorrect && <span>✕</span>}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-5 rounded-xl bg-slate-100 p-3 text-sm text-slate-700">
              {currentQuestion.explanation}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button variant="secondary" onClick={() => navigate(`/lesson/${lessonId}`)}>Back</Button>
            <Button onClick={handleNext} disabled={selected === null}>{currentIndex === questions.length - 1 ? 'Finish' : 'Next'}</Button>
          </div>
        </Card>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Score</p>
          <div className="mt-2 text-2xl font-bold text-slate-900">{score}/{questions.length}</div>
        </div>
      </div>
    </div>
  );
}
