
import { fromJS } from 'immutable';
import exercisesPageReducer from '../reducer';

describe('exercisesPageReducer', () => {
  it('returns the initial state', () => {
    expect(exercisesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
