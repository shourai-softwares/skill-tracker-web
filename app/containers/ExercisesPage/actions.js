/*
 *
 * ExercisesPage actions
 *
 */

import {
  GET_EXERCISE_URL,
  GET_EXERCISE_REQUESTED,
} from './constants';

export function getExercises() {
  return {
    type: GET_EXERCISE_REQUESTED,
    payload: {
      url: GET_EXERCISE_URL,
    },
  };
}
