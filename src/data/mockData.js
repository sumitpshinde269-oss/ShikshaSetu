export const grades = [
  { id: '2', title: 'Grade 2', emoji: '🌟', accent: 'from-yellow-400 via-amber-300 to-orange-200', tagline: 'Starter Explorers' },
  { id: '3', title: 'Grade 3', emoji: '🌈', accent: 'from-emerald-400 via-green-300 to-lime-200', tagline: 'Growing Thinkers' },
  { id: '4', title: 'Grade 4', emoji: '🚀', accent: 'from-sky-400 via-cyan-300 to-blue-200', tagline: 'Bright Builders' },
  { id: '5', title: 'Grade 5', emoji: '🎯', accent: 'from-violet-400 via-purple-300 to-fuchsia-200', tagline: 'Focus Ninjas' },
  { id: '6', title: 'Grade 6', emoji: '⚡', accent: 'from-rose-400 via-pink-300 to-orange-200', tagline: 'Skill Boosters' },
  { id: '7', title: 'Grade 7', emoji: '🔥', accent: 'from-red-400 via-orange-300 to-yellow-200', tagline: 'Challenge Stars' },
  { id: '8', title: 'Grade 8', emoji: '🏆', accent: 'from-indigo-500 via-blue-400 to-cyan-300', tagline: 'Master Learners' },
];

export const subjectCatalog = {
  '2': [
    { id: 'math', name: 'Math', emoji: '🔢', accent: 'from-orange-400 to-pink-300', description: 'Numbers, patterns, and problem solving' },
    { id: 'science', name: 'Science', emoji: '🔬', accent: 'from-emerald-400 to-teal-300', description: 'Curious thinking and experiments' },
    { id: 'reading', name: 'Reading', emoji: '📚', accent: 'from-violet-400 to-indigo-300', description: 'Stories, words, and comprehension' },
  ],
  '3': [
    { id: 'math', name: 'Math', emoji: '🔢', accent: 'from-orange-400 to-pink-300', description: 'Tables, shapes, and measurement' },
    { id: 'science', name: 'Science', emoji: '🔬', accent: 'from-emerald-400 to-teal-300', description: 'Plants, animals, and forces' },
    { id: 'coding', name: 'Coding', emoji: '💻', accent: 'from-sky-400 to-cyan-300', description: 'Logic, patterns, and creative coding' },
  ],
  '4': [
    { id: 'math', name: 'Math', emoji: '🔢', accent: 'from-orange-400 to-pink-300', description: 'Fractions, units, and speed' },
    { id: 'science', name: 'Science', emoji: '🔬', accent: 'from-emerald-400 to-teal-300', description: 'Earth, life, and energy' },
    { id: 'reading', name: 'Reading', emoji: '📚', accent: 'from-violet-400 to-indigo-300', description: 'Poetry and comprehension' },
  ],
  '5': [
    { id: 'math', name: 'Math', emoji: '🔢', accent: 'from-orange-400 to-pink-300', description: 'Decimals, percentages, and geometry' },
    { id: 'science', name: 'Science', emoji: '🔬', accent: 'from-emerald-400 to-teal-300', description: 'Matter and the human body' },
    { id: 'coding', name: 'Coding', emoji: '💻', accent: 'from-sky-400 to-cyan-300', description: 'Build games and logic puzzles' },
  ],
  '6': [
    { id: 'math', name: 'Math', emoji: '🔢', accent: 'from-orange-400 to-pink-300', description: 'Ratios, algebra, and integers' },
    { id: 'science', name: 'Science', emoji: '🔬', accent: 'from-emerald-400 to-teal-300', description: 'Cells, reactions, and circuits' },
    { id: 'coding', name: 'Coding', emoji: '💻', accent: 'from-sky-400 to-cyan-300', description: 'Algorithms and creative design' },
  ],
  '7': [
    { id: 'math', name: 'Math', emoji: '🔢', accent: 'from-orange-400 to-pink-300', description: 'Linear equations and geometry' },
    { id: 'science', name: 'Science', emoji: '🔬', accent: 'from-emerald-400 to-teal-300', description: 'Physics, chemistry, and biology' },
    { id: 'coding', name: 'Coding', emoji: '💻', accent: 'from-sky-400 to-cyan-300', description: 'Problem solving with code' },
  ],
  '8': [
    { id: 'math', name: 'Math', emoji: '🔢', accent: 'from-orange-400 to-pink-300', description: 'Algebra, geometry, and trigonometry' },
    { id: 'science', name: 'Science', emoji: '🔬', accent: 'from-emerald-400 to-teal-300', description: 'Energy and scientific inquiry' },
    { id: 'coding', name: 'Coding', emoji: '💻', accent: 'from-sky-400 to-cyan-300', description: 'Automation and game logic' },
  ],
};

