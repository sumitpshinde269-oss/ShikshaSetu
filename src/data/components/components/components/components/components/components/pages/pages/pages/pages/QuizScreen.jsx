import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizForLesson } from '../data/mockData';
import QuizOption from '../components/QuizOption';
import Button from '../components/Button';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';

// Page 5: Quiz Screen
// Shows one question at a time with immediate feedback
const QuizScreen = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const questions = getQuizForLesson(lessonId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // Reset quiz state when lesson changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  }, [lessonId]);

  // Handle option selection
  const handleOptionSelect = (optionIndex) => {
    if (showFeedback) return; // Prevent changing answer after feedback
    
    setSelectedOption(optionIndex);
    setShowFeedback(true);

    const isCorrect = optionIndex === currentQuestion.correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Store answer
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selected: optionIndex,
      correct: currentQuestion.correct,
      isCorrect
    }]);
  };

  // Move to next question or show results
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  // If no questions, show message
  if (!questions || questions.length === 0) {
    return (
      <div className="container-mobile min-h-screen flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">📝</div>
        <h2 className="text-2xl font-bold text-gray-800">No Quiz Available</h2>
        <p className="text-gray-600 mt-2 text-center">
          There are no questions for this lesson yet.
        </p>
        <Button 
          variant="primary" 
          className="mt-6"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>
    );
  }

  // Quiz completion screen
  if (quizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 60;

    return (
      <div className="container-mobile min-h-screen flex flex-col items-center justify-center py-8">
        <Card className="w-full p-6 text-center">
          <div className="text-6xl mb-4">
            {passed ? '🎉' : '😊'}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {passed ? 'Great Job!' : 'Keep Learning!'}
          </h2>
          <p className="text-gray-600 mt-2">
            You got {score} out of {totalQuestions} correct
          </p>
          <div className="mt-4">
            <ProgressBar 
              progress={percentage} 
              height="h-6"
              color={passed ? 'bg-math-success' : 'bg-math-primary'}
              showLabel={false}
            />
            <p className="text-sm text-gray-500 mt-1">{percentage}%</p>
          </div>
          <div className="mt-6 space-y-3">
            {answers.map((answer, index) => (
              <div 
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  answer.isCorrect 
                    ? 'bg-math-success/20 text-math-success' 
                    : 'bg-math-error/20 text-math-error'
                }`}
              >
                Question {index + 1}: {answer.isCorrect ? '✅ Correct' : '❌ Wrong'}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button 
              variant="primary" 
              className="w-full"
              onClick={handleRestart}
            >
              🔄 Try Again
            </Button>
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => navigate(-1)}
            >
              📚 Back to Lessons
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Main quiz screen
  return (
    <div className="container-mobile min-h-screen py-4">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-bold text-math-primary">
          Score: {score}
        </span>
      </div>
      <ProgressBar 
        progress={((currentQuestionIndex + 1) / totalQuestions) * 100}
        height="h-3"
        showLabel={false}
      />

      {/* Question */}
      <Card className="mt-4 p-6">
        <h3 className="text-xl font-bold text-gray-800">
          {currentQuestion.question}
        </h3>
      </Card>

      {/* Options */}
      <div className="mt-4 space-y-3">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = index === currentQuestion.correct;
          const isSelected = selectedOption === index;
          const showCorrect = showFeedback && isCorrect;
          const showWrong = showFeedback && isSelected && !isCorrect;

          return (
            <QuizOption
              key={index}
              optionText={option}
              index={index}
              isSelected={isSelected}
              isCorrect={showCorrect}
              isWrong={showWrong}
              onClick={handleOptionSelect}
              disabled={showFeedback}
            />
          );
        })}
      </div>

      {/* Explanation (shown after selection) */}
      {showFeedback && (
        <Card className="mt-4 p-4 bg-math-accent/20">
          <p className="text-sm text-gray-700">
            💡 {currentQuestion.explanation}
          </p>
        </Card>
      )}

      {/* Next Button */}
      {showFeedback && (
        <Button 
          variant="primary" 
          className="w-full mt-4 py-4 text-lg"
          onClick={handleNext}
        >
          {currentQuestionIndex < totalQuestions - 1 ? 'Next Question →' : '🏆 See Results'}
        </Button>
      )}
    </div>
  );
};

export default QuizScreen;