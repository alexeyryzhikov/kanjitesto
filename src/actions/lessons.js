export const VIEW_LESSON = 'VIEW_LESSON';

export function viewLesson(lessonId) {
  return {
    type: VIEW_LESSON,
    lessonId
  };
}
