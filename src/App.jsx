import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GradeSelectionPage from './pages/GradeSelectionPage';
import SubjectHomePage from './pages/SubjectHomePage';
import ChapterListPage from './pages/ChapterListPage';
import LessonPlayerPage from './pages/LessonPlayerPage';
import QuizScreenPage from './pages/QuizScreenPage';
import ProgressDashboardPage from './pages/ProgressDashboardPage';

// Student workflow algorithm:
// 1) LoginPage: student signs in and chooses a profile avatar.
// 2) GradeSelectionPage: student picks a grade level.
// 3) SubjectHomePage: student chooses a subject for the selected grade.
// 4) ChapterListPage: student picks a chapter inside that subject.
// 5) LessonPlayerPage: student watches a lesson and completes practice steps.
// 6) QuizScreenPage: student answers quiz questions and earns stars.
// 7) ProgressDashboardPage: student reviews progress, streaks, badges, and next goals.
// End-to-end path: Login -> Grade -> Subject -> Chapter -> Lesson -> Quiz -> Progress

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/grade-selection" element={<GradeSelectionPage />} />
        <Route path="/grade/:gradeId" element={<SubjectHomePage />} />
        <Route path="/chapter/:gradeId/:subjectId" element={<ChapterListPage />} />
        <Route path="/lesson/:gradeId/:subjectId/:chapterId/:lessonId" element={<LessonPlayerPage />} />
        <Route path="/quiz/:gradeId/:subjectId/:chapterId/:lessonId" element={<QuizScreenPage />} />
        <Route path="/progress" element={<ProgressDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
