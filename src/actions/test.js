import { routerActions } from 'react-router-redux';

export const PREPARE_TEST = 'PREPARE_TEST';
export const NEXT_TASK = 'NEXT_TASK';

export function prepareTest(options) {
  return {
    type: PREPARE_TEST,
    options
  };
}

export function startLessonTest(lesson) {
  return dispatch => {
    dispatch(prepareTest({
      lessons: [lesson]
    }));
    dispatch(routerActions.push('/test'));
  };
}

export function nextTask(response) {
  return {
    type: NEXT_TASK,
    response
  };
}
