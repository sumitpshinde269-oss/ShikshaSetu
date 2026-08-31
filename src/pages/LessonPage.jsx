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
  const [doubt, setDoubt] = useState('');
  const [answer, setAnswer] = useState('');
  const [teachExplanation, setTeachExplanation] = useState('');
  const [teachFeedback, setTeachFeedback] = useState('');
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  useEffect(() => {
    if (lessonId && typeof window !== 'undefined') {
      window.localStorage.setItem(LAST_LESSON_KEY, lessonId);
    }
  }, [lessonId]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const lesson = getLessonContent(lessonId);
  const t = translations[language].lesson;
  const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

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

  const handleGetAnswer = () => {
    const cleanDoubt = doubt.trim();
    if (!cleanDoubt) {
      setAnswer(language === 'hi' ? 'कृपया अपना संदेह लिखें।' : 'Please type your doubt first.');
      return;
    }

    const response = language === 'hi'
      ? `इस विषय में, ${cleanDoubt} को समझने के लिए सबसे पहले मूल नियम देखें और एक उदाहरण के साथ अभ्यास करें।`
      : `For this topic, start by reviewing the key rule behind "${cleanDoubt}" and then try one example to check your understanding.`;

    setAnswer(response);
  };

  const handleReadAloud = () => {
    if (!speechSupported) {
      return;
    }

    const noteText = notes.join(' ');
    if (!noteText.trim()) {
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(noteText);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsReading(true);
  };

  const handleTeachSubmit = () => {
    const cleanExplanation = teachExplanation.trim();
    if (!cleanExplanation) {
      setTeachFeedback(language === 'hi' ? 'कृपया पहले इस अवधारणा को अपने शब्दों में समझाइए।' : 'Please explain the concept in your own words first.');
      return;
    }

    setTeachFeedback(language === 'hi'
      ? 'बहुत अच्छा! आप अवधारणा को स्पष्ट रूप से समझा रहे हैं और इसे अपनी समझ से जोड़ रहे हैं।'
      : 'Nice work! You are starting to explain the idea clearly and connect the key concept to your own understanding.');
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
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">{t.notes}</h2>
              <Button
                type="button"
                variant={isReading ? 'primary' : 'muted'}
                onClick={handleReadAloud}
                disabled={!speechSupported}
                className="shrink-0"
              >
                {isReading ? t.stopReading : t.readAloud}
              </Button>
            </div>
            <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
              {notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{t.teachItBack}</h2>
            <div className="mt-3 space-y-3">
              <textarea
                value={teachExplanation}
                onChange={(event) => setTeachExplanation(event.target.value)}
                rows="3"
                placeholder={t.teachPlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
              />
              <Button type="button" className="w-full" onClick={handleTeachSubmit}>
                {t.submit}
              </Button>

              {teachFeedback && (
                <div className="rounded-xl border border-slate-200 bg-emerald-50 p-3 text-sm leading-6 text-emerald-800">
                  <p>{teachFeedback}</p>
                </div>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{language === 'hi' ? 'संदेह पूछें' : 'Ask a Doubt'}</h2>
            <div className="mt-3 space-y-3">
              <textarea
                value={doubt}
                onChange={(event) => setDoubt(event.target.value)}
                rows="3"
                placeholder={language === 'hi' ? 'अपना सवाल लिखें...' : 'Write your doubt here...'}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
              />
              <Button type="button" className="w-full" onClick={handleGetAnswer}>
                {language === 'hi' ? 'उत्तर लें' : 'Get Answer'}
              </Button>

              {answer && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                  <p className="font-medium text-slate-900">{language === 'hi' ? 'उत्तर:' : 'Answer:'}</p>
                  <p className="mt-1">{answer}</p>
                </div>
              )}
            </div>
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
