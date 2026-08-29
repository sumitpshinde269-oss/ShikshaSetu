import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { getQuizForLesson } from '../data/mockData';

export default function QuizScreenPage() {
  const { lessonId, gradeId, subjectId, chapterId } = useParams();
  const questions = useMemo(() => getQuizForLesson(lessonId), [lessonId]);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const question = questions[currentIndex];

  const handleAnswer = (optionIndex) => {
    setSelected(optionIndex);
    if (optionIndex === question.correct) {
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

  if (!question) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <Card className="max-w-md text-center">
          <h2 className="text-2xl font-black text-slate-800">No quiz yet</h2>
          <p className="mt-2 text-slate-600">This lesson is still being built. Try another one.</p>
          <Button className="mt-5" onClick={() => navigate(`/chapter/${gradeId}/${subjectId}`)}>Back to chapter</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-500">Quiz</p>
            <h1 className="mt-2 text-3xl font-black text-slate-800">Check your skills</h1>
          </div>
          <span className="rounded-full bg-rose-100 px-3 py-2 text-sm font-bold text-rose-600">{currentIndex + 1}/{questions.length}</span>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-black text-slate-800">{question.question}</h2>

          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correct;
              const isSelected = index === selected;

              let optionClasses = 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50';
              if (selected !== null && isCorrect) optionClasses = 'border-emerald-400 bg-emerald-50 text-emerald-700';
              if (selected !== null && isSelected && !isCorrect) optionClasses = 'border-rose-400 bg-rose-50 text-rose-700';

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left text-base font-semibold transition ${optionClasses}`}
                >
                  <span>{option}</span>
                  {selected !== null && isCorrect && <span>✅</span>}
                  {selected !== null && isSelected && !isCorrect && <span>❌</span>}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-6 rounded-2xl bg-slate-100 p-4">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Why?</p>
              <p className="mt-2 text-base text-slate-700">{question.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button variant="secondary" onClick={() => navigate(`/lesson/${gradeId}/${subjectId}/${chapterId}/${lessonId}`)}>Back to lesson</Button>
            <Button onClick={handleNext}>{currentIndex === questions.length - 1 ? 'Finish' : 'Next question'}</Button>
          </div>
        </Card>

        <div className="mt-5 rounded-[26px] bg-gradient-to-r from-amber-100 to-yellow-50 p-4 text-slate-700">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">Score</p>
          <p className="mt-1 text-2xl font-black">{score} / {questions.length}</p>
        </div>
      </div>
    </div>
  );
}
