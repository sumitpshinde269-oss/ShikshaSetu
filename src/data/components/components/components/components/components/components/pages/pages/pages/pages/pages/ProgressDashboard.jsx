import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userProgress, grades, chapters } from '../../../../../../../../../../../mockData';
import Card from '../../../../../../../../../Card';
import ProgressBar from '../../../../../../../../ProgressBar';
import Badge from '../../../../../Badge';

// Page 6: Progress Dashboard
// Shows progress, badges, and streaks
const ProgressDashboard = () => {
  const navigate = useNavigate();

  // Calculate overall progress
  const totalChapters = Object.values(chapters).flat().length;
  const completedLessons = userProgress.completedLessons.length;
  
  // Mock chapter completion - in real app, calculate from actual progress
  const chapterProgress = 45; // percentage

  return (
    <div className="container-mobile min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button 
          onClick={() => navigate('/')}
          className="text-2xl p-2 hover:bg-gray-100 rounded-full"
        >
          ←
        </button>
        <h1 className="text-2xl font-bold text-gray-800">📊 My Progress</h1>
      </div>

      {/* Overall Progress */}
      <Card className="p-6 bg-gradient-to-r from-math-primary/20 to-math-secondary/20">
        <h3 className="font-bold text-gray-800 text-lg">Overall Progress</h3>
        <ProgressBar 
          progress={chapterProgress}
          height="h-5"
          color="bg-math-primary"
          showLabel={true}
          labelText="Chapters Completed"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>📚 {completedLessons} lessons completed</span>
          <span>⭐ {userProgress.totalPoints} points</span>
        </div>
      </Card>

      {/* Streak */}
      <Card className="mt-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <div>
              <p className="font-bold text-gray-800">Streak</p>
              <p className="text-sm text-gray-500">Keep going!</p>
            </div>
          </div>
          <span className="text-3xl font-bold text-math-primary">{userProgress.streak} days</span>
        </div>
      </Card>

      {/* Badges */}
      <Card className="mt-4 p-4">
        <h3 className="font-bold text-gray-800 mb-3">🏅 Achievements</h3>
        <div className="flex flex-wrap gap-2">
          {userProgress.badges.map((badge, index) => (
            <Badge key={index} variant="completed" className="text-sm">
              {badge}
            </Badge>
          ))}
          {userProgress.badges.length === 0 && (
            <p className="text-gray-500 text-sm">No badges yet. Keep learning!</p>
          )}
        </div>
      </Card>

      {/* Grade Progress */}
      <div className="mt-4 space-y-3">
        <h3 className="font-bold text-gray-800">📖 Grade Progress</h3>
        {grades.slice(0, 3).map((grade) => (
          <Card key={grade.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{grade.icon}</span>
                <span className="font-bold text-gray-800">{grade.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {Math.floor(Math.random() * 60) + 20}% complete
              </span>
            </div>
            <ProgressBar 
              progress={Math.floor(Math.random() * 60) + 20}
              height="h-2"
              showLabel={false}
            />
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <Card 
          className="p-4 text-center cursor-pointer bg-math-primary/10"
          onClick={() => navigate('/')}
        >
          <div className="text-3xl">📚</div>
          <p className="text-sm font-bold text-gray-700">Continue Learning</p>
        </Card>
        <Card 
          className="p-4 text-center cursor-pointer bg-math-secondary/10"
          onClick={() => navigate('/dashboard')}
        >
          <div className="text-3xl">🏆</div>
          <p className="text-sm font-bold text-gray-700">Refresh Stats</p>
        </Card>
      </div>
    </div>
  );
};

export default ProgressDashboard;
