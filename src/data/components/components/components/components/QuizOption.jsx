import React from 'react';

// Quiz option component with feedback states
// Props: optionText, index, isSelected, isCorrect, isWrong, onClick, disabled
const QuizOption = ({ 
  optionText, 
  index, 
  isSelected = false, 
  isCorrect = false, 
  isWrong = false, 
  onClick, 
  disabled = false 
}) => {
  // Get background color based on state
  const getBackgroundClass = () => {
    if (isCorrect && isSelected) return 'bg-math-success text-white';
    if (isWrong && isSelected) return 'bg-math-error text-white';
    if (isSelected) return 'bg-math-primary text-white';
    if (isCorrect && !isSelected) return 'bg-math-success/20 border-2 border-math-success';
    return 'bg-white hover:bg-gray-50';
  };

  // Letter labels for options (A, B, C, D)
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <button
      onClick={() => !disabled && onClick(index)}
      disabled={disabled}
      className={`
        w-full text-left p-4 rounded-xl transition-all 
        ${getBackgroundClass()}
        ${disabled ? 'cursor-default' : 'cursor-pointer active:scale-98'}
        border-2 border-transparent
        min-h-[60px] text-lg font-medium
        shadow-sm hover:shadow-md
        flex items-center gap-3
      `}
    >
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-sm">
        {letters[index]}
      </span>
      <span>{optionText}</span>
    </button>
  );
};

export default QuizOption;