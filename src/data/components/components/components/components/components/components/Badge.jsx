import React from 'react';

// Badge component for achievements and status indicators
// Props: children, variant (completed/locked/inprogress), icon, className
const Badge = ({ children, variant = 'completed', icon = '', className = '' }) => {
  const variantClasses = {
    completed: 'badge-completed',
    locked: 'badge-locked',
    inprogress: 'badge-inprogress'
  };

  return (
    <span className={`badge ${variantClasses[variant]} ${className}`}>
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;