import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import lessons from './lessons';

const rootReducer = combineReducers({
  counter,
  routing,
  lessons
});

export default rootReducer;
