import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

import protectedPages from '../middleware/protectedPages';

const router = routerMiddleware(browserHistory);

/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, protectedPages, router)
  );
}
