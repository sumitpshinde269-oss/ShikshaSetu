import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import GradeSelection from './pages/GradeSelection';
import SubjectHome from './pages/SubjectHome';
import ChapterList from './pages/ChapterList';
import LessonPlayer from './pages/LessonPlayer';
import QuizScreen from './pages/QuizScreen';
import ProgressDashboard from './pages/ProgressDashboard';
import LoginSignup from './pages/LoginSignup';

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<GradeSelection />} />
        <Route path="/login" element={<LoginSignup />} />
        
        {/* Protected routes (will require auth later) */}
        <Route path="/grade/:gradeId" element={<SubjectHome />} />
        <Route path="/chapter/:chapterId" element={<ChapterList />} />
        <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
        <Route path="/quiz/:lessonId" element={<QuizScreen />} />
        <Route path="/dashboard" element={<ProgressDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;