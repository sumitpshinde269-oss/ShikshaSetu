import React from 'react';
import { useNavigate } from 'react-router-dom';
import { grades } from '../data/mockData';
import Card from '../components/Card';

// Page 1: Grade Selection Screen
// Shows all grades 2-8 as large tappable cards
const GradeSelection = () => {
  const navigate = useNavigate();

  const handleGradeSelect = (gradeId) => {
    // Navigate to subject home for the selected grade
    navigate(`/grade/${gradeId}`);
  };

  return (
    <div className="container-mobile min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-math-primary">
          📚 Maths Fun!
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Choose your grade
        </p>
      </div>

      {/* Grade Grid */}
      <div className="grid grid-cols-2 gap-4">
        {grades.map((grade) => (
          <Card
            key={grade.id}
            className={`grade-card bg-gradient-to-br ${grade.color}`}
            onClick={() => handleGradeSelect(grade.id)}
          >
            <div className="text-5xl mb-2">{grade.icon}</div>
            <div className="text-2xl font-bold text-gray-800">{grade.name}</div>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation Hint */}
      <div className="mt-8 text-center text-sm text-gray-400">
        Tap a grade to start learning!
      </div>
    </div>
  );
};

export default GradeSelection;