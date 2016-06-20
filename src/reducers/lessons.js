import { createReducer } from 'redux-create-reducer';

import lessons from '../data/lessons/lessons';

const initialState = lessons;

export default createReducer(initialState, {

});
