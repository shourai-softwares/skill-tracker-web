/*
 *
 * ExercisesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_EXERCISE_REQUESTED,
  GET_EXERCISE_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  exercises: [],
});

function exercisesPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EXERCISE_REQUESTED:
      return state;
    case GET_EXERCISE_SUCCEEDED:
      return state.set('exercises', fromJS(action.data));
    default:
      return state;
  }
}

export default exercisesPageReducer;
