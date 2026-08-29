import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getChapterById, getLessonsByChapter } from '../../../../../../../../mockData';
import Card from '../../../../../../Card';
import Badge from '../../Badge';
import Button from '../../../../../../../Button';

// Page 3: Chapter/Lesson List Screen
// Shows all lessons within a chapter with status indicators
const ChapterList = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const chapter = getChapterById(chapterId);
  const lessonList = getLessonsByChapter(chapterId);

  // Status icons and labels for lessons
  const getStatusInfo = (status) => {
    const statusMap = {
      completed: { label: 'Completed', icon: '✅', variant: 'completed' },
      'in-progress': { label: 'In Progress', icon: '🔄', variant: 'inprogress' },
      locked: { label: 'Locked', icon: '🔒', variant: 'locked' }
    };
    return statusMap[status] || statusMap.locked;
  };

  const handleLessonClick = (lessonId, status) => {
    if (status !== 'locked') {
      navigate(`/lesson/${lessonId}`);
    }
  };

  return (
    <div className="container-mobile min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-2xl p-2 hover:bg-gray-100 rounded-full"
        >
          ←
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{chapter?.title || 'Chapter'}</h1>
          <p className="text-sm text-gray-500">{chapter?.description || ''}</p>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-3">
        {lessonList.map((lesson) => {
          const statusInfo = getStatusInfo(lesson.status);
          const isLocked = lesson.status === 'locked';
          
          return (
            <Card
              key={lesson.id}
              className={`lesson-card ${isLocked ? 'opacity-60' : 'cursor-pointer'}`}
              onClick={() => handleLessonClick(lesson.id, lesson.status)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-800">{lesson.title}</h3>
                    <Badge variant={statusInfo.variant} icon={statusInfo.icon}>
                      {statusInfo.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{lesson.description}</p>
                </div>
                {!isLocked && (
                  <Button 
                    variant="primary" 
                    className="text-sm py-1 px-4"
                  >
                    Watch
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Progress */}
      <Card className="mt-6 p-4 bg-math-secondary/10">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            📖 {lessonList.filter(l => l.status === 'completed').length} of {lessonList.length} completed
          </span>
          <span className="text-sm font-bold text-math-secondary">
            {Math.round((lessonList.filter(l => l.status === 'completed').length / lessonList.length) * 100)}%
          </span>
        </div>
      </Card>
    </div>
  );
};

export default ChapterList;