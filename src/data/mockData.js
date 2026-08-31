export const grades = [
  { id: 'grade-2', name: 'Grade 2', track: 'Foundation track' },
  { id: 'grade-3', name: 'Grade 3', track: 'Core curriculum' },
  { id: 'grade-4', name: 'Grade 4', track: 'Applied learning' },
  { id: 'grade-5', name: 'Grade 5', track: 'Growth track' },
  { id: 'grade-6', name: 'Grade 6', track: 'Foundation track' },
  { id: 'grade-7', name: 'Grade 7', track: 'Core curriculum' },
  { id: 'grade-8', name: 'Grade 8', track: 'Advanced pathway' },
];

export const homeContent = {
  'grade-2': {
    subject: 'Mathematics',
    chapter: 'Algebra Foundations',
    lessons: [
      { id: 'algebra-foundations', title: 'Algebra Foundations', duration: '18 min', level: 'Beginner' },
      { id: 'linear-equations', title: 'Linear Equations', duration: '22 min', level: 'Intermediate' },
      { id: 'patterns', title: 'Patterns and Sequences', duration: '16 min', level: 'Beginner' },
    ],
  },
  'grade-3': {
    subject: 'Mathematics',
    chapter: 'Algebra Foundations',
    lessons: [
      { id: 'algebra-foundations', title: 'Algebra Foundations', duration: '18 min', level: 'Beginner' },
      { id: 'linear-equations', title: 'Linear Equations', duration: '22 min', level: 'Intermediate' },
      { id: 'patterns', title: 'Patterns and Sequences', duration: '16 min', level: 'Beginner' },
    ],
  },
  'grade-4': {
    subject: 'Mathematics',
    chapter: 'Algebra Foundations',
    lessons: [
      { id: 'algebra-foundations', title: 'Algebra Foundations', duration: '18 min', level: 'Beginner' },
      { id: 'linear-equations', title: 'Linear Equations', duration: '22 min', level: 'Intermediate' },
      { id: 'patterns', title: 'Patterns and Sequences', duration: '16 min', level: 'Beginner' },
    ],
  },
  'grade-5': {
    subject: 'Mathematics',
    chapter: 'Algebra Foundations',
    lessons: [
      { id: 'algebra-foundations', title: 'Algebra Foundations', duration: '18 min', level: 'Beginner' },
      { id: 'linear-equations', title: 'Linear Equations', duration: '22 min', level: 'Intermediate' },
      { id: 'patterns', title: 'Patterns and Sequences', duration: '16 min', level: 'Beginner' },
    ],
  },
  'grade-6': {
    subject: 'Mathematics',
    chapter: 'Algebra Foundations',
    lessons: [
      { id: 'algebra-foundations', title: 'Algebra Foundations', duration: '18 min', level: 'Beginner' },
      { id: 'linear-equations', title: 'Linear Equations', duration: '22 min', level: 'Intermediate' },
      { id: 'patterns', title: 'Patterns and Sequences', duration: '16 min', level: 'Beginner' },
    ],
  },
  'grade-7': {
    subject: 'Mathematics',
    chapter: 'Expressions and Equations',
    lessons: [
      { id: 'expressions', title: 'Expressions and Terms', duration: '20 min', level: 'Beginner' },
      { id: 'linear-equations', title: 'Linear Equations', duration: '22 min', level: 'Intermediate' },
      { id: 'patterns', title: 'Patterns and Sequences', duration: '16 min', level: 'Beginner' },
    ],
  },
  'grade-8': {
    subject: 'Mathematics',
    chapter: 'Geometry and Measures',
    lessons: [
      { id: 'linear-equations', title: 'Linear Equations', duration: '22 min', level: 'Intermediate' },
      { id: 'patterns', title: 'Patterns and Sequences', duration: '16 min', level: 'Beginner' },
      { id: 'expressions', title: 'Expressions and Terms', duration: '20 min', level: 'Beginner' },
    ],
  },
  'grade-9': {
    subject: 'Mathematics',
    chapter: 'Functions and Graphs',
    lessons: [
      { id: 'functions', title: 'Functions Overview', duration: '26 min', level: 'Intermediate' },
      { id: 'quadratic', title: 'Quadratic Graphs', duration: '28 min', level: 'Advanced' },
      { id: 'inequalities', title: 'Inequalities', duration: '22 min', level: 'Intermediate' },
    ],
  },
};

