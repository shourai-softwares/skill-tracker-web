/*
 *
 * SkillsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_SKILL_REQUESTED,
  ADD_SKILL_SUCCEEDED,
  GET_SKILL_REQUESTED,
  GET_SKILL_SUCCEEDED,
  GET_SKILL_FAILED,
} from './constants';

const initialState = fromJS({
  skills: [],
});

function skillsPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SKILL_REQUESTED:
      return state;
    case ADD_SKILL_SUCCEEDED:
      return state.updateIn(['skills'], (skills) => skills.push(action.data));
    case GET_SKILL_REQUESTED:
      return state;
    case GET_SKILL_SUCCEEDED:
      return state.set('skills', fromJS(action.data));
    case GET_SKILL_FAILED:
      return state;
    default:
      return state;
  }
}

export default skillsPageReducer;
