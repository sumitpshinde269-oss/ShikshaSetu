import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';

// Student workflow algorithm:
// Login/Signup -> Home (grade + chapter selection) -> Lesson (video + notes + quiz access) -> Quiz -> Progress
//
// 1) User opens the app and signs in or creates an account.
// 2) On the Home page, the student selects a grade and chapter in one streamlined view.
// 3) The student opens the Lesson screen to view content, notes, and continue to the assessment.
// 4) The lesson leads directly to the Quiz screen for evaluation.
// 5) After completion, the student reaches the Progress dashboard to review outcomes and next steps.

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/quiz/:lessonId" element={<QuizPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