export const lessonContent = {
  'algebra-foundations': {
    id: 'algebra-foundations',
    title: 'Algebra Foundations',
    titleHi: 'बीजगणित आधार',
    videoTitle: 'Understanding variables and expressions',
    duration: '18 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    summary: 'Learn how variables represent unknown values and how expressions are formed step by step.',
    summaryHi: 'सीखें कि चर अज्ञात मानों का प्रतिनिधित्व कैसे करते हैं और अभिव्यक्तियाँ चरण दर चरण कैसे बनती हैं।',
    notes: [
      'A variable is a symbol used to represent an unknown quantity.',
      'Terms are separated by addition or subtraction in an expression.',
      'Simplifying expressions keeps the value the same while reducing complexity.',
    ],
    notesHi: [
      'चर एक प्रतीक है जिसका उपयोग अज्ञात मात्रा का प्रतिनिधित्व करने के लिए किया जाता है।',
      'अभिव्यक्ति में पदों को जोड़ या घटाव से अलग किया जाता है।',
      'अभिव्यक्तियों को सरल बनाना मान को समान रखता है जबकि जटिलता कम करता है।',
    ],
  },
  'linear-equations': {
    id: 'linear-equations',
    title: 'Linear Equations',
    titleHi: 'रैखिक समीकरण',
    videoTitle: 'Solving one-step and two-step equations',
    duration: '22 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    summary: 'Use inverse operations to isolate a variable and balance both sides of an equation.',
    summaryHi: 'विलोम संक्रियाओं का उपयोग करके चर को अलग करें और समीकरण के दोनों तरफ संतुलन बनाएं।',
    notes: [
      'Balance each side of the equation to keep it true.',
      'Use inverse operations to undo operations around the variable.',
      'Check your solution by substituting it back into the original equation.',
    ],
    notesHi: [
      'समीकरण को सही रखने के लिए दोनों तरफ संतुलन बनाए रखें।',
      'चर के चारों ओर की संक्रियाओं को उलटने के लिए विलोम संक्रियाओं का उपयोग करें।',
      'अपने उत्तर की जाँच करने के लिए उसे मूल समीकरण में पुनः प्रतिस्थापित करें।',
    ],
  },
  'patterns': {
    id: 'patterns',
    title: 'Patterns and Sequences',
    titleHi: 'पैटर्न और अनुक्रम',
    videoTitle: 'Recognising numerical patterns',
    duration: '16 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    summary: 'Identify growth rules in sequences and predict the next terms accurately.',
    summaryHi: 'अनुक्रम में विकास के नियमों को पहचानें और अगली संख्याओं का सही अनुमान लगाएं।',
    notes: [
      'A sequence follows a repeating or rule-based pattern.',
      'Identify the difference between terms to predict the next value.',
      'Patterns are often easier to understand when written in a table.',
    ],
    notesHi: [
      'अनुक्रम एक दोहराने योग्य या नियम-आधारित पैटर्न का अनुसरण करता है।',
      'अगली संख्या का अनुमान लगाने के लिए पदों के बीच अंतर पहचानें।',
      'पैटर्न अक्सर तालिका में लिखने पर समझने में आसान होते हैं।',
    ],
  },
  'expressions': {
    id: 'expressions',
    title: 'Expressions and Terms',
    titleHi: 'अभिव्यक्ति और पद',
    videoTitle: 'Working with variables, coefficients, and constants',
    duration: '20 min',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    summary: 'Break expressions into parts and understand how each term contributes to the whole value.',
    summaryHi: 'अभिव्यक्तियों को भागों में बाँटें और समझें कि प्रत्येक पद पूरे मान में कैसे योगदान देता है।',
    notes: [
      'A constant stays unchanged, while a variable can vary.',
      'Coefficients multiply variables in an expression.',
      'Like terms can be combined to simplify an expression.',
    ],
    notesHi: [
      'स्थिरांक बदला नहीं जाता, जबकि चर बदल सकता है।',
      'गुणांक अभिव्यक्ति में चर को गुणा करते हैं।',
      'समान पदों को संयोजित करके अभिव्यक्ति को सरल बनाया जा सकता है।',
    ],
  },
};

export const quizMap = {
  'algebra-foundations': [
    { id: 'q1', question: 'Which of these is an algebraic expression?', options: ['7', 'x + 5', '12 > 9', 'circle'], correct: 1, explanation: 'x + 5 contains a variable and an operation, so it is an algebraic expression.' },
    { id: 'q2', question: 'What is the value of x in x + 4 = 9?', options: ['3', '4', '5', '6'], correct: 2, explanation: 'Subtract 4 from both sides: x = 5.' },
    { id: 'q3', question: 'How many terms are in 3x + 2y + 7?', options: ['2', '3', '4', '5'], correct: 1, explanation: 'The expression has three terms: 3x, 2y, and 7.' },
  ],
  'linear-equations': [
    { id: 'q4', question: 'Solve 2x = 10', options: ['2', '4', '5', '6'], correct: 2, explanation: 'Divide both sides by 2 to get x = 5.' },
    { id: 'q5', question: 'What is the inverse operation of subtraction?', options: ['Multiplication', 'Addition', 'Division', 'Exponentiation'], correct: 1, explanation: 'Addition reverses subtraction.' },
    { id: 'q6', question: 'If x - 3 = 8, what is x?', options: ['5', '8', '11', '12'], correct: 2, explanation: 'Add 3 to both sides: x = 11.' },
  ],
  'patterns': [
    { id: 'q7', question: 'What is the next term in 2, 4, 6, 8, ?', options: ['9', '10', '11', '12'], correct: 1, explanation: 'The sequence increases by 2 each time, so the next term is 10.' },
    { id: 'q8', question: 'Which number fits the pattern 5, 10, 15, ?', options: ['16', '18', '20', '21'], correct: 2, explanation: 'The sequence counts by 5, so the next term is 20.' },
    { id: 'q9', question: 'A sequence increases by 3. If the first term is 4, what is the third term?', options: ['7', '9', '10', '13'], correct: 1, explanation: '4, 7, 10 — the third term is 10.' },
  ],
};

export const progress = {
  streak: 12,
  completed: 18,
  accuracy: 86,
  badges: ['Top performer', 'Quick learner', 'Consistent'],
  weeklyTarget: 5,
};

export function getGradeById(gradeId) {
  return grades.find((grade) => grade.id === gradeId) || grades[0];
}

export function getLessonsForGrade(gradeId) {
  return homeContent[gradeId]?.lessons || [];
}

export function getLessonContent(lessonId) {
  return lessonContent[lessonId] || lessonContent['algebra-foundations'];
}

export function getQuizForLesson(lessonId) {
  return quizMap[lessonId] || [];
}
