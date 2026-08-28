import React from 'react';

// Reusable card component with consistent styling
// Props: children, className, onClick
const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`card ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;