export const chapterMap = {
  '2-math': [
    {
      id: 'numbers',
      title: 'Numbers & Counting',
      emoji: '🔢',
      description: 'Count, compare, and arrange numbers with confidence.',
      lessons: [
        { id: 'counting-1-20', title: 'Counting 1 to 20', duration: '6 min', badge: 'Warm-up' },
        { id: 'number-patterns', title: 'Number Patterns', duration: '8 min', badge: 'New' },
      ],
    },
    {
      id: 'addition',
      title: 'Addition Adventures',
      emoji: '➕',
      description: 'Add objects, numbers, and story problems.',
      lessons: [
        { id: 'add-with-pictures', title: 'Add with Pictures', duration: '7 min', badge: 'Fun' },
        { id: 'word-problems', title: 'Story Problems', duration: '9 min', badge: 'Challenge' },
      ],
    },
  ],
  '3-math': [
    {
      id: 'multiplication',
      title: 'Multiplication Magic',
      emoji: '✖️',
      description: 'Learn equal groups and multiplication patterns.',
      lessons: [
        { id: 'times-tables-2-5', title: 'Times Tables 2-5', duration: '7 min', badge: 'Core' },
        { id: 'multiply-with-arrays', title: 'Arrays & Groups', duration: '8 min', badge: 'Practice' },
      ],
    },
    {
      id: 'division',
      title: 'Division Discovery',
      emoji: '➗',
      description: 'Share equally and solve simple division stories.',
      lessons: [
        { id: 'share-equally', title: 'Share Equally', duration: '6 min', badge: 'Starter' },
        { id: 'division-stories', title: 'Division Stories', duration: '9 min', badge: 'Challenge' },
      ],
    },
  ],
  '4-math': [
    {
      id: 'fractions',
      title: 'Fraction Fun',
      emoji: '🍕',
      description: 'Explore parts of a whole and compare fractions.',
      lessons: [
        { id: 'fraction-basics', title: 'Fraction Basics', duration: '8 min', badge: 'Starter' },
        { id: 'equivalent-fractions', title: 'Equivalent Fractions', duration: '10 min', badge: 'Skill' },
      ],
    },
    {
      id: 'measurement',
      title: 'Measure & Compare',
      emoji: '📏',
      description: 'Measure length, weight, and time with care.',
      lessons: [
        { id: 'measure-length', title: 'Length & Units', duration: '7 min', badge: 'Try' },
        { id: 'time-and-clock', title: 'Time & Clock', duration: '9 min', badge: 'Focus' },
      ],
    },
  ],
};

export const quizMap = {
  'counting-1-20': [
    { id: 'q1', question: 'What number comes after 12?', options: ['11', '13', '14', '10'], correct: 1, explanation: 'The next number after 12 is 13.' },
    { id: 'q2', question: 'Which number is greater than 9 but less than 11?', options: ['7', '8', '10', '12'], correct: 2, explanation: '10 is greater than 9 and less than 11.' },
    { id: 'q3', question: 'What is 4 + 3?', options: ['5', '6', '7', '8'], correct: 2, explanation: '4 + 3 = 7.' },
  ],
  'number-patterns': [
    { id: 'q4', question: 'What is the next number in 2, 4, 6, ?', options: ['7', '8', '9', '10'], correct: 1, explanation: 'This is an even-number pattern, so the next is 8.' },
    { id: 'q5', question: 'Which number is missing in 5, 10, 15, _, 25?', options: ['18', '20', '22', '24'], correct: 1, explanation: 'Skip counting by 5 gives 20.' },
    { id: 'q6', question: 'How many sides does a square have?', options: ['3', '4', '5', '6'], correct: 1, explanation: 'A square has 4 sides.' },
  ],
  'add-with-pictures': [
    { id: 'q7', question: 'If you have 3 balloons and get 2 more, how many balloons?', options: ['4', '5', '6', '7'], correct: 1, explanation: '3 + 2 = 5.' },
    { id: 'q8', question: 'What is 6 + 1?', options: ['6', '7', '8', '9'], correct: 1, explanation: '6 + 1 = 7.' },
    { id: 'q9', question: 'Which is the sum of 5 and 4?', options: ['8', '9', '10', '11'], correct: 2, explanation: '5 + 4 = 9.' },
  ],
};

export const progress = {
  streak: 5,
  stars: 320,
  accuracy: 82,
  badges: ['🌟 First Quiz', '📚 Story Reader', '🚀 Quick Learner'],
  focus: [
    { label: 'Lessons completed', value: '14' },
    { label: 'Correct answers', value: '82%' },
    { label: 'Skill streak', value: '5 days' },
  ],
};

export function getGradeById(gradeId) {
  return grades.find((grade) => grade.id === gradeId) || grades[0];
}

export function getSubjectsForGrade(gradeId) {
  return subjectCatalog[gradeId] || subjectCatalog['2'];
}

export function getChaptersForSubject(gradeId, subjectId) {
  return chapterMap[`${gradeId}-${subjectId}`] || [];
}

export function getQuizForLesson(lessonId) {
  return quizMap[lessonId] || [];
}
