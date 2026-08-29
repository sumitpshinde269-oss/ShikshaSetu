import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chapters, grades } from '../../../../../../../mockData';
import Card from '../../../../../Card';

// Page 2: Subject Home (Maths only for now)
// Shows Maths as the only subject card with chapter list
const SubjectHome = () => {
  const { gradeId } = useParams();
  const navigate = useNavigate();

  // Find grade name
  const grade = grades.find(g => g.id === parseInt(gradeId));
  const gradeChapters = chapters[gradeId] || [];

  const handleChapterSelect = (chapterId) => {
    navigate(`/chapter/${chapterId}`);
  };

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
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {grade?.name || 'Grade'} Maths
          </h1>
          <p className="text-sm text-gray-500">Choose a chapter to start</p>
        </div>
      </div>

      {/* Subject Card (Maths) */}
      <Card className="bg-gradient-to-r from-math-primary/20 to-math-secondary/20 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="text-5xl">📐</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Mathematics</h2>
            <p className="text-gray-600">Let's learn maths!</p>
          </div>
        </div>
      </Card>

      {/* Chapter List */}
      <div className="space-y-3">
        {gradeChapters.map((chapter) => (
          <Card
            key={chapter.id}
            className="flex items-center gap-4 p-4 cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleChapterSelect(chapter.id)}
          >
            <div className="text-4xl">{chapter.icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">{chapter.title}</h3>
              <p className="text-sm text-gray-500">{chapter.description}</p>
            </div>
            <div className="text-2xl text-gray-400">›</div>
          </Card>
        ))}
      </div>

      {/* Progress Overview */}
      <Card className="mt-6 p-4 bg-math-accent/20">
        <div className="text-sm text-gray-600">
          <span className="font-bold">📊 Progress:</span> 1 of {gradeChapters.length} chapters completed
        </div>
      </Card>
    </div>
  );
};

export default SubjectHome;