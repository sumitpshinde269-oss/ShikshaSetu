import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import GradeSelection from '../../../../../../../../../../../../../pages/GradeSelection';
import SubjectHome from '../../../../../SubjectHome';
import ChapterList from '../../../../ChapterList';
import LessonPlayer from '../../../LessonPlayer';
import QuizScreen from '../../QuizScreen';
import ProgressDashboard from '../ProgressDashboard';
import LoginSignup from './LoginSignup';

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