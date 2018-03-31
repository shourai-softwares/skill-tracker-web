/*
 *
 * SkillsPage reducer
 *
 */

import { GET_SKILL_TREE_SUCCEEDED } from 'containers/SkillsPage/constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  skillTrees: [],
});

function skillsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SKILL_TREE_SUCCEEDED:
      return state.set('skillTrees', fromJS(action.data));
    default:
      return state;
  }
}

export default skillsPageReducer;
