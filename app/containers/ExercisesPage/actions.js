/*
 *
 * ExercisesPage actions
 *
 */

import {
  ADD_EXERCISE_URL,
  ADD_EXERCISE_REQUESTED,
  GET_EXERCISE_URL,
  GET_EXERCISE_REQUESTED,
} from './constants';

export function addExercise(newExercise) {
  return {
    type: ADD_EXERCISE_REQUESTED,
    payload: {
      url: ADD_EXERCISE_URL,
    },
    newExercise,
  };
}

export function getExercises() {
  return {
    type: GET_EXERCISE_REQUESTED,
    payload: {
      url: GET_EXERCISE_URL,
    },
  };
}
