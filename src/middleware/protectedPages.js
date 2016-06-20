import { LOCATION_CHANGE, push } from 'react-router-redux';

export default store => next => action => {
  // Can only access test page if test data is prepared
  if (action.type === LOCATION_CHANGE
      && action.payload.pathname === '/test'
      && !store.getState().test.tasks) {
    next(push('/'));
  } else {
    next(action);
  }
};
