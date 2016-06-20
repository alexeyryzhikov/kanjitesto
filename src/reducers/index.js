import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import lessons from './lessons';
import test from './test';

const rootReducer = combineReducers({
  routing,
  lessons,
  test
});

export default rootReducer;
