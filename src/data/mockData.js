// Mock data for the math learning app
// This file contains dummy data that will be replaced with real API calls later

export const grades = [
  { id: 2, name: 'Grade 2', icon: '🌟', color: 'from-yellow-400 to-yellow-300' },
  { id: 3, name: 'Grade 3', icon: '🌈', color: 'from-green-400 to-green-300' },
  { id: 4, name: 'Grade 4', icon: '🚀', color: 'from-blue-400 to-blue-300' },
  { id: 5, name: 'Grade 5', icon: '🎯', color: 'from-purple-400 to-purple-300' },
  { id: 6, name: 'Grade 6', icon: '⚡', color: 'from-red-400 to-red-300' },
  { id: 7, name: 'Grade 7', icon: '🔥', color: 'from-orange-400 to-orange-300' },
  { id: 8, name: 'Grade 8', icon: '🏆', color: 'from-indigo-400 to-indigo-300' }
];

// Chapters for each grade
export const chapters = {
  2: [
    { id: 'c2-1', title: 'Numbers', icon: '🔢', description: 'Learn counting and number names' },
    { id: 'c2-2', title: 'Addition', icon: '➕', description: 'Simple addition up to 100' },
    { id: 'c2-3', title: 'Subtraction', icon: '➖', description: 'Simple subtraction up to 100' }
  ],
  3: [
    { id: 'c3-1', title: 'Multiplication', icon: '✖️', description: 'Learn times tables 1-10' },
    { id: 'c3-2', title: 'Division', icon: '➗', description: 'Simple division concepts' },
    { id: 'c3-3', title: 'Fractions', icon: '🍕', description: 'Introduction to fractions' }
  ],
  4: [
    { id: 'c4-1', title: 'Large Numbers', icon: '📊', description: 'Numbers up to 100,000' },
    { id: 'c4-2', title: 'Multiplication', icon: '✖️', description: 'Multi-digit multiplication' },
    { id: 'c4-3', title: 'Division', icon: '➗', description: 'Long division' },
    { id: 'c4-4', title: 'Fractions', icon: '🍕', description: 'Equivalent fractions' }
  ],
  5: [
    { id: 'c5-1', title: 'Decimals', icon: '🔟', description: 'Introduction to decimals' },
    { id: 'c5-2', title: 'Percentage', icon: '💯', description: 'Basic percentage concepts' },
    { id: 'c5-3', title: 'Geometry', icon: '📐', description: 'Shapes and angles' }
  ],
  6: [
    { id: 'c6-1', title: 'Algebra', icon: '🔤', description: 'Introduction to algebra' },
    { id: 'c6-2', title: 'Ratio & Proportion', icon: '⚖️', description: 'Understanding ratios' },
    { id: 'c6-3', title: 'Integers', icon: '🔢', description: 'Negative numbers' }
  ],
  7: [
    { id: 'c7-1', title: 'Algebra', icon: '🔤', description: 'Linear equations' },
    { id: 'c7-2', title: 'Geometry', icon: '📐', description: 'Triangles and circles' },
    { id: 'c7-3', title: 'Statistics', icon: '📊', description: 'Data handling' }
  ],
  8: [
    { id: 'c8-1', title: 'Algebra', icon: '🔤', description: 'Quadratic equations' },
    { id: 'c8-2', title: 'Geometry', icon: '📐', description: 'Mensuration' },
    { id: 'c8-3', title: 'Trigonometry', icon: '📐', description: 'Introduction to trigonometry' }
  ]
};

// Lessons for each chapter
export const lessons = {
  'c2-1': [
    { id: 'l1', title: 'Counting 1-100', description: 'Learn to count from 1 to 100', status: 'completed', videoUrl: '' },
    { id: 'l2', title: 'Number Names', description: 'Learn number names from 1-100', status: 'in-progress', videoUrl: '' },
    { id: 'l3', title: 'Place Value', description: 'Understanding tens and ones', status: 'locked', videoUrl: '' }
  ],
  'c2-2': [
    { id: 'l4', title: 'Adding Numbers', description: 'Simple addition with pictures', status: 'locked', videoUrl: '' },
    { id: 'l5', title: 'Addition Story Problems', description: 'Solve addition word problems', status: 'locked', videoUrl: '' }
  ],
  'c2-3': [
    { id: 'l6', title: 'Subtraction Basics', description: 'Simple subtraction with objects', status: 'locked', videoUrl: '' },
    { id: 'l7', title: 'Subtraction Story Problems', description: 'Solve subtraction word problems', status: 'locked', videoUrl: '' }
  ],
  'c3-1': [
    { id: 'l8', title: 'Times Tables 1-5', description: 'Learn multiplication tables 1-5', status: 'locked', videoUrl: '' },
    { id: 'l9', title: 'Times Tables 6-10', description: 'Learn multiplication tables 6-10', status: 'locked', videoUrl: '' }
  ],
  'c3-2': [
    { id: 'l10', title: 'Division Basics', description: 'Understanding division', status: 'locked', videoUrl: '' },
    { id: 'l11', title: 'Division Story Problems', description: 'Solve division word problems', status: 'locked', videoUrl: '' }
  ]
};

// Quiz questions for each lesson
export const quizQuestions = {
  'l1': [
    {
      id: 'q1',
      question: 'What number comes after 5?',
      options: ['4', '6', '7', '5'],
      correct: 1,
      explanation: 'Counting 1,2,3,4,5,6... so 6 comes after 5!'
    },
    {
      id: 'q2',
      question: 'How many fingers do you have on one hand?',
      options: ['3', '4', '5', '6'],
      correct: 2,
      explanation: 'You have 5 fingers on one hand!'
    },
    {
      id: 'q3',
      question: 'What is 2 + 3?',
      options: ['4', '5', '6', '7'],
      correct: 1,
      explanation: '2 + 3 = 5!'
    }
  ],
  'l2': [
    {
      id: 'q4',
      question: 'What is the number name for 10?',
      options: ['Ten', 'Twenty', 'Fifty', 'Hundred'],
      correct: 0,
      explanation: '10 is spelled as Ten!'
    },
    {
      id: 'q5',
      question: 'What number is called "Twenty"?',
      options: ['12', '20', '22', '2'],
      correct: 1,
      explanation: 'Twenty is the number 20!'
    }
  ],
  'l4': [
    {
      id: 'q6',
      question: 'What is 5 + 3?',
      options: ['6', '7', '8', '9'],
      correct: 2,
      explanation: '5 + 3 = 8!'
    },
    {
      id: 'q7',
      question: 'If you have 4 apples and get 2 more, how many do you have?',
      options: ['4', '5', '6', '7'],
      correct: 2,
      explanation: '4 + 2 = 6 apples!'
    }
  ]
};

// User progress mock data
export const userProgress = {
  completedLessons: ['l1'],
  inProgressLessons: ['l2'],
  badges: ['🌟 First Lesson', '📚 Bookworm', '⭐ Star Student'],
  streak: 5,
  totalPoints: 150
};

// Helper function to get lessons by chapter ID
export const getLessonsByChapter = (chapterId) => {
  return lessons[chapterId] || [];
};

// Helper function to get quiz for a lesson
export const getQuizForLesson = (lessonId) => {
  return quizQuestions[lessonId] || [];
};

// Helper function to get chapter by ID
export const getChapterById = (chapterId) => {
  for (const grade in chapters) {
    const found = chapters[grade].find(ch => ch.id === chapterId);
    if (found) return found;
  }
  return null;
};