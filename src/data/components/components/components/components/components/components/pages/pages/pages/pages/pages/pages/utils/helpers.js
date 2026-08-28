// Utility helper functions for the app

// Format a number with commas (e.g., 1000 -> 1,000)
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Get a random emoji from a list
export const getRandomEmoji = () => {
  const emojis = ['🌟', '⭐', '🎉', '🎊', '💪', '🏆', '👏', '🎯'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

// Check if a string is a valid phone number (10 digits)
export const isValidPhoneNumber = (phone) => {
  return /^[0-9]{10}$/.test(phone);
};

// Truncate text to a certain length
export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Calculate progress percentage
export const calculateProgress = (completed, total) => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

// Get status color
export const getStatusColor = (status) => {
  const colors = {
    completed: 'text-math-success',
    'in-progress': 'text-math-primary',
    locked: 'text-gray-400'
  };
  return colors[status] || colors.locked;
};

// Shuffle array (for randomizing quiz options)
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};