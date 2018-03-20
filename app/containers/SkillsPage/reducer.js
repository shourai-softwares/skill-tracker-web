/*
 *
 * SkillsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_SKILL_ACTION,
  GET_SKILL_REQUESTED,
  GET_SKILL_SUCCEEDED,
  GET_SKILL_FAILED,
} from './constants';

const initialState = fromJS({
  skills: [],
});

function skillsPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SKILL_ACTION:
      return state;
    case GET_SKILL_REQUESTED:
      return state;
    case GET_SKILL_SUCCEEDED:
      return state.set('skills', action.data);
    case GET_SKILL_FAILED:
      return state;
    default:
      return state;
  }
}

export default skillsPageReducer;
