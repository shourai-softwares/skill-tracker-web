
import { fromJS } from 'immutable';
import skillsPageReducer from '../reducer';

describe('skillsPageReducer', () => {
  it('returns the initial state', () => {
    expect(skillsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
