import {routerActions} from 'react-router-redux';

export const PREPARE_TEST = "PREPARE_TEST";
export const NEXT_TASK = "NEXT_TASK";

export function startLessonTest(lessonId) {
  return dispatch => {
    dispatch(prepareTest({
      lessons: [lessonId]
    }));
    dispatch(routerActions.go('/test'));
  };
}

export function prepareTest(options) {
  return {
    type: PREPARE_TEST,
    options
  };
}

export function nextTask() {
  return {
    type: NEXT_TASK
  };
}
