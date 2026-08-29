import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GradeSelectionPage from './pages/GradeSelectionPage';
import SubjectHomePage from './pages/SubjectHomePage';
import ChapterListPage from './pages/ChapterListPage';
import LessonPlayerPage from './pages/LessonPlayerPage';
import QuizScreenPage from './pages/QuizScreenPage';
import ProgressDashboardPage from './pages/ProgressDashboardPage';

// Workflow algorithm for student navigation:
// [Login] -> [Grade Selection] -> [Subject Home] -> [Chapter List] -> [Lesson Player] -> [Quiz Screen] -> [Progress Dashboard]
//
// 1) Student opens the app and logs in on the Login page.
// 2) The app shows all available grade cards; the student selects a grade.
// 3) Based on the chosen grade, the app loads a subject list and the student picks a subject.
// 4) The app loads chapter cards for that subject; the student picks one chapter.
// 5) Inside the selected chapter, the student opens a lesson video/player screen.
// 6) After the lesson, the student completes a short quiz for that lesson.
// 7) On successful quiz completion, the student is routed to the progress dashboard to review streaks, stars, badges, and next goals.
//
// This creates a clear, kid-friendly learning loop:
// Login -> Grade -> Subject -> Chapter -> Lesson -> Quiz -> Progress -> Continue learning

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
