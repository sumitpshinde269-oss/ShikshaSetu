import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizForLesson } from '../../../../../../../../../mockData';
import VideoPlayer from '../../../../VideoPlayer';
import Button from '../../../../../../../../Button';
import Card from '../../../../../../../Card';

// Page 4: Lesson Player Screen
// Shows video player with lesson content and "Take Quiz" button
const LessonPlayer = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  // Mock lesson data - in real app, fetch from API
  const lessonData = {
    id: lessonId,
    title: 'Counting 1-100',
    description: 'Learn to count from 1 to 100 with fun animations!',
    videoUrl: ''
  };

  const [showQuizButton, setShowQuizButton] = useState(false);
  const hasQuiz = getQuizForLesson(lessonId).length > 0;

  // Handle video completion - show quiz button
  const handleVideoComplete = () => {
    setShowQuizButton(true);
  };

  return (
    <div className="container-mobile min-h-screen pb-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-2xl p-2 hover:bg-gray-100 rounded-full"
        >
          ←
        </button>
        <h1 className="text-xl font-bold text-gray-800 truncate">
          {lessonData.title}
        </h1>
      </div>

      {/* Video Player */}
      <VideoPlayer 
        title={lessonData.title}
        videoUrl={lessonData.videoUrl}
      />

      {/* Lesson Notes */}
      <Card className="mt-4 p-4">
        <h3 className="font-bold text-lg text-gray-800">📝 Lesson Notes</h3>
        <p className="text-gray-600 mt-1 text-sm">
          {lessonData.description}
        </p>
        <div className="mt-3 p-3 bg-math-bg rounded-lg">
          <p className="text-sm text-gray-700">
            💡 Tip: Watch the video carefully and remember the key points!
          </p>
        </div>
      </Card>

      {/* Quiz Button */}
      {showQuizButton && hasQuiz && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t">
          <Button 
            variant="success" 
            className="w-full text-lg py-4"
            onClick={() => navigate(`/quiz/${lessonId}`)}
          >
            🎯 Take Quiz
          </Button>
        </div>
      )}

      {/* Mock Video Complete Button (for testing) */}
      {!showQuizButton && hasQuiz && (
        <div className="mt-4">
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={handleVideoComplete}
          >
            ✅ I've watched the video
          </Button>
        </div>
      )}

      {/* No quiz message */}
      {!hasQuiz && (
        <Card className="mt-4 p-4 bg-math-accent/20">
          <p className="text-center text-gray-600">
            📝 No quiz available for this lesson yet. Practice with the video!
          </p>
        </Card>
      )}
    </div>
  );
};

export default LessonPlayer;