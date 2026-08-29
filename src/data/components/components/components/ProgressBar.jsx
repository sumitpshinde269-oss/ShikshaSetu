import React from 'react';

// Progress bar component for showing completion percentage
// Props: progress (0-100), height, color, showLabel
const ProgressBar = ({ 
  progress = 0, 
  height = 'h-4', 
  color = 'bg-math-secondary',
  showLabel = true,
  labelText = ''
}) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className="w-full">
      {showLabel && labelText && (
        <div className="flex justify-between text-sm mb-1">
          <span>{labelText}</span>
          <span>{Math.round(clampedProgress)}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${height}`}>
        <div
          className={`${color} h-full rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: `${clampedProgress}%` }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

export default ProgressBar;