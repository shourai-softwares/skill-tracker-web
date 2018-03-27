import { createSelector } from 'reselect';

/**
 * Direct selector to the exercisesPage state domain
 */
const selectExercisesPageDomain = (state) => state.get('exercisesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ExercisesPage
 */

const makeSelectExercisesPage = () => createSelector(
  selectExercisesPageDomain,
  (substate) => substate.get('exercises').toJS()
);

export default makeSelectExercisesPage;
export {
  selectExercisesPageDomain,
};
