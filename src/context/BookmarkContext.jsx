import { createContext, useContext, useMemo, useState } from 'react';

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const [bookmarkedLessonIds, setBookmarkedLessonIds] = useState([]);

  const toggleBookmark = (lessonId) => {
    setBookmarkedLessonIds((currentBookmarks) => (
      currentBookmarks.includes(lessonId)
        ? currentBookmarks.filter((id) => id !== lessonId)
        : [...currentBookmarks, lessonId]
    ));
  };

  const value = useMemo(() => ({ bookmarkedLessonIds, toggleBookmark }), [bookmarkedLessonIds]);

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }

  return context;
}